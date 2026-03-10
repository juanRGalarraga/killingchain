"use client";

import { Search, SquarePen } from "lucide-react";
import { CHAT_MESSAGES } from "@/constants/messages";

export function ChatSidebar(): React.ReactElement {
  return (
    <aside
      className="w-64 bg-zinc-900 flex flex-col h-screen shrink-0"
      aria-label="Panel lateral de navegación"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3">
        <span className="text-white font-semibold text-sm tracking-tight">
          KillingChain
        </span>
        <button
          className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label={CHAT_MESSAGES.NEW_CHAT}
          title={CHAT_MESSAGES.NEW_CHAT}
        >
          <SquarePen className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="px-3 pb-2">
        <button
          className="w-full flex items-center gap-2 text-zinc-400 hover:text-zinc-100 px-3 py-2 rounded-lg hover:bg-zinc-800 transition-colors text-sm"
          aria-label={CHAT_MESSAGES.SEARCH_CHATS}
        >
          <Search className="w-4 h-4 shrink-0" />
          {CHAT_MESSAGES.SEARCH_CHATS}
        </button>
      </div>

      {/* Chat history */}
      <div className="flex-1 overflow-y-auto px-3">
        <p className="text-zinc-500 text-xs px-2 pt-3 pb-1 font-medium uppercase tracking-wider">
          {CHAT_MESSAGES.YOUR_CHATS}
        </p>
      </div>

      {/* User info */}
      <div className="p-3 border-t border-zinc-800">
        <button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-800 cursor-pointer transition-colors">
          <div className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center text-xs text-white font-semibold shrink-0">
            J
          </div>
          <span className="text-zinc-300 text-sm truncate">Juan Galarraga</span>
        </button>
      </div>
    </aside>
  );
}
