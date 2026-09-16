
import { Router } from "express";
import {
  getNotes,
  getNotesId,
  createNotes,
  deleteNotes,
  updateNote }
  from '../controllers/notesController.js';
const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getNotesId);

router.post('/notes', createNotes);

router.delete('/notes/:noteId', deleteNotes);

router.patch('/notes/:noteId', updateNote);


export default router;
