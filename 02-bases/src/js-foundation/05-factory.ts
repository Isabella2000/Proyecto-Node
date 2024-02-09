export const makeBuildPerson = (
    { getUUID, getAge }:
        {
            getUUID: () => string,
            getAge: (birth: string) => string
        }) => {

    return ({ name, birthdate }: { name: any, birthdate: any }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}
//* Para un array se define antes el tipo
// const hola = ([]: string[]) => {}
