import { NextApiRequest, NextApiResponse } from 'next'

export default function status(
  request: NextApiRequest,
  response: NextApiResponse
) {
  return response.status(200).json({ status: 'ok' })
}
