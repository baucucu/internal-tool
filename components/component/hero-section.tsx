/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AsiMClI6A3K
 */
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full py-12 lg:py-16 xl:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_600px] xl:grid-cols-[1fr_800px]">
          <div className="flex flex-col space-y-2">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The complete platform for building the Web
              </h1>
              <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
                Give your team the toolkit to stop configuring and start
                innovating. Securely build, deploy, and scale the best web
                experiences.
              </p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="/login"
            >
              Get started
            </Link>
          </div>
          <Image
            src="/placeholder.svg"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
