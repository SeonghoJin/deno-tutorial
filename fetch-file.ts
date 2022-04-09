import {writableStreamFromWriter} from "https://deno.land/std@0.134.0/streams/mod.ts";
const fileResponse = await fetch("https://deno.land/logo.svg");

if(fileResponse.body){
    const file = await Deno.open("./logo.svg", {write: true, create: true});
    const writableStream = writableStreamFromWriter(file);
    await fileResponse.body.pipeTo(writableStream);
}

