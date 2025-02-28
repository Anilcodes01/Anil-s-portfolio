import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCode,
  IconHome,
  IconMail,
  IconMenu2,
  IconTerminal2,
} from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export const FloatingDock = () => {
  return (
    <div className="flex items-center justify-center h-24">
      <FloatingDockCore />
    </div>
  );
};

type Link = {
  title: string;
  icon: React.ReactNode;
  href: string;
};

type CustomMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

const FloatingDockCore = () => {
  const links: Link[] = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Blog",
      icon: <IconMenu2 className="h-full w-full" />,
      href: "/blogs",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Resume",
      icon: <IconTerminal2 className="h-full w-full" />,
      href: "/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "#",
    },
  ];

  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e: CustomMouseEvent) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="rounded-full px-12 justify-center bg-neutral-100 flex gap-4 w-fit relative"
    >
      {links.map((el) => (
        <IconContainer mouseX={mouseX} key={el.title} el={el} />
      ))}
    </motion.div>
  );
};

export const IconContainer = ({
  el,
  mouseX,
}: {
  el: Link;
  mouseX: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname(); 
  const isActive = pathname === el.href; 

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthIconTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightIconTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });


  const iconColorClass = isActive ? "text-orange-500" : "text-neutral-500";

  return (
    <Link
      href={el.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className={`flex relative items-center justify-center rounded-full ${hovered ? "bg-neutral-200" : ""}`}
      >
        <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              x:'-50%'
            }}
            animate={{
              opacity: 1,
              y: 0,
              x:'-50%'
            }}
            exit={{
              opacity: 0,
              y: 2,
              x:'-50%'
            }}
            className="absolute text-xs left-1/2 -translate-x-1/2 -top-8 inset-x-0 px-2 py-0.4 whitespace-pre bg-neutral-100 rounded-md w-fit text-neutral-500 z-10"
          >
            {el.title}
          </motion.div>
        )}
        </AnimatePresence>
       
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={`flex items-center justify-center ${iconColorClass}`}
        >
          {React.cloneElement(el.icon as React.ReactElement, { className: `h-full w-full ${iconColorClass}` })}
        </motion.div>
      </motion.div>
    </Link>
  );
};