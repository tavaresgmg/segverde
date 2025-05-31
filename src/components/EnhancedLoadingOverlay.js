import React from 'react';

const EnhancedLoadingOverlay = ({ message = 'Processando...' }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center space-y-6 max-w-xs mx-4 shadow-2xl">
        {/* Enhanced spinner with gradient */}
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-transparent border-t-green-600 border-r-green-400 absolute top-0 left-0"></div>
          
          {/* Pulsing center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Enhanced message with animation */}
        <div className="text-center">
          <p className="text-gray-700 font-medium text-lg animate-pulse">{message}</p>
          <p className="text-gray-500 text-sm mt-1">SegVerde está trabalhando...</p>
        </div>
        
        {/* Progress dots animation */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoadingOverlay;