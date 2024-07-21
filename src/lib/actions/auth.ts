'use server';

import { redirect } from 'next/navigation';

import { createClient } from '@/lib/services/supabase/server';

// export async function authenticate(formData: FormData) {
//   const email = formData.get('email') as string;

//   const supabase = createClient();

//   const { error } = await supabase.auth.signInWithOtp({
//     email,

//     options: {
//       shouldCreateUser: true,
//       emailRedirectTo: 'http://localhost:3000',
//     },
//   });

//   if (error) {
//     console.error('Supabase authentication error:', error.message);

//     return redirect('/login?message=Could not authenticate user');
//   }

//   revalidatePath('/', 'layout');
//   return redirect('/');
// }

/// ---------- || SIGN IN || ---------- ///

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect('/login?message=Could not authenticate user');
  }

  return redirect('/');
}

/// ---------- || SIGN UP || ---------- ///

// export async function signUp(formData: FormData) {
//   const origin = headers().get('origin');

//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;

//   const supabase = createClient();

//   const { error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       emailRedirectTo: `${origin}/auth/callback`,
//     },
//   });

//   if (error) {
//     return redirect('/login?message=Could not authenticate user');
//   }

//   return redirect('/login?message=Check email to continue sign in process');
// }

/// ---------- || SIGN OUT || ---------- ///

export async function signOut() {
  const supabase = createClient();

  await supabase.auth.signOut();

  return redirect('/');
}
