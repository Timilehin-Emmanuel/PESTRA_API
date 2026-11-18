const fastq = require('fastq');
const { Resend } = require('resend')
const resend = new Resend(process.env.RESEND_API_KEY)

const wait = (ms) => new Promise((resolve, ms)=> setTimeout(ms))

const sendEmailWorker = async (task) => {
     const maxAttempt = 3
     for (let attempt = 1; attempt <= maxAttempt; attempt++) {
          try {
             const result = await resend.emails.send({
                    from: '"Pestra" <cs@pestra.net>',
                    to: task.to,
                    subject: task.subject,
                    html: task.html,
                    tags: [
                         {name: "recipient_name", value: task?.name},
                         {name: "recipient_email", value: task?.email}
                    ]
               })
               console.log(`[Email Success] Email sent to ${task.to} on attempt #${attempt}, response: ${result}`)
               return;
          }
          catch (error) {
               console.error(`[Email Failure] failed sending to ${task.to}`)
               if (attempt < maxAttempt) {
                    const delay = attempt * 2000
                    console.warn(`[Retry] Waitn ${delay / 1000}s before next attempt...`)
                    await wait(delay)
               }
               else {
                    logger.error(`[Error] Email to ${task.to} failed completely after ${maxAttempt} attempts...`)
               }
          }
     }
}


const emailQueue = fastq.promise(sendEmailWorker, 4)

module.exports = emailQueue