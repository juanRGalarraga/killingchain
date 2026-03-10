/**
 * Chat UI Messages (Spanish)
 *
 * Centralized Spanish text labels for the chat interface.
 * All user-facing text should be defined here for easy localization.
 */

/**
 * CHAT_MESSAGES - UI labels and messages in Spanish
 */
export const CHAT_MESSAGES = {
  ROLE_USER: "Tú",
  ROLE_ASSISTANT: "Asistente",
  ROLE_SYSTEM: "Sistema",
  INPUT_PLACEHOLDER: "Escribe tu pregunta...",
  SEND_BUTTON: "Enviar mensaje",
  LOADING: "Escribiendo...",
  EMPTY_STATE: "No hay mensajes aún",
  ERROR_EMPTY_MESSAGE: "No puedes enviar un mensaje vacío",
  STREAMING_INDICATOR: "Escribiendo...",
  TIMESTAMP_NOW: "Ahora",
  TIMESTAMP_YESTERDAY: "Ayer",
  TIMESTAMP_DAYS_AGO: "días atrás",
  NEW_CHAT: "Nuevo chat",
  SEARCH_CHATS: "Buscar chats",
  YOUR_CHATS: "Tus chats",
  WELCOME_TITLE: "¡Hola!",
  WELCOME_SUBTITLE: "¿En qué puedo ayudarte?",
  ATTACH_FILE: "Adjuntar archivo",
} as const;

/**
 * getRoleName - Get the Spanish display name for a message role
 *
 * @param role - The message role
 * @returns The Spanish display name
 */
export function getRoleName(
  role: "user" | "assistant" | "system"
): string {
  switch (role) {
    case "user":
      return CHAT_MESSAGES.ROLE_USER;
    case "assistant":
      return CHAT_MESSAGES.ROLE_ASSISTANT;
    case "system":
      return CHAT_MESSAGES.ROLE_SYSTEM;
    default:
      const exhaustiveCheck: never = role;
      return exhaustiveCheck;
  }
}
