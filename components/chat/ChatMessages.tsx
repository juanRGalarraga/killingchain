"use client";

import { useRef, useEffect, useState } from "react";
import type { ChatMessagesProps } from "@/types/chat";
import { Message } from "./Message";
import { CHAT_MESSAGES } from "@/constants/messages";
import { ChevronDown } from "lucide-react";

export function ChatMessages({
  messages,
  isLoading = false,
  className = "",
}: ChatMessagesProps): React.ReactElement {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleScroll = (): void => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setShowScrollButton(scrollHeight - scrollTop - clientHeight > 100);
    }
  };

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className={`flex-1 overflow-y-auto bg-zinc-950 ${className}`}
      role="region"
      aria-label="Área de mensajes del chat"
      aria-live="polite"
      aria-atomic="false"
    >
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">
        {messages.map((message) => (
          <Message key={message.id} {...message} />
        ))}

        {isLoading && (
          <div
            className="flex items-center gap-2 text-zinc-400 text-sm"
            role="status"
            aria-label={CHAT_MESSAGES.LOADING}
          >
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:300ms]" />
            </span>
          </div>
        )}
      </div>

      <div ref={messagesEndRef} />

      {showScrollButton && (
        <div className="fixed bottom-24 right-8">
          <button
            onClick={scrollToBottom}
            className="bg-zinc-700 text-white rounded-full p-2 shadow-lg hover:bg-zinc-600 transition-colors border border-zinc-600"
            aria-label="Desplazarse al final"
          >
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
