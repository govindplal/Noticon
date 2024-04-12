"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {
 return (
    <div className="flex flex-row justify-between px-6 pt-6">
        <Image
            src = "/logo.svg"
            height="100"
            width="100"
            className='object-contain'
            alt='logo' />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <Button asChild size="sm">
                  <Link href="/userflow">Get Noticon Free</Link>
                </Button>
        </div>
        <div>
            <ModeToggle/>
        </div>
    </div>
  )
}
