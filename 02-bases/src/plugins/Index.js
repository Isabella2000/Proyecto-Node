const { http } = require('./http-client.plugin');
const buildLogger = require('./logger.plugin');
const { v4: uuidv4 } = require('uuid');
const getAgePlugins = require("get-age")

const getAge = (birthdate) => {
    if (!birthdate) return new Error("Tu cumple es requerido")
    return getAgePlugins(birthdate)
}

const getUUID = () => {
    return uuidv4()
}

module.exports = {
    http, getAge, getUUID, buildLogger
}