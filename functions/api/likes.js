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

    // KV'den veriyi al. Eğer yoksa 0 kabul et.
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

    // Mevcut değeri al, arttır ve kaydet
    let value = await env.BLOG_LIKES.get(key);
    let count = value ? parseInt(value) : 0;

    count++;

    await env.BLOG_LIKES.put(key, count.toString());

    return new Response(JSON.stringify({ count }), {
        headers: { "Content-Type": "application/json" },
    });
}
