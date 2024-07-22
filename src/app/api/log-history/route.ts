import { NextResponse } from 'next/server';

import { createClient } from '@/lib/services/supabase/server';

export async function POST(request: Request) {
  const { ingredients } = await request.json();

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userId = user?.id;

  if (!userId || !ingredients) {
    console.error('Missing user ID or ingredients');

    return NextResponse.json(
      {
        error: 'Missing data',
      },
      { status: 400 },
    );
  }

  try {
    const ingredientsText = ingredients.join(',');

    // Check if the ingredients already exist for the user
    const { data: existingEntries, error: selectError } = await supabase
      .from('histories')
      .select('id, ingredients')
      .eq('user_id', userId)
      .eq('ingredients', ingredientsText);

    if (selectError) {
      return NextResponse.json(
        {
          error: 'Failed to check existing history',
        },
        { status: 500 },
      );
    }
    console.log(existingEntries);
    if (existingEntries && existingEntries.length > 0) {
      // If an entry already exists, update the updated_at timestamp
      const { error: updateError } = await supabase
        .from('histories')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', existingEntries[0].id);

      if (updateError) {
        return NextResponse.json(
          {
            error: 'Failed to update fetch history',
          },
          { status: 500 },
        );
      }

      return NextResponse.json({ success: true });
    }

    // Insert a new history record if no existing entry is found
    const { error: insertError } = await supabase.from('histories').insert([
      {
        user_id: userId,
        ingredients: ingredientsText,
        updated_at: new Date().toISOString(), // Ensure the updated_at field is set
      },
    ]);

    if (insertError) {
      return NextResponse.json(
        {
          error: 'Failed to log fetch history',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);

    return NextResponse.json(
      {
        error: 'Server error',
      },
      { status: 500 },
    );
  }
}
