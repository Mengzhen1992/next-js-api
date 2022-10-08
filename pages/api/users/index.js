import {getAllUsers, createUser} from '../../../services/userService';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    const users = await getAllUsers();
    return response.status(200).json(users);
  } else if (request.method === 'POST') {
    const postData = JSON.parse(request.body);
    const newUser = await createUser(
      postData.name,
      postData.gender,
      postData.email,
    );

    return response
      .status(201)
      .json({message: `User created`, createdUser: newUser});
  }

  response.status(403).json({message: 'Error: request method not allowed.'});
}
