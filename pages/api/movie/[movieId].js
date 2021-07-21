import { movieApi } from './'

export default async function handler(req, res) {
  try {
    const { method, query } = req

    if (method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      return res.status(405).end(`Method ${method} Not Allowed!`)
    }

    const params = {
      apikey: process.env.API_KEY,
      i: query.movieId
    }

    const { data } = await movieApi.get('/', { params })

    return res.status(200).json({ statusCode: 200, data })
  } catch (error) {
    return res.status(500).json({ statusCode: 500, message: error.message })
  }
}
