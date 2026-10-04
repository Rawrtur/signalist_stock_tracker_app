"use client"

import React from 'react'
import { NAV_ITEMS } from "@/lib/constants"
import Link from 'next/link'
import { usePathname } from "next/navigation"

const NavItems = () => {

    const pathName: string = usePathname() || "/";

    const isActive = (path: string) => {
        if (path === "/") return pathName === "/";
        return pathName.startsWith(path);
    }

    return (
        <ul className="flex flex-col sm:flex-row gap-3 p-2 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({ href, title }) => (
                <li key={href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors ${isActive(href) ? "text-gray-100" : ""
                        }`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default NavItems
