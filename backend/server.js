const express = require("express");
const cors = require("cors");
const app = express();
const { Configuration, OpenAIApi } = require("openai");

// Load API key from .env file
require("dotenv").config();

const configuration = new Configuration({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the MILTON AI backend!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let conversationHistory = "";

app.post("/process-text", async (req, res) => {
  const userText = req.body.userText;
  console.log("Received text:", userText);

  // Update the conversation history with the user's message
  conversationHistory += `User: ${userText}\n`;

  try {
    // Prepare the prompt with the conversation history
    const prompt = `${conversationHistory}Assistant:`;

    // Call OpenAI API
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: prompt }],
    });

    console.log("OpenAI API response:", response);

    // Use the first generated response
    const responseText = response.data.choices[0].message.content;

    // Update the conversation history with the AI assistant's response
    conversationHistory += `Assistant: ${responseText}\n`;

    // Send the response back to the frontend
    res.json({ responseText });
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ error: "Error generating response" });
  }
});
