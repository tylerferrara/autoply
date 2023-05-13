import { json } from '@sveltejs/kit';

export async function POST(requestEvent) {
    const res = {
        msg: "I got you!"
    }
    return json(res, { status: 201 });
}