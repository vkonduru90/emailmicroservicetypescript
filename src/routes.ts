import { Router } from 'express';
import { Request, Response } from 'express';
import { createValidator } from 'express-joi-validation';

import { SendMailController } from './controllers/SendMailController';
import { emailBodySchema } from './joi-schemas/Email-Body-Schema';
const validator = createValidator({ passError: true });

const router = Router();
const sendMailController = new SendMailController();

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

router.post('/send-email', validator.body(emailBodySchema), sendMailController.sendHTMLEmail);

export { router };
