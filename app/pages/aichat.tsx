import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '~/components/Footer';

export function OllamaChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const systemPrompt = {
      role: "system",
      content: "You are a helpful AI assistant. Keep your responses short and concise (1-2 sentences maximum). Format your responses properly, such as placing list entries in newlines, and bullet points when necessary.",
    };

    const userMessage = { role: "user", content: input };
    
    let newMessages = [];

    if (messages.length === 0) {
      // First message, include the system prompt
      newMessages = [systemPrompt, userMessage];
    } else {
      // Already chatting, just add user's new message
      newMessages = [...messages, userMessage];
    }

    setMessages(newMessages); // Update UI immediately
    setInput(""); // Clear input right away

    const body = {
      model: "mistral", 
      messages: newMessages,
      stream: false,  
    };

    try {
      const res = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (!data.message || !data.message.content) {
        throw new Error("Invalid response from Ollama.");
      }

      setMessages([...newMessages, { role: "assistant", content: data.message.content }]);
    } catch (error) {
      console.error("Error communicating with Ollama:", error);
      setMessages([...newMessages, { role: "assistant", content: "⚠️ Failed to connect to Ollama or parse response." }]);
    }
  };

  return (
    <div className="min-h-screen flex font-sans text-white bg-gray-900">
      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Chat Section */}
        <main className="flex-1 overflow-y-auto px-10 py-8 flex flex-col items-center">
          <div className="space-y-6 w-full max-w-2xl">

            {/* Message List */}
            <div className="space-y-4">
              {messages
                .filter((msg) => msg.role !== "system") // 🛡️ SKIP system messages
                .map((msg, idx) => (
                    <div key={idx} 
                    className={`p-3 rounded-md ${
                      msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"
                    }`}>
                    <strong>{msg.role === "user" ? "You" : "AthenA.I."}:</strong>
                    <pre className="whitespace-pre-wrap mt-1">{msg.content}</pre>
                    </div>
))}

            </div>

            {/* Input Box */}
            <div className="flex w-full gap-2">
              <textarea
                className="flex-1 p-3 border rounded-md bg-gray-800 text-white resize-none"
                rows="2"
                placeholder="Enter your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
