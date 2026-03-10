"use client";

import { useState, useRef } from "react";
import type { ChatInputProps } from "@/types/chat";
import { CHAT_MESSAGES } from "@/constants/messages";
import { ArrowUp, Paperclip } from "lucide-react";

export function ChatInput({
  onSubmit,
  disabled = false,
  placeholder = CHAT_MESSAGES.INPUT_PLACEHOLDER,
  className = "",
}: ChatInputProps): React.ReactElement {
  const [value, setValue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (): void => {
    if (value.trim() && !disabled) {
      onSubmit(value.trim());
      setValue("");
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const canSubmit = value.trim().length > 0 && !disabled;

  return (
    <div
      className={`relative w-full bg-zinc-800 rounded-2xl border border-zinc-700 focus-within:border-zinc-600 transition-colors ${className}`}
      role="region"
      aria-label="Área de entrada de mensajes"
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Escribe tu mensaje aquí"
        rows={1}
        className="w-full bg-transparent px-4 pt-4 pb-12 text-white placeholder-zinc-500 resize-none focus:outline-none text-sm leading-relaxed disabled:cursor-not-allowed"
        style={{ minHeight: "56px", maxHeight: "200px" }}
      />

      {/* Bottom toolbar */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <button
          className="text-zinc-400 hover:text-zinc-200 p-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
          aria-label={CHAT_MESSAGES.ATTACH_FILE}
          title={CHAT_MESSAGES.ATTACH_FILE}
          type="button"
        >
          <Paperclip className="w-4 h-4" />
        </button>

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          aria-label={CHAT_MESSAGES.SEND_BUTTON}
          title={CHAT_MESSAGES.SEND_BUTTON}
          type="button"
          className="flex items-center justify-center w-8 h-8 rounded-full transition-colors disabled:cursor-not-allowed bg-white disabled:bg-zinc-600 hover:bg-zinc-200 disabled:hover:bg-zinc-600"
        >
          <ArrowUp className="w-4 h-4 text-zinc-900 disabled:text-zinc-400" />
        </button>
      </div>
    </div>
  );
}
