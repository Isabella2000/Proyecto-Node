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
    const user = users.find(function (user) {
        return user.id === id
    })
    if (!user) {
        return callback(`User not found ${id}`)
    }
    return callback(null, user)
}

module.exports = { getUserById }