import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'https://agile-mesa-62017.herokuapp.com'
        // baseURL : 'http://127.0.0.1:8000/'

    }
)

export const registerNewUser = async (user) => {
    console.log("apihelper:", user)
    const res = await api.post('/users/register/', user)
    return res.data
}

export const userLogin = async (user) => {
    const res = await api.post('/users/login/', user)
    return res.data
}

export const createWorkout = async (workout, token) => {
    const res = await api.post('/workouts/', workout, {
        headers: {
            authorization: `JWT ${token}`
        }
    })
    return res
}