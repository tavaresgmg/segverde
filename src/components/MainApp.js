import React from 'react';
import { useApp } from '../contexts/AppContext';

// Importação das telas (serão criadas nas próximas tasks)
import HomeScreen from '../screens/HomeScreen';
import LotesScreen from '../screens/LotesScreen';
import CadernoScreen from '../screens/CadernoScreen';
import RelatoriosScreen from '../screens/RelatoriosScreen';
import NovoLoteScreen from '../screens/NovoLoteScreen';
import DetalheLoteScreen from '../screens/DetalheLoteScreen';
import IAAssistantScreen from '../screens/IAAssistantScreen';

// Componentes base
import EnhancedLoadingOverlay from './EnhancedLoadingOverlay';
import EnhancedBottomNavigation from './EnhancedBottomNavigation';
import TouchEnhancer from './TouchEnhancer';

const MainApp = () => {
  const { currentScreen, isLoading } = useApp();

  // Função para renderizar a tela atual
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'lotes':
        return <LotesScreen />;
      case 'caderno':
        return <CadernoScreen />;
      case 'relatorios':
        return <RelatoriosScreen />;
      case 'novoLote':
        return <NovoLoteScreen />;
      case 'detalheLote':
        return <DetalheLoteScreen />;
      case 'iaAssistant':
        return <IAAssistantScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <TouchEnhancer>
      <div className="min-h-screen bg-gray-50">
        {/* Container Mobile-First */}
        <div className="max-w-sm mx-auto bg-white min-h-screen relative">
        
        {/* Enhanced Status Bar Simulado */}
        <div className="bg-black text-white text-xs px-4 py-1 flex justify-between items-center status-bar-safe">
          <span className="font-semibold">9:41</span>
          <div className="flex items-center space-x-1">
            {/* Signal strength */}
            <div className="flex items-end space-x-px">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1.5 bg-white rounded-full"></div>
              <div className="w-1 h-2 bg-white rounded-full"></div>
              <div className="w-1 h-2.5 bg-white rounded-full"></div>
            </div>
            {/* WiFi */}
            <div className="relative">
              <div className="w-3 h-3 border-2 border-white rounded-full" style={{
                borderColor: 'transparent transparent transparent white',
                transform: 'rotate(45deg)'
              }}></div>
            </div>
            {/* Battery */}
            <div className="w-6 h-3 border border-white rounded-sm flex items-center">
              <div className="w-4 h-1.5 bg-green-400 rounded-sm ml-0.5"></div>
              <div className="w-0.5 h-1.5 bg-white rounded-r-sm ml-px"></div>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="pb-16 min-h-screen">
          {renderCurrentScreen()}
        </div>

        {/* Bottom Navigation - Fixo na parte inferior */}
        <EnhancedBottomNavigation />

        {/* Loading Overlay */}
        {isLoading && <EnhancedLoadingOverlay />}
        </div>
      </div>
    </TouchEnhancer>
  );
};

export default MainApp;