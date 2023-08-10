import { axiosa } from "../config/axios"
export const getAllUser =async () => {
    const { data } = await axiosa.get('/users/all')
    return data
}