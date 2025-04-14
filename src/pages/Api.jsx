import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaKey, FaServer, FaDatabase, FaShieldAlt, FaJs, FaPython, FaJava } from 'react-icons/fa';
import { SiC } from 'react-icons/si';

const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));
const atomOneDark = lazy(() => import('react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const endpoints = [
  {
    category: "Authentication",
    endpoints: [
      {
        method: "POST",
        path: "/api/auth/register",
        description: "Register a new user",
        parameters: [
          { name: "email", type: "string", required: true },
          { name: "password", type: "string", required: true },
          { name: "username", type: "string", required: true }
        ]
      },
      {
        method: "POST",
        path: "/api/auth/login",
        description: "Login user",
        parameters: [
          { name: "email", type: "string", required: true },
          { name: "password", type: "string", required: true }
        ]
      }
    ]
  },
  {
    category: "User Management",
    endpoints: [
      {
        method: "GET",
        path: "/api/users/me",
        description: "Get current user profile",
        auth: true
      },
      {
        method: "PUT",
        path: "/api/users/me",
        description: "Update user profile",
        auth: true,
        parameters: [
          { name: "username", type: "string", required: false },
          { name: "bio", type: "string", required: false },
          { name: "avatar", type: "file", required: false }
        ]
      }
    ]
  },
  {
    category: "Content",
    endpoints: [
      {
        method: "GET",
        path: "/api/posts",
        description: "Get posts feed",
        parameters: [
          { name: "page", type: "number", required: false },
          { name: "limit", type: "number", required: false }
        ]
      },
      {
        method: "POST",
        path: "/api/posts",
        description: "Create new post",
        auth: true,
        parameters: [
          { name: "content", type: "string", required: true },
          { name: "media", type: "file[]", required: false }
        ]
      }
    ]
  }
];

const Api = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('js');

  const renderExampleCode = (endpoint) => {
    switch (selectedLanguage) {
      case 'python':
        return `# Example in Python\nimport requests\n\nresponse = requests.${endpoint.method.toLowerCase()}('https://example.com${endpoint.path}', json={})`;
      case 'java':
        return `// Example in Java\nimport java.net.HttpURLConnection;\nimport java.net.URL;\n\nURL url = new URL("https://example.com${endpoint.path}");\nHttpURLConnection con = (HttpURLConnection) url.openConnection();\ncon.setRequestMethod("${endpoint.method}");`;
      case 'c':
        return `// Example in C\n#include <stdio.h>\n#include <curl/curl.h>\n\nCURL *curl = curl_easy_init();\nif(curl) {\n  curl_easy_setopt(curl, CURLOPT_URL, "https://example.com${endpoint.path}");\n  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "${endpoint.method}");\n}`;
      default:
        return `// Example in JavaScript\nfetch('${endpoint.path}', {\n  method: '${endpoint.method}',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({})\n})`;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative py-24">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
              API Documentation
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Integrate We Met into your applications using our powerful API. Access user data, content, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Authentication Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <FaKey className="text-3xl text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Authentication</h2>
              <p className="text-gray-400">Learn how to authenticate your API requests</p>
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6">
            <pre className="text-gray-300 overflow-x-auto">
              <code>{`// Example API Key Header
Authorization: Bearer YOUR_API_KEY

// Example JWT Token
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}</code>
            </pre>
          </div>
        </div>

        {/* Endpoints Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Endpoints List */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6">
              <h2 className="text-xl font-bold text-white mb-4">Available Endpoints</h2>
              <div className="space-y-4">
                {endpoints.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">{category.category}</h3>
                    <div className="space-y-2">
                      {category.endpoints.map((endpoint) => (
                        <button
                          key={endpoint.path}
                          onClick={() => setSelectedEndpoint(endpoint)}
                          className={`w-full text-left p-3 rounded-lg transition-colors duration-300 ${
                            selectedEndpoint?.path === endpoint.path
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'hover:bg-gray-700/50 text-gray-300'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-sm ${
                              endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                              endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                              endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {endpoint.method}
                            </span>
                            <span className="truncate">{endpoint.path}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Endpoint Details */}
          <div className="lg:col-span-2">
            {selectedEndpoint ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedEndpoint.path}</h2>
                    <p className="text-gray-400 mt-1">{selectedEndpoint.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    selectedEndpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                    selectedEndpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                    selectedEndpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {selectedEndpoint.method}
                  </span>
                </div>

                {selectedEndpoint.auth && (
                  <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <FaShieldAlt />
                      <span>Authentication Required</span>
                    </div>
                  </div>
                )}

                {selectedEndpoint.parameters && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Parameters</h3>
                    <div className="space-y-2">
                      {selectedEndpoint.parameters.map((param) => (
                        <div key={param.name} className="flex items-start space-x-4 p-3 bg-gray-700/30 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-white">{param.name}</span>
                              <span className="text-sm text-gray-400">({param.type})</span>
                              {param.required && (
                                <span className="text-sm text-red-400">required</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Example Request</h3>
                  <div className="flex mb-6">
                    <button 
                      className="p-2 hover:bg-blue-600 bg-blue-500 rounded-lg text-white flex items-center gap-2"
                      onClick={() => setSelectedLanguage('js')}
                    >
                      <FaJs /> JavaScript
                    </button>
                    <button 
                      className="p-2 hover:bg-green-600 bg-green-500 rounded-lg text-white ml-2 flex items-center gap-2"
                      onClick={() => setSelectedLanguage('python')}
                    >
                      <FaPython /> Python
                    </button>
                    <button 
                      className="p-2 hover:bg-orange-600 bg-orange-500 rounded-lg text-white ml-2 flex items-center gap-2"
                      onClick={() => setSelectedLanguage('java')}
                    >
                      <FaJava /> Java
                    </button>
                    <button 
                      className="p-2 hover:bg-red-600 bg-red-500 rounded-lg text-white ml-2 flex items-center gap-2"
                      onClick={() => setSelectedLanguage('c')}
                    >
                      <SiC /> C
                    </button>
                  </div>
                  <Suspense fallback={<LoadingSpinner />}>
                    <SyntaxHighlighter 
                      language={selectedLanguage} 
                      style={atomOneDark}
                      className="rounded-lg overflow-hidden" 
                      customStyle={{
                        backgroundColor: '#000',
                        padding: '1.5rem',
                        fontSize: '0.95rem',
                        lineHeight: '1.5',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {renderExampleCode(selectedEndpoint)}
                    </SyntaxHighlighter>
                  </Suspense>
                </div>
              </motion.div>
            ) : (
              <div className="bg-black backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <FaCode className="text-4xl text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Select an endpoint to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
