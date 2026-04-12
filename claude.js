require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic();

async function preguntarClaude() {
  const mensaje = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: '¿Cuáles son las 3 principales oportunidades de AI en el sector legal dominicano?'
      }
    ]
  });

  console.log(mensaje.content[0].text);
}

preguntarClaude();