import {getUserById, deleteUser} from '../../../services/userService';

export default async function handler(request, response) {
  const {id} = request.query;

  if (request.method !== 'GET' && request.method !== 'DELETE')
    return response
      .status(403)
      .json({message: 'Error: request method not allowed.'});

  switch (request.method) {
    case 'GET':
      const user = await getUserById(id);
      if (user === undefined)
        return response.status(404).json({message: 'user was not found.'});
      return response.status(200).json(user);
    case 'DELETE':
      const deletedUser = await deleteUser(id);
      if (deletedUser.message !== undefined)
        return response.status(404).json({message: 'user was not found.'});

      return response
        .status(200)
        .json({message: 'User was deleted', deletedUser: deletedUser});

    /* default:
      return response.status(405).json({message: 'HTTP method is not allowed'}); */
  }
}
