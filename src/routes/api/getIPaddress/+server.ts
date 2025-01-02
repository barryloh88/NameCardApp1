// File: /src/routes/api/getIPaddress/+server.ts
import { json } from "@sveltejs/kit";

export async function GET({ getClientAddress }) {
    let clientIp = getClientAddress(); // Get the client's IP address
    return json({ clientIp }); // Return it as JSON
}

