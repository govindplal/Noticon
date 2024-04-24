"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignIn, SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
 return (
    <div className="flex flex-row justify-between px-6 pt-6">
        <Image
            src = "/logo.svg"
            height="100"
            width="100"
            className='object-contain'
            alt='logo' />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
            {isLoading && (
              <p><Spinner/></p>
            )}
            {!isAuthenticated && !isLoading && (
            <>
              <div className='flex px-3 text-sm'>
                <SignInButton mode='modal' fallbackRedirectUrl='/documents'>
                  <Button className='w-full' size="sm" variant="ghost">
                    Sign in
                  </Button>
                </SignInButton>
              </div>
            </>   
            )}
            {isAuthenticated && !isLoading && (
              <>
              <Button
              variant="ghost"
              size="sm" asChild>
                <Link href="/documents">
                  Enter Jotion
                </Link>
              </Button>
              <UserButton
              afterSignOutUrl="/"
              />
              </>
            )}

            <Button asChild size="sm">
              <Link href="/documents">Get Noticon Free</Link>
            </Button>
        <div>
          <ModeToggle/>
        </div>
        </div>
    </div>
  )
}
