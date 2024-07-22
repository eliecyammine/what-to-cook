import { createClient } from '../services/supabase/server';

/// ---------- || GET HISTORY || ---------- ///

export async function getHistory(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error retrieving history:', error);
  } else {
    return data;
  }
}
