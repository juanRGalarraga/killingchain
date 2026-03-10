"use client";

import type { MessageProps } from "@/types/chat";
import { CHAT_TAILWIND_CLASSES } from "@/constants/chat";
import { CHAT_MESSAGES } from "@/constants/messages";
import { Bot } from "lucide-react";

export function Message({
  role,
  content,
  timestamp,
  isStreaming,
  className,
}: MessageProps): React.ReactElement {
  const roleStyles = CHAT_TAILWIND_CLASSES[role];

  if (role === "system") {
    return (
      <div className={`flex justify-center ${className ?? ""}`}>
        <span className={roleStyles}>{content}</span>
      </div>
    );
  }

  if (role === "user") {
    return (
      <article
        className={`flex justify-end ${className ?? ""}`}
        aria-label={`Mensaje de ${CHAT_MESSAGES.ROLE_USER}`}
      >
        <div className={`px-4 py-2.5 max-w-xl ${roleStyles}`}>
          <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
            {content}
          </p>
          {timestamp && (
            <time
              className="text-xs text-zinc-400 mt-1 block text-right"
              dateTime={timestamp.toISOString()}
            >
              {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </time>
          )}
        </div>
      </article>
    );
  }

  // Assistant
  return (
    <article
      className={`flex items-start gap-3 ${className ?? ""}`}
      aria-label={`Mensaje de ${CHAT_MESSAGES.ROLE_ASSISTANT}`}
    >
      <div className="w-7 h-7 rounded-full bg-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
        <Bot className="w-4 h-4 text-zinc-300" aria-hidden="true" />
      </div>

      <div className={`flex-1 ${roleStyles}`}>
        <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
          {content}
        </p>
        {isStreaming && (
          <span className="text-xs mt-1 block text-zinc-500">
            {CHAT_MESSAGES.STREAMING_INDICATOR}
          </span>
        )}
        {timestamp && (
          <time
            className="text-xs text-zinc-500 mt-1 block"
            dateTime={timestamp.toISOString()}
          >
            {timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </time>
        )}
      </div>
    </article>
  );
}
