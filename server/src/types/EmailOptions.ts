import { Attachment } from 'nodemailer/lib/mailer';

interface EmailOptions {
  from: string;
  to: string | string[];
  cc?: string;
  bcc?: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: Attachment[];
}

export default EmailOptions;