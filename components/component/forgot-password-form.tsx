/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/t4xjVRGmbdP
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ForgotPasswordForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Reset password</CardTitle>
        <CardDescription>
          Enter your email below to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <Button className="w-full" type="submit">
            Reset password
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Want to log in?
          <Link className="underline ml-1" href="/login">
            Log in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
