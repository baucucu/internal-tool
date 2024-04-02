import { ContactForm } from "@/components/component/contact-form";
import { ModeToggle } from "@/components/mode-toggle";


export default function Page() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[700px] flex-col space-y-2.5 p-4 md:-mt-32">
                <ContactForm />
            </div>
        </main>
    )
}