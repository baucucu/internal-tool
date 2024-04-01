import { ModeToggle } from "@/components/mode-toggle";
import { ForgotPasswordForm } from "@/components/component/forgot-password-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="fixed top-2 right-2">
        <ModeToggle />
      </div>
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
