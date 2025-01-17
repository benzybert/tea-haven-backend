const chatbotService = require('../services/chatbotService');

class ChatbotController {
    async generateResponse(req, res, next) {
        try {
            const { message } = req.body;
            
            if (!message) {
                return res.status(400).json({ error: 'Message is required' });
            }

            const response = await chatbotService.generateResponse(message);
            res.json({ response });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ChatbotController(); 