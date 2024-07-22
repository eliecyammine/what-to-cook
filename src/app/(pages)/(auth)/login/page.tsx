import type { Metadata } from 'next/types';

import { signIn } from '@/lib/actions/auth';
import { TITLE } from '@/lib/constants/site';

import { Button } from '@/components/core/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/core/card';
import { Input } from '@/components/core/input';
import { Label } from '@/components/core/label';
import { Separator } from '@/components/core/separator';

import { LoginButton } from './_components/login-button';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Login',
  description: `Login to ${TITLE}`,
};

/// ---------- || LOGIN PAGE || ---------- ///

export default function LoginPage({ searchParams }: { searchParams: { message: string } }) {
  return (
    <Card className="mx-auto">
      <CardHeader className="text-center sm:mx-14">
        <CardTitle className="space-x-2 text-2xl">
          <span>Sign in to</span>

          <span className="font-logo text-3xl">What to Cook?</span>
        </CardTitle>

        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6 sm:mx-14">
        <form className="grid gap-4">
          <div className="flex space-x-2">
            <Button variant="outline" className="w-full" disabled>
              Google
            </Button>

            <Button variant="outline" className="w-full" disabled>
              Apple
            </Button>
          </div>

          <Separator />

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>

            <Input
              type="email"
              name="email"
              placeholder="jason@example.com"
              required
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>

              {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
            </div>

            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <LoginButton formAction={signIn}>Continue with Email</LoginButton>

          {searchParams?.message && (
            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
              {searchParams.message}
            </p>
          )}
        </form>

        {/* <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link
            href="#"
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
              'px-0 font-bold',
            )}
          >
            Sign up
          </Link>
        </div> */}
      </CardContent>
    </Card>
  );
}
