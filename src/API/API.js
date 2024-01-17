import axios from 'axios';
const Api = 'https://mrm-0-server.vercel.app/'
// const Api = 'http://127.0.0.1:5000/'

export const baseWEB = "https://mrmadvertisingdubai.com/"
const baseURL = axios.create({baseURL : `${Api}api/posts/`})

// export const baseImg =    // https://mrm-0-server.vercel.app/image/ + url
export const baseImg = `${Api}api/posts/image`
export const GetImg = `${Api}/image`

export default baseURL

