const openai = require('../config/openai');

class ChatbotService {
    async generateResponse(userMessage) {
        try {
            const completion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "You are a knowledgeable tea expert assistant. Provide accurate, helpful information about teas, their preparation, health benefits, and cultural significance. Keep responses concise and focused on tea-related topics."
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ],
                model: "gpt-3.5-turbo",
                max_tokens: 150,
                temperature: 0.7,
            });

            return completion.choices[0].message.content;
        } catch (error) {
            console.error('Error generating chatbot response:', error);
            throw new Error('Failed to generate response');
        }
    }
}

module.exports = new ChatbotService(); 