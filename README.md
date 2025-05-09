# AthenA.I.
A web application made to assist graduates within the job market. Create an account and find potential internships, hone your skills, and interact with an AI model built to assist you and your career.

# Ollama Installation
In order to use the AI Chat page of AthenA.I., Ollama is required to be running locally

MacOS/Linux
curl -fsSL https://ollama.com/install.sh | sh
ollama pull mistral
ollama serve


Windows
Windows requires WSL to run ollama

  wsl --install -d Ubuntu

Installing wsl will require a restart

After in wsl:
curl -fsSL https://ollama.com/install.sh | sh
ollama pull mistral
ollama serve

Ollama will default to port 11434
