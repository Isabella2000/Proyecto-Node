import { httpClientPlugin as http } from './http-client.plugin';
import { buildLogger } from './logger.plugin';
const { v4: uuidv4 } = require('uuid');
const getAgePlugins = require("get-age")

const getAge = (birthdate: string) => {
    if (!birthdate) return new Error("Tu cumple es requerido")
    return getAgePlugins(birthdate)
}

const getUUID = () => {
    return uuidv4()
}

export { http, getAge, getUUID, buildLogger }