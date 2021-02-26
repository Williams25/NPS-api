import nodemailer, { Transporter } from 'nodemailer'
import handlebars from 'handlebars'
import fs from 'fs'

class SendMailServices {
  private client: Transporter

  constructor() {
    nodemailer.createTestAccount().then((account) => {
      const transport = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      })

      this.client = transport
    }).catch((error) => {
      console.error(error)
    })
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString('utf8')

    const mailTemplateParse = handlebars.compile(templateFileContent)
    const html = mailTemplateParse(variables)

    await this.client.sendMail({
      to,
      subject,
      html,
      from: "NPS <william007.gabriel@gmail.com>"
    }, (err, info) => {
      if (err) {
        console.log('Error occurred. ' + err.message)
        return process.exit(1);
      }

      console.log('Message sent: %s', info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    })
  }
}

export default new SendMailServices()