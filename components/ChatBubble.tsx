
import React from 'react';
import type { Message } from '../types';

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isMe = message.sender === 'me';

  return (
    <div className={`flex w-full mb-3 ${isMe ? 'justify-end' : 'justify-start items-start'}`}>
      {!isMe && (
        <div className="w-8 h-8 bg-[#3390ec] rounded-full mr-3 flex-shrink-0" />
      )}
      <div className={`relative max-w-xs md:max-w-md px-3 py-2 rounded-xl shadow-sm ${isMe ? 'bg-[#3390ec] text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
        {!isMe && message.senderName && (
          <div className={`text-sm font-bold mb-1 ${message.senderColor || 'text-[#3390ec]'}`}>
            {message.senderName}
          </div>
        )}
        <div className={`text-sm break-words ${isMe ? 'text-white' : 'text-gray-800'}`}>
          {message.text}
        </div>
        <div className={`text-right text-xs mt-1 flex items-center justify-end ${isMe ? 'text-white opacity-75' : 'text-gray-500'}`}>
          <span className="mr-1">{message.timestamp}</span>
          {isMe && <ReadReceipts />}
        </div>
      </div>
    </div>
  );
};

const ReadReceipts = () => (
    <svg viewBox="0 0 18 18" height="18" width="18" className="inline-block ml-1 -mb-0.5">
        <path fill="#ffffff" d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.37.37 0 0 1-.52.063l-2.794-2.474a.434.434 0 0 0-.67.482l3.332 2.95a.37.37 0 0 0 .52-.063l7.018-8.998a.433.433 0 0 0 .075-.594zm-4.435 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.37.37 0 0 1-.52.063l-2.794-2.474a.434.434 0 0 0-.67.482l3.332 2.95a.37.37 0 0 0 .52-.063l7.018-8.998a.433.433 0 0 0 .075-.594z"></path>
    </svg>
);


export default ChatBubble;
