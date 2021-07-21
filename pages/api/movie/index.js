import axios from 'axios'
import qs from 'qs'
import { cors, runMiddleware } from '../cors'

export const movieApi = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
  paramsSerializer: (params = {}) => {
    return qs.stringify(params, { arrayFormat: 'comma', skipNulls: true })
  }
})

export default async function handler(req, res) {
  try {
    await runMiddleware(req, res, cors)
    const { query } = req

    const params = {
      apikey: process.env.API_KEY,
      ...query
    }

    const { data } = await movieApi.get('/', { params })
    const rows = data.Search
    const count = data.totalResults

    return res.status(200).json({ statusCode: 200, data: { rows, count } })
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message })
  }
}
