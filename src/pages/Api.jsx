import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaKey, FaServer, FaDatabase, FaShieldAlt } from 'react-icons/fa';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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
                  <pre className="bg-gray-900/50 rounded-lg p-4 text-gray-300 overflow-x-auto">
                    <code>{`// Example using fetch
fetch('${selectedEndpoint.path}', {
  method: '${selectedEndpoint.method}',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    // Request body parameters
  })
})`}</code>
                  </pre>
                </div>
              </motion.div>
            ) : (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <FaCode className="text-4xl text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Select an endpoint to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rate Limiting Section */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8">
          <div className="flex items-center space-x-4 mb-6">
            <FaServer className="text-3xl text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Rate Limiting</h2>
              <p className="text-gray-400">Understand our API rate limits and quotas</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Free Tier</h3>
              <p className="text-gray-400">100 requests per minute</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Pro Tier</h3>
              <p className="text-gray-400">1000 requests per minute</p>
            </div>
            <div className="bg-gray-700/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400">Custom rate limits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api; 