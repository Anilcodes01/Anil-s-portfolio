"use client";
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
    <div className="flex items-center bg-[#fff8f7]  justify-center h-24">
      <FloatingDockCore />
    </div>
  );
};

type Link = {
  title: string;
  icon: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
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
      href: "#",
    },
    {
      title: "Blog",
      icon: <IconMenu2 className="h-full w-full" />,
      href: "/blogs",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/in/anil-pal-532b692a6/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full" />,
      href: "https://x.com/Anilcodes01",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full" />,
      href: "#",
    },
    {
      title: "Resume",
      icon: <IconTerminal2 className="h-full w-full" />,
      href: "https://drive.google.com/file/d/1xqHGsXko3tr8V9ktDSoDoemT_s10S2xs/view?usp=drive_link",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/Anilcodes01",
      target: "_blank",
      rel: "noopener noreferrer",
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

  const widthIconTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );
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
      target={el.target}
      rel={el.rel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{
          width,
          height,
        }}
        className={`flex relative items-center justify-center rounded-full ${
          hovered ? "bg-neutral-200" : ""
        }`}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
                x: "-50%",
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: "-50%",
              }}
              exit={{
                opacity: 0,
                y: 2,
                x: "-50%",
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
          {React.cloneElement(el.icon as React.ReactElement, {
            className: `h-full w-full ${iconColorClass}`,
          })}
        </motion.div>
      </motion.div>
    </Link>
  );
};
