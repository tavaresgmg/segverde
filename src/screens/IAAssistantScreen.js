import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowLeft, Send, Camera, Eye, Sun, Leaf, DollarSign } from 'lucide-react';

const IAAssistantScreen = () => {
  const { goBack, chatData, addChatMessage } = useApp();
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addChatMessage(inputMessage);
      setInputMessage('');
    }
  };

  const handleQuickAction = (action) => {
    const quickMessages = {
      'identificar-praga': 'Preciso identificar uma praga nas minhas plantas. Pode me ajudar?',
      'clima-ideal': 'Qual o clima ideal para aplicação de defensivos hoje?',
      'receita-npk': 'Preciso de uma receita NPK para o meu tomate',
      'precos-mercado': 'Como estão os preços do tomate no CEASA hoje?'
    };
    
    addChatMessage(quickMessages[action]);
  };

  const quickActions = [
    {
      id: 'identificar-praga',
      label: 'Identificar Praga',
      icon: Eye,
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      id: 'clima-ideal',
      label: 'Clima Ideal',
      icon: Sun,
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      id: 'receita-npk',
      label: 'Receitas NPK',
      icon: Leaf,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'precos-mercado',
      label: 'Preços Mercado',
      icon: DollarSign,
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={goBack}
            className="p-2 hover:bg-purple-500 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">IA Assistant</h1>
              <p className="text-purple-100 text-sm">Assistente inteligente SegVerde</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {chatData.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.tipo === 'usuario' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.tipo === 'usuario'
                ? 'bg-green-600 text-white'
                : 'bg-white border border-gray-200 text-gray-800'
            }`}>
              {message.tipo === 'ia' && (
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">⚡</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">IA SegVerde</span>
                </div>
              )}
              
              <p className="text-sm">{message.conteudo}</p>
              
              <div className={`text-xs mt-1 ${
                message.tipo === 'usuario' ? 'text-green-100' : 'text-gray-500'
              }`}>
                {message.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-white border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Ações Rápidas</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => handleQuickAction(action.id)}
                className={`${action.color} text-white rounded-lg p-3 flex items-center space-x-2 transition-colors`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* Input Area */}
        <div className="flex space-x-2">
          <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Camera size={18} className="text-gray-600" />
          </button>
          
          <div className="flex-1 flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua pergunta..."
              className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-300"
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-3">
          IA treinada com dados agronômicos de Goiás • Sempre confirme informações técnicas
        </p>
      </div>
    </div>
  );
};

export default IAAssistantScreen;