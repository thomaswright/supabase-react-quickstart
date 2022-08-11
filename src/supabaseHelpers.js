export function handleSupabaseError({ error, status, data }) {
  if (error && status !== 406) {
    throw error;
  }
  return data;
}
