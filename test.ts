const timer = (time: number) =>
    new Promise((res) => setTimeout(() => res(time), time));


for await (const time of [timer(1000), timer(500), timer(3000)]) {
    console.log(time);
}