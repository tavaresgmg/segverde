import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Home, MapPin, BookOpen, BarChart3 } from 'lucide-react';

const BottomNavigation = () => {
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
    navigateTo(screen);
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.screen;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.screen)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-green-600 bg-green-50 scale-105' 
                  : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
              }`}
            >
              <Icon 
                size={20} 
                className={`transition-transform duration-200 ${
                  isActive ? 'scale-110' : ''
                }`} 
              />
              <span className={`text-xs font-medium ${
                isActive ? 'text-green-600' : 'text-gray-600'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;