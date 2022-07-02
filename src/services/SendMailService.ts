import nodemailer, { Transporter } from 'nodemailer';

import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService {
  private client!: Transporter;

  constructor() {}

  async getEmailClient() {
    const account = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });

    this.client = transporter;
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString('utf8');
    const mailTemplateParse = handlebars.compile(templateFileContent);
    const html = mailTemplateParse(variables);
    await this.getEmailClient();
    const message = await this.client.sendMail({
      to,
      subject,
      html,
      from: process.env.FROM_EMAIL,
    });
    console.log('Message sent:%s', message.messageId);
    const messageUrl = nodemailer.getTestMessageUrl(message);
    console.log('Preview URL: %s', messageUrl);
    return { messageId: message.messageId, messageUrl };
  }
}
export default new SendMailService();
