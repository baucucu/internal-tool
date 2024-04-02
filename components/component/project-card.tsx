import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function ProjectCard() {
    return (
        <Card className="w-full max-w-sm rounded-xl border">
            <div className="p-6 grid gap-4">
                <Image
                    alt="Project"
                    className="rounded-lg"
                    height={300}
                    layout="responsive"
                    src="/placeholder.svg"
                    width={400}
                />
                <div className="text-sm grid gap-1.5">
                    <h3 className="font-semibold text-base">Travel Journal</h3>
                    <p className="line-clamp-3 text-sm">A digital space to document your adventures.</p>
                </div>
                <div className="w-full max-w-full space-y-4 py-5">
                    <Link
                    className="bg-primary-foreground text-primary border border-primary hover:bg-primary hover:text-accent rounded-md px-5 py-2" 
                    href="#"
                    >
                    View more
                    </Link>
                </div>
            </div>
        </Card>
    )
}