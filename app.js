const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;2

app.use(express.json());

app.post('/submit', async (req, res) => {
  const prompt = req.body.prompt;
  
  // Call OpenAI API (example)
  const openaiResponse = await axios.post('https://api.openai.com/v1/completions', {
    model: "gpt-3.5-turbo",
    prompt: prompt
  }, {
    headers: {
      'Authorization': `Bearer YOUR_OPENAI_API_KEY`
    }
  });

  // Add similar logic for Claude, LLaMA if they provide APIs.
  
  res.send({
    openai: openaiResponse.data,
    // Include responses from other models
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
