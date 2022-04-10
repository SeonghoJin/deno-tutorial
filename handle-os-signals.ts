console.log("Press Ctrl-C to trigger a SIGINT signal");

const sigintHandler = () => {
    console.log("interrupted");
    Deno.exit();
}

Deno.addSignalListener("SIGINT", sigintHandler);

setTimeout(() => {}, 10000);

setTimeout(() => {
    Deno.removeSignalListener("SIGINT", sigintHandler);
}, 1000);

