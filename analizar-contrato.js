const fs = require('fs');
require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic();
const contrato = fs.readFileSync('contrato.txt', 'utf8');

async function analizarContrato() {
  const mensaje = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 2048,
    messages: [
      {
        role: 'user',
        content: `Analiza este contrato y señala cláusulas problemáticas bajo la ley dominicano:\n\n${contrato}`
      }
    ]
  });

  console.log(mensaje.content[0].text);
}

analizarContrato();