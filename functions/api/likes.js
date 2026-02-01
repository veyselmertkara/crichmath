export async function onRequestGet(context) {
    const { env, request } = context;
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
        return new Response(JSON.stringify({ error: "Missing key" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    let value = await env.BLOG_LIKES.get(key);
    let count = value ? parseInt(value) : 0;

    return new Response(JSON.stringify({ count }), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function onRequestPost(context) {
    const { env, request } = context;
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
        return new Response(JSON.stringify({ error: "Missing key" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    let value = await env.BLOG_LIKES.get(key);
    let count = value ? parseInt(value) : 0;

    count++;

    await env.BLOG_LIKES.put(key, count.toString());

    return new Response(JSON.stringify({ count }), {
        headers: { "Content-Type": "application/json" },
    });
}

export async function onRequestDelete(context) {
    const { env, request } = context;
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (!key) {
        return new Response(JSON.stringify({ error: "Missing key" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    let value = await env.BLOG_LIKES.get(key);
    let count = value ? parseInt(value) : 0;

    // Sayı 0'ın altına düşmesin
    if (count > 0) {
        count--;
    }

    await env.BLOG_LIKES.put(key, count.toString());

    return new Response(JSON.stringify({ count }), {
        headers: { "Content-Type": "application/json" },
    });
}
