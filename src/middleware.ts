import { defineMiddleware } from "astro/middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
    console.log("Request received!");
    
    return next()
});