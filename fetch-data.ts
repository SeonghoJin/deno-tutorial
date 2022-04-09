const jsonResponse = await fetch("https://api.github.com/users/denoland");
const jsonData = await jsonResponse.json();
console.log(jsonData);

const textResponse = await fetch("https://deno.land/");
const textData = await textResponse.text();
console.log(textData);

try {
    await fetch("https://does.not.exists/");
} catch (error) {
    console.log(error);
}