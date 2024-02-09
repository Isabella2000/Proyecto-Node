// ?Esta hoja solo explica que se puede hacer una funcion con arrow function

const users = [
    {
        "id": 1,
        "name": "Jhon Doe"
    },
    {
        "id": 2,
        "name": "Jhoana Doe"
    },
]

export const getUserById = (id: number, callback: any) => {
    const user = users.find((user) => user.id === id)
    !user && callback(`User not found ${id}`)
    return callback(null, user)
}
