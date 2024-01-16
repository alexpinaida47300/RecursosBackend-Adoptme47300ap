import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

router.get('/v2',usersController.getAllUsers);

router.get('/:uid',usersController.getUser);
router.put('/:uid',usersController.updateUser);
router.delete('/:uid',usersController.deleteUser);


export default router;