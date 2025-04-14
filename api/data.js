import data from '../data.json';
console.log(data);
export default function handler(req, res) {
  res.status(200).json(data);
}