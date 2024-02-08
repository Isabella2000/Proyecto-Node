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

function getUserById(id, callback) {
    const user = users.find((user) => user.id === id)
    !user && callback(`User not found ${id}`)
    return callback(null, user)
}

module.exports = { getUserById }