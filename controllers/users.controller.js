import usersService from "../services/users.service.js";

const getAllUsers = async (req, res) => {
    const users = await usersService.getAllUsers()
    res.status(200).send(users)

}

const postUsers = async (req, res) => {
    const user = req.body
    const newUser = await usersService.postUsers(user)
    res.send(newUser)
}

const patchUsers = async (req, res) => {
    const { id } = req.params
    const data = req.body 
    const patchUser = await usersService.patchUsers(id, data)
    res.send(patchUser)
}

export default {
    getAllUsers,
    postUsers,
    patchUsers
}