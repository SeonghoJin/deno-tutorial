import { serve } from "./remote_module1.ts";

const timer = (time: number) =>
  new Promise((res) => setTimeout(() => res(time), time));

console.log("http://localhost:8000/");
serve((_) => {
  const timers = [timer(1000), timer(3000), timer(5000)];

  (async () => {
    for await (const time of timers) {
      console.log(time);
    }
  })();

  return new Response("Hello World\n");
}, { port: 8000 });
