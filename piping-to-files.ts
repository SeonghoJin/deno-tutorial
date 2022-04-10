import {
    readableStreamFromReader,
    writableStreamFromWriter
} from "https://deno.land/std@0.134.0/streams/conversion.ts";

import { mergeReadableStreams } from "https://deno.land/std@0.134.0/streams/merge.ts";

const file = await Deno.open("./process_output", {
    read: true,
    write: true,
    create: true
});

const fileWriter = await writableStreamFromWriter(file);

const process = Deno.run({
    cmd: ["yes"],
    stdout: "piped",
    stderr: "piped"
});

const stdout = readableStreamFromReader(process.stdout);
const stderr = readableStreamFromReader(process.stderr);
const joined = mergeReadableStreams(stdout, stderr);

console.log(await joined.pipeTo(fileWriter));

setTimeout(() => {
    process.kill("SIGINT");
}, 100);

