import { Router } from 'express';

export const router = Router();

router.get('/', (_req, res) => {
  res.json({ success: true, message: 'API is ready', data: null });
});
