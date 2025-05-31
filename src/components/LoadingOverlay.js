import React from 'react';

const LoadingOverlay = ({ message = 'Processando...' }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center space-y-4 max-w-xs mx-4">
        {/* Spinner Animado */}
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-green-600"></div>
        
        {/* Texto */}
        <p className="text-gray-700 text-center font-medium">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;