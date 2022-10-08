export default async function handler(request, response) {
  res.status(403).json({message: 'Error: request method not allowed.'});
}
