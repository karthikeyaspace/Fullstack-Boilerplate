import nodemailer from "nodemailer";
import config from "../../config/env";
import EmailOptions from "../../types/EmailOptions";
import logger from "../../utils/logger";

const transporter = nodemailer.createTransport({
  service: config.MAIL_PROVIDER,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASSWORD,
  },
});

const sendEmail = async (options: EmailOptions) => {
  try {
    await transporter.sendEmail(options);
  } catch (err) {
    logger("Error sending email", "services/email", err);
  }
};

export default sendEmail;
