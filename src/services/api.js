import axios from 'axios'

const api = axios.create({method:"get"})


const getContent = async (url) => {
    const res = await api.get(url)
    console.log(res)
}
export default getContent
