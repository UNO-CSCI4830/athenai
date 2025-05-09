# AthenA.I.
AthenA.I. is a web application built to empower recent graduates as they enter the job market and launch their professional careers. Designed with user experience in mind, the platform allows users to create a personal account to explore tailored internship opportunities, sharpen their existing skills, and access resources relevant to their career goals. Whether you're just beginning your journey or seeking to refine your direction, AthenA.I. offers a streamlined and supportive environment to help you succeed.

At the core of AthenA.I. is an intelligent AI assistant developed to provide personalized career guidance and real-time support. From helping you polish your resume and prepare for interviews to offering curated learning recommendations and job search strategies, the AI is your on-demand career coach. Users can interact with the assistant to receive actionable advice, explore different career paths, and stay on track with their goals. AthenA.I. is more than a job-hunting tool—it's your AI-powered partner in building a confident and successful future.

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
