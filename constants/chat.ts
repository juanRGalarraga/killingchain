/**
 * Chat Component Constants
 *
 * Centralized configuration for chat roles and styling variants.
 */

import type { MessageRole } from "@/types/chat";

/**
 * CHAT_ROLES - Enumeration of available message roles
 *
 * Centralized constants for the three message role types.
 * Used throughout the app for type safety and to avoid string literals.
 *
 * @property USER - Messages sent by end users
 * @property ASSISTANT - Messages from the AI assistant
 * @property SYSTEM - System notifications or information
 *
 * @example
 * const role: MessageRole = CHAT_ROLES.USER;
 */
export const CHAT_ROLES = {
  USER: "user",
  ASSISTANT: "assistant",
  SYSTEM: "system",
} as const;

/**
 * CHAT_TAILWIND_CLASSES - Role-based Tailwind styling variants
 *
 * Maps each message role to its corresponding Tailwind CSS classes
 * for consistent styling across the chat interface.
 */
export const CHAT_TAILWIND_CLASSES: Record<MessageRole, string> = {
  user: "ml-auto bg-zinc-700 text-white rounded-2xl rounded-br-sm",
  assistant: "mr-auto text-zinc-100",
  system: "mx-auto text-zinc-500 text-xs italic",
};

/**
 * DEFAULT_AVATAR_ICONS - Default avatar icons by role
 *
 * Used when no custom avatar is provided for a message.
 */
export const DEFAULT_AVATAR_ICONS: Record<MessageRole, string> = {
  user: "👤",
  assistant: "🤖",
  system: "⚙️",
};
