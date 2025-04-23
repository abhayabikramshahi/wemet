import { useState } from 'react';
import { FaPaperPlane, FaCog, FaEnvelope, FaUserCircle, FaArrowLeft } from 'react-icons/fa';
import Logo from '../upload/logo.png';

const MessagePage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  // Mock conversation data
  const conversations = [
    { id: 1, user: 'Priya Sharma', lastMessage: 'Hey, loved the Diwali post!', time: '2h ago', avatar: null },
    { id: 2, user: 'Amit Patel', lastMessage: 'Can we discuss the event?', time: '5h ago', avatar: null },
    { id: 3, user: 'Neha Gupta', lastMessage: 'Check out this temple photo!', time: '1d ago', avatar: null },
  ];

  // Mock messages for the selected conversation
  const messages = [
    { id: 1, sender: 'Priya Sharma', text: 'Hey, loved the Diwali post!', time: '2:03 PM' },
    { id: 2, sender: 'You', text: 'Thanks! Glad you liked it.', time: '2:05 PM' },
    { id: 3, sender: 'Priya Sharma', text: 'Planning anything for Holi?', time: '2:07 PM' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      console.log('Sending:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black mt-8 ml-4 lg:ml-8 flex flex-col lg:flex-row">
      {/* Sidebar: Conversation List (Visible by Default on Mobile) */}
      <div
        className={`w-full lg:w-80 bg-transparent rounded-xl transition-all duration-300 ${
          selectedConversation ? 'hidden lg:block' : 'block'
        }`}
      >
        <div className="p-3 lg:p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-black">Messages</h2>
          <div className="flex space-x-3">
            <button className="text-gray-500 hover:text-black transition-colors duration-200" title="New Message">
              <FaEnvelope size={16} />
            </button>
            <button className="text-gray-500 hover:text-black transition-colors duration-200" title="Settings">
              <FaCog size={16} />
            </button>
          </div>
        </div>
        <div className="h-[calc(100vh-120px)] overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${
                selectedConversation === conv.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => setSelectedConversation(conv.id)}
            >
              <div className="flex items-center space-x-2">
                <div className="text-gray-500">
                  {conv.avatar ? (
                    <img src={conv.avatar} alt={conv.user} className="w-8 h-8 rounded-full" />
                  ) : (
                    <FaUserCircle size={32} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium text-black">{conv.user}</h3>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">{conv.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area (Visible on Mobile After Clicking a Chat) */}
      <div
        className={`flex-1 bg-transparent rounded-xl lg:ml-4 mt-4 lg:mt-0 ${
          selectedConversation ? 'block' : 'hidden lg:block'
        }`}
      >
        {selectedConversation ? (
          <>
            <div className="p-3 lg:p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  className="lg:hidden text-gray-500 hover:text-black transition-colors duration-200"
                  onClick={() => setSelectedConversation(null)}
                  >
                    <FaArrowLeft size={16} />
                  </button>
                    <h2 className="text-base lg:text-lg font-semibold text-black">
                      {conversations.find((c) => c.id === selectedConversation)?.user}
                    </h2>
                  </div>
                </div>
                <div className="p-4 lg:p-6 h-[calc(100vh-180px)] lg:h-[calc(100vh-200px)] overflow-y-auto flex flex-col space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-2.5 rounded-2xl text-sm ${
                          msg.sender === 'You' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'
                        } transition-all duration-200`}
                      >
                        <p>{msg.text}</p>
                        <span className="text-xs opacity-60 block mt-0.5">{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 lg:p-4 border-t border-gray-200">
                  <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 p-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                      disabled={!messageInput.trim()}
                    >
                      <FaPaperPlane size={14} />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <img src={Logo} alt="Logo" className="w-16 h-16 lg:w-24 lg:h-24 mb-4" />
                <p className="text-gray-500 text-sm lg:text-lg">Select a conversation to start chatting</p>
              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default MessagePage;