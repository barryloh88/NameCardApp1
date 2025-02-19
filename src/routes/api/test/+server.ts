import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify({ message: "Test API is working!" }), {
        headers: { 'Content-Type': 'application/json' }
    });
};
