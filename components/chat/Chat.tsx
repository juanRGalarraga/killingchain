"use client";

import { useState } from "react";
import type { ChatProps, Message } from "@/types/chat";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { ChatSidebar } from "./ChatSidebar";
import { CHAT_MESSAGES } from "@/constants/messages";

export function Chat({
  onSendMessage,
  initialMessages = [],
  className = "",
}: ChatProps): React.ReactElement {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (message: string): Promise<void> => {
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await onSendMessage(message);
      if (response) {
        const assistantMessage: Message = {
          id: `resp-${Date.now()}`,
          role: "assistant",
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div
      className={`flex h-screen bg-zinc-950 text-white overflow-hidden ${className}`}
      role="application"
      aria-label="Aplicación de chat"
    >
      <ChatSidebar />

      <main className="flex-1 flex flex-col min-w-0">
        {hasMessages ? (
          <>
            <ChatMessages messages={messages} isLoading={isLoading} />
            <div className="px-4 pb-4 pt-2">
              <ChatInput onSubmit={handleSubmit} disabled={isLoading} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white mb-2">
                {CHAT_MESSAGES.WELCOME_TITLE}
              </h1>
              <p className="text-zinc-400 text-lg">
                {CHAT_MESSAGES.WELCOME_SUBTITLE}
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <ChatInput onSubmit={handleSubmit} disabled={isLoading} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
