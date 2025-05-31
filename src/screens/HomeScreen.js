import React from 'react';
import { useApp } from '../contexts/AppContext';

const HomeScreen = () => {
  const { stats, weatherData, alertasData, navigateTo } = useApp();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">SegVerde</h1>
            <p className="text-green-100 text-sm">Fazenda Digital Goiás</p>
          </div>
          <div className="relative">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">🔔</span>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">{stats.alertasAtivos}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Weather Widget */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{weatherData.icone}</span>
                <div>
                  <p className="text-2xl font-bold">{weatherData.temperatura}°C</p>
                  <p className="text-blue-100 text-sm capitalize">{weatherData.condicao}</p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm">Umidade: {weatherData.umidade}%</p>
              <p className="text-blue-100 text-sm">Vento: {weatherData.vento} km/h</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <div className="text-green-600 text-xl font-bold">{stats.lotesAtivos}</div>
            <div className="text-gray-600 text-xs">Lotes Ativos</div>
            <div className="text-green-500 text-xs">+2 este mês</div>
          </div>
          
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <div className="text-blue-600 text-xl font-bold">{stats.produtividadeMedia}%</div>
            <div className="text-gray-600 text-xs">Produtividade</div>
            <div className="text-green-500 text-xs">+5% vs média</div>
          </div>
          
          <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
            <div className="text-purple-600 text-xl font-bold">{stats.conformidade}%</div>
            <div className="text-gray-600 text-xs">Conformidade</div>
            <div className="text-green-500 text-xs">INC 02/2018</div>
          </div>
        </div>

        {/* Ações Inteligentes */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => navigateTo('novoLote')}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 flex items-center space-x-3 transform hover:scale-105 transition-transform"
          >
            <span className="text-2xl">➕</span>
            <div className="text-left">
              <div className="font-semibold">Novo Lote</div>
              <div className="text-green-100 text-sm">Cadastrar cultura</div>
            </div>
          </button>
          
          <button 
            onClick={() => navigateTo('iaAssistant')}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4 flex items-center space-x-3 transform hover:scale-105 transition-transform"
          >
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <div className="font-semibold">IA Assistant</div>
              <div className="text-purple-100 text-sm">Análise inteligente</div>
            </div>
          </button>
        </div>

        {/* Alerta Inteligente */}
        {alertasData.length > 0 && (
          <div className="bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚠️</span>
              <div className="flex-1">
                <h3 className="font-semibold">{alertasData[0].titulo}</h3>
                <p className="text-orange-100 text-sm">{alertasData[0].descricao}</p>
              </div>
            </div>
            <button className="mt-3 bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">
              Ver Recomendações
            </button>
          </div>
        )}

        {/* Atividade Recente */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3">Atividade Recente</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Aplicação NPK realizada</p>
                <p className="text-xs text-gray-500">Tomate Santa Clara A1 • Há 2 horas</p>
              </div>
              <span className="text-gray-400">›</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Colheita programada</p>
                <p className="text-xs text-gray-500">Alface Crespa Norte • Ontem</p>
              </div>
              <span className="text-gray-400">›</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Certificação renovada</p>
                <p className="text-xs text-gray-500">Global GAP • Há 3 dias</p>
              </div>
              <span className="text-gray-400">›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;