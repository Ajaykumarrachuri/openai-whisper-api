import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_APIKEY,
})

const openai = new OpenAIApi(configuration)

export async function whisper({
    mode = 'transcriptions',
    file,
    model = 'whisper-1',
    prompt = '',
    response_format = 'json',
    temperature = 0,
    language = 'en',
}) {

    try {

        let response = {}
        let response1 = {}

        if(mode === 'translations') {
 

            response = await openai.createTranslation(
                file,
                model,
                prompt,
                response_format,
                temperature,
                language,
            )

        } else {

            response = await openai.createTranscription(
                file,
                model,
                prompt,
                response_format,
                temperature,
                language,
            )

        }

        return response;

    } catch(error) {

        console.log(error)

        throw error

    }

}
export async function openAI({
    input = "Hi",
}){
    try {

        let response1 = {}

        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: input}],
          });
          

        return chatCompletion;

    } catch(error) {

        console.log(error)

        throw error

    }
}