import express from 'express';
import {HelloWord} from './routes';

const app = express();

app.get('/', HelloWord);

app.listen(3333);