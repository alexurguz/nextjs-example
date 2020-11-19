import { people } from '../../../database/data'

export default function handler(req, res) {
  res.status(200).json(people)
}