import React, { useState } from 'react';
import { Users, Send, Heart } from 'lucide-react';

export default function Partner() {
  const [messages, setMessages] = useState<Array<{ text: string; sent: boolean }>>([]);
  const [newMessage, setNewMessage] = useState('');
  const [partnerCode, setPartnerCode] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connectPartner = () => {
    if (partnerCode.trim()) {
      setIsConnected(true);
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sent: true }]);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {!isConnected ? (
        <div className="bg-pink-50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-pink-800 flex items-center gap-2 mb-4">
            <Users className="text-pink-600" />
            Connect with Partner
          </h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={partnerCode}
              onChange={(e) => setPartnerCode(e.target.value)}
              placeholder="Enter partner code"
              className="flex-1 px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={connectPartner}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Connect
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-pink-500" />
              <span className="text-pink-800 font-semibold">Connected with Partner</span>
            </div>
            
            <div className="bg-white h-96 rounded-lg p-4 mb-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sent ? 'text-right' : 'text-left'
                  }`}
                >
                  <span
                    className={`inline-block px-4 py-2 rounded-lg ${
                      msg.sent
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}