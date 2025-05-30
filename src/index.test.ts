import { describe, expect, test } from "vitest"
import app from "./index"

describe("Example", () => {
    test("GET /posts", async () => {
        const res = await app.request("/status")
        expect(res.status).toBe(200)
        expect(await res.json()).toEqual({ message: "Wakati API is up and running! Everything is functioning properly." })
    })
})

test("POST /analyze", async () => {
    const res = await app.request("/analyze", {
        method: "POST",
        body: JSON.stringify({
            text: "Hello there working on Hono."
        }),
        headers: new Headers({
            "Content-Type": "application/json"
        })
    });

    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json).toHaveProperty("ari");
    expect(json).toMatchObject({ wordCount: 5 });
});
