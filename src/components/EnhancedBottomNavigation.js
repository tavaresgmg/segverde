import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Home, MapPin, BookOpen, BarChart3 } from 'lucide-react';

const EnhancedBottomNavigation = () => {
  const { currentScreen, navigateTo } = useApp();

  const navItems = [
    {
      id: 'home',
      label: 'Início',
      icon: Home,
      screen: 'home'
    },
    {
      id: 'lotes',
      label: 'Lotes',
      icon: MapPin,
      screen: 'lotes'
    },
    {
      id: 'caderno',
      label: 'Caderno',
      icon: BookOpen,
      screen: 'caderno'
    },
    {
      id: 'relatorios',
      label: 'Relatórios',
      icon: BarChart3,
      screen: 'relatorios'
    }
  ];

  const handleNavigation = (screen) => {
    // Haptic feedback simulation for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    navigateTo(screen);
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 px-4 py-2 bottom-safe">
      {/* Enhanced visual separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.screen;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.screen)}
              className={`relative flex flex-col items-center space-y-1 py-2 px-3 rounded-xl transition-all duration-300 transform ${
                isActive 
                  ? 'text-green-600 bg-green-50 scale-105 shadow-lg' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-gray-50 active:scale-95'
              }`}
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              {/* Active indicator dot */}
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 bg-green-600 rounded-full animate-pulse"></div>
              )}
              
              <Icon 
                size={20} 
                className={`transition-all duration-300 ${
                  isActive ? 'scale-110 drop-shadow-sm' : ''
                }`} 
              />
              <span className={`text-xs font-medium transition-all duration-300 ${
                isActive ? 'text-green-600 font-semibold' : 'text-gray-600'
              }`}>
                {item.label}
              </span>
              
              {/* Ripple effect background */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                isActive ? 'bg-green-100' : 'bg-transparent'
              }`} style={{ zIndex: -1 }}></div>
            </button>
          );
        })}
      </div>
      
      {/* iPhone-style home indicator */}
      <div className="flex justify-center pt-2">
        <div className="w-36 h-1 bg-gray-300 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default EnhancedBottomNavigation;