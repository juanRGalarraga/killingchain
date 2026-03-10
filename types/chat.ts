/**
 * Chat Component Type Definitions
 *
 * Central type definitions for the chat component system.
 * All components use these interfaces to ensure type safety and consistency.
 */

/**
 * MessageRole - The role of the message sender
 *
 * Union type for the three available message roles in the chat system:
 * - "user": Messages sent by the end user
 * - "assistant": Messages from the AI assistant
 * - "system": System notifications or information messages
 *
 * @example
 * const role: MessageRole = "assistant";
 */
export type MessageRole = "user" | "assistant" | "system";

/**
 * Message - A single message in the chat
 *
 * Represents a message with metadata including role, content, and optional streaming state.
 * Used throughout the chat system for storing and displaying chat history.
 *
 * @property id - Unique identifier for the message, typically generated as `msg-${timestamp}`
 * @property role - The role of the message sender (user, assistant, or system)
 * @property content - The text content of the message
 * @property timestamp - Optional timestamp when the message was created
 * @property avatar - Optional custom avatar/emoji for display (defaults to role icon)
 * @property isStreaming - Optional flag indicating if message content is being streamed in
 *
 * @example
 * const message: Message = {
 *   id: "msg-1234567890",
 *   role: "assistant",
 *   content: "¡Hola! ¿En qué puedo ayudarte?",
 *   timestamp: new Date(),
 *   isStreaming: false
 * };
 */
export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp?: Date;
  avatar?: string;
  isStreaming?: boolean;
}

/**
 * MessageProps - Props for the Message component
 *
 * Extends the Message interface and adds optional styling.
 * Passed directly to the Message component for rendering individual messages.
 *
 * @property className - Optional CSS class names for custom styling
 *
 * @example
 * <Message
 *   id="msg-123"
 *   role="user"
 *   content="Hola"
 *   className="custom-message-style"
 * />
 */
export interface MessageProps extends Message {
  className?: string;
}

/**
 * ChatInputProps - Props for the ChatInput component
 *
 * Configures the input field behavior, submission, and styling.
 * Includes callback for message submission and optional state management.
 *
 * @property onSubmit - Callback function invoked when user submits a message
 * @property disabled - When true, disables input and send button (useful during loading)
 * @property placeholder - Custom placeholder text (defaults to CHAT_MESSAGES.INPUT_PLACEHOLDER)
 * @property className - Optional CSS class names for custom styling
 *
 * @example
 * <ChatInput
 *   onSubmit={(msg) => handleSendMessage(msg)}
 *   disabled={isLoading}
 *   placeholder="Escribe algo aquí..."
 * />
 */
export interface ChatInputProps {
  onSubmit: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

/**
 * ChatMessagesProps - Props for the ChatMessages component
 *
 * Configures the message display area with auto-scrolling and loading indicators.
 * Handles the scrollable container that displays the message history.
 *
 * @property messages - Array of Message objects to display
 * @property isLoading - When true, shows loading indicator at bottom
 * @property className - Optional CSS class names for custom styling
 *
 * @example
 * <ChatMessages
 *   messages={chatHistory}
 *   isLoading={isWaitingForResponse}
 *   className="bg-gray-50"
 * />
 */
export interface ChatMessagesProps {
  messages: Message[];
  isLoading?: boolean;
  className?: string;
}

/**
 * ChatProps - Props for the Chat container component
 *
 * Main interface for the Chat root component. Orchestrates the entire chat interface.
 * Parent component maintains message history and async operations via callbacks.
 *
 * @property onSendMessage - Async callback for handling message submission (e.g., API calls)
 * @property initialMessages - Optional array to pre-populate with message history
 * @property isLoading - When true, disables input and shows loading indicator
 * @property className - Optional CSS class names for custom styling
 *
 * @example
 * <Chat
 *   onSendMessage={async (msg) => {
 *     const response = await api.sendMessage(msg);
 *     setMessages(prev => [...prev, { role: "assistant", content: response }]);
 *   }}
 *   initialMessages={previousMessages}
 *   isLoading={isFetching}
 * />
 */
export interface ChatProps {
  onSendMessage: (message: string) => Promise<string | void>;
  initialMessages?: Message[];
  className?: string;
}
