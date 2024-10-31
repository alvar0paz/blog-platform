import { Router } from 'express';
import { getAllComments, createComment, updateComment, deleteComment } from '../controllers/commentsController';

const router = Router();

router.get('/', getAllComments);
router.post('/', createComment);
router.put('/:commentId', updateComment);
router.delete('/:commentId', deleteComment);

export default router;
