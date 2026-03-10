"use client";

import { Chat } from "@/components/chat";

export default function ChatPage(): React.ReactElement {
  const handleSendMessage = async (message: string): Promise<string> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return `Respondiste: "${message}". Esta es una respuesta simulada del asistente.`;
  };

  return <Chat onSendMessage={handleSendMessage} />;
}
