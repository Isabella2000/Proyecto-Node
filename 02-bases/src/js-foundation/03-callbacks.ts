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

export function getUserById(id: number, callback: any) {
    const user = users.find(function (user) {
        return user.id === id
    })
    if (!user) {
        return callback(`User not found ${id}`)
    }
    return callback(null, user)
}
