import { Request, Response } from 'express';

import SendMailServices from '../services/SendMailService';
import { resolve } from 'path';

class SendMailController {
  async sendHTMLEmail(request: Request, response: Response) {
    const { email, subject, title, name, description } = request.body;
    const variables = {
      name,
      title,
      description,
    };
    console.log(`Sending Variables ::: ${JSON.stringify(variables)}`);
    const templatePath = resolve(__dirname, '..', 'views', 'emails', 'welcome.hbs');

    const result = await SendMailServices.execute(email, subject, variables, templatePath);
    return response.json(result);
  }
}
export { SendMailController };
