//! Para coger una variable de un lugar a otro con required 
// Puedes const hola = require("./js-foundation/01-template.js") y console.log(hola.emailTemplate)
// Pero mejor un destructuring para coger de una la variable mandada desde otro lugar, eso si solo se utilizara esa variable del objeto que se manda

//! 01-Template
// const { emailTemplate } = require("./js-foundation/01-template.js")
// console.log(emailTemplate)

//! 04-Arrow
// const { getUserById } = require("./js-foundation/03-callbacks.js")
// const id = 1
// getUserById(id, (error, user)=> {
//     if (error) {
//         throw new Error(error)
//     }
//     console.log({user}) })


//! 05-factory functions funciones dentro de funciones
// const { getUUID, getAge } = require('../src/plugins/Index.js');
// const { makeBuildPerson } = require("./js-foundation/05-factory.js")

// const makePerson = makeBuildPerson({ getUUID, getAge })

// const obj = { "name": "Isabella", "birthdate": "2005-06-06" }

// const Isabella = makePerson(obj)
// console.log({ Isabella })


//! 06-Promesas async/await y axios
// const getRickById = require("./js-foundation/06-promises")

// getRickById(4)
//     .then((personaje) => console.log({ personaje }))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('Finalmente'));


//! 07-logger winston
const { buildLogger } = require("./plugins/Index")
const logger = buildLogger("app.js")
logger.log("Hola mundo")
logger.error("ohno hubo un error")