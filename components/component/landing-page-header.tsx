/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/tE0zB6FSEEw
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import { JSX, SVGProps } from "react";

export function LandingPageHeader() {
  return (
    <header className="w-full py-4 md:py-6">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="/">
            <HomeIcon className="w-6 h-6" />
            <span className="font-bold">Home</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            className="flex items-center space-x-1.5 font-medium text-sm/relaxed transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/#features"
          >
            Features
          </Link>
          <Link
            className="flex items-center space-x-1.5 font-medium text-sm/relaxed transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/#pricing"
          >
            Pricing
          </Link>
          <Link
            className="flex items-center space-x-1.5 font-medium text-sm/relaxed transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            // className="inline-flex items-center justify-center rounded-md h-10 bg-green-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-green-800"
            className="bg-primary text-background hover:bg-primary-foreground border border-primary hover:border-primary-foreground hover:text-primary hover:border-primary rounded-md px-5 py-2" 
            href="/login"
          >
            Get started
          </Link>
          <div className="flex items-center space-x-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
