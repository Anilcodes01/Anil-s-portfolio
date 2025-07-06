"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationButtons() {
    const currentRoute = usePathname();

    const Buttons = [
        {
            name: 'About',
            href: '/' 
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Blogs',
            href: '/blogs'
        },
        {
            name: 'Testimonials',
            href: '/testimonials'
        },
    ];

    return (
        <div className="flex gap-8  w-fit left-[20%]">
            {Buttons.map((button) => (
                <Link href={button.href} key={button.name}>
                    <div className={`px-3 py-1 rounded-xl transition-colors ${
                        button.href === '/' 
                            ? currentRoute === button.href
                                ? 'text-black bg-green-500 font-bold'
                                : 'hover:text-green-400'
                            : currentRoute.startsWith(button.href)
                                ? 'text-black bg-green-500 font-bold'
                                : 'hover:text-green-400'
                    }`}>
                        {button.name}
                    </div>
                </Link>
            ))}
            </div>
    );
}