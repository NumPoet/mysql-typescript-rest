import { Router } from 'express';
const router = Router();

import { getPosts } from '../controllers/post.controller';

router.route('/')
    .get(getPosts);

export default router;    