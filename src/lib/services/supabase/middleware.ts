import { type NextRequest, NextResponse } from 'next/server';

import { createServerClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,

    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const url = request.nextUrl.clone();

  if (!user) {
    if (
      !url.pathname.startsWith('/login') &&
      !url.pathname.startsWith('/auth') &&
      url.pathname !== '/'
    ) {
      // No user and trying to access protected routes, redirect to login page
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  } else {
    if (url.pathname.startsWith('/login') || url.pathname.startsWith('/auth')) {
      // User is logged in but trying to access login or auth page, redirect to homepage
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
  }

  // Return the original response
  return supabaseResponse;
}
