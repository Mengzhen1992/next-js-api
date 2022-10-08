export default async function handler(request, response) {
  if (request.method === 'GET') {
    const data = [];
    return response.status(200).json(data);
  }

  res.status(403).json({message: 'Error: request method not allowed.'});
}
