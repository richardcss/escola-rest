import { Router } from 'express';
import userController from '../controllers/userController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/:id', userController.show);
// router.get('/', loginRequired, userController.index);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
