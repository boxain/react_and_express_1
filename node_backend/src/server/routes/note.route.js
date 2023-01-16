import express from 'express';
import noteCtrl from '../controllers/note.controller';


const router = express.Router();
router.route('/').get(noteCtrl.noteGet);
router.route('/').post(noteCtrl.noteInsert);
router.route('/').delete(noteCtrl.noteDelete);

export default router;

