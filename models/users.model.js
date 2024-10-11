const users = [
    {id: 1, nombre: "Santiago", apellido: "Giménez", edad: 18},
    {id: 2, nombre: "Jimena", apellido: "Salteri", edad: 45},
    {id: 3, nombre: "Celeste", apellido: "Pellini", edad: 54},
    {id: 4, nombre: "Martín", apellido: "Pérez", edad: 25},
    {id: 5, nombre: "Guillermo", apellido: "Granados", edad: 23}
]

const getAllUsers = async () => {
    return users
}

const postUsers = async(user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return user
}

const patchUsers = async (id, data) => {
    const index = users.findIndex((e) => e.id == id)
    const newUser = {...users[index], ...data}
    users.splice(index, 1, newUser)
    return "Actualización parcial completa."
}

export default {
    getAllUsers,
    postUsers,
    patchUsers
}