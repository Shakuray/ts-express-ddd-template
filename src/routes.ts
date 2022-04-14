import express, { Request, Response } from 'express';
const asyncHandler = require('express-async-handler')
var router = express.Router();

router.get('/', (req : Request, res : Response) => res.status(200).send('I am alive!'))

import { HelloWorld } from './Infrastructure/Controller/HelloWorldController';
router.get('/hello-world', asyncHandler(HelloWorld))

export default router;
