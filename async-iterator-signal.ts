import { signal } from "https://deno.land/std@0.134.0/signal/mod.ts";

const sig = signal("SIGUSR1", "SIGINT");

setTimeout(() => { }, 5000);

for await (const _ of sig) {
    console.log("interrupt or user1 signal received");
}