const fs = require("fs")
const content = fs.readFileSync("README.md", "utf8");

const wordContent = content.split(" ")
// const reactWordContent = wordContent.filter(data => data == "React").length
const reactWordContent = content.match(/react/gi ?? []).length

console.log(reactWordContent)


