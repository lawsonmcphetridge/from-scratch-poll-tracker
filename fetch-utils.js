const SUPABASE_URL = 'https://inscuvivqekepbbejenx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imluc2N1dml2cWVrZXBiYmVqZW54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzgyMjIsImV4cCI6MTk3NTIxNDIyMn0.mMud0-2r80_UKoUASXkpnvhHuiTGmN43rkaeKWa6nkQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



export async function createPoll(data) {
    const response = await client.from('poll-list').insert(data);
    return response.data;
}

export async function getPolls() {
    const response = await client.from('poll-list').select('*');
    return response.data;
}