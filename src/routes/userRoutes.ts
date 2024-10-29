import express from 'express';
import { addUser, getUsers } from '../controller/api';

const router = express.Router();

// Define routes
router.post('/add', addUser);
router.get('/', getUsers);

export default router;
