import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function HelloWord(request: Request, response: Response) {
  const user = createUser({
    email: 'diegop@gmail.com',
    password: '123456',
    techs: [
      'nodejs', 
      'react',
      { title: 'Java', experience: 100},
    ]
  });

  return response.json({message: 'Hello Typescript'});
}