"use server"

interface MessageProps{
    id: string
    fullName: string
    email: string
    phoneDetails: string
    message: string
    fileURL: string
}

export const sendMessage = async( data: MessageProps) => {
    try {
        const message = `
        [
        {
            "type": "section",
            "text":{
                "type": "mrkdwn",
                "text": "# Ticket numero: ${data.id}"
            }
        },
        {
            "type": "section",
            "text":{
                "type": "plain_text",
                "text": "Nombre: ${data.fullName} \n Email: ${data.email}\n Telefono: ${data.phoneDetails}\n Mensaje: ${data.message}"
            }
        },{
            "type": "section",
            "text":{
                "type": "mrkdwn",
                "text": "Archivo: ${data.fileURL}"
            }
        }
          ]
          `

        /*
        [{"type": "section", "text": {"type": "plain_text", "text": "Hello world"}}]
         */
        const res = await fetch(`${'http://localhost:3000'}/api/slack/notify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(message)
        })
        console.log('RESPONSE: ', res)
    } catch (error) {
        console.log(error)
        throw error
    }
}
