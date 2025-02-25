import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify({ message: "Hello, API is working!" }), {
        headers: { 'Content-Type': 'application/json' }
    });
};
