import { copy } from "https://deno.land/std@0.134.0/streams/conversion.ts"
import { StringWriter } from "https://deno.land/std@0.134.0/io/writers.ts";

const sw = new StringWriter();

const listener = Deno.listen({ port: 8080 });
console.log("listening on 0.0.0.0:8080");
for await (const conn of listener) {
    console.log(conn);
    copy(conn, conn).finally(() => conn.close)
}