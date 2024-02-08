
const { SHELL, LESS } = process.env
console.table({ SHELL, LESS })

const personajes = ["batman", "superman", "linternaverde", "xmen"]
const [, , , xmen] = personajes
console.table(personajes)