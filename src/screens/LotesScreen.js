import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Search, Filter } from 'lucide-react';

const LotesScreen = () => {
  const { 
    lotesData, 
    searchTerm, 
    setSearchTerm, 
    filterStatus, 
    setFilterStatus, 
    navigateTo 
  } = useApp();

  const filters = [
    { key: 'todos', label: 'Todos' },
    { key: 'vegetativo', label: 'Vegetativo' },
    { key: 'colheita', label: 'Colheita' },
    { key: 'risco-alto', label: 'Risco Alto' }
  ];

  const getRiscoColor = (risco) => {
    switch (risco) {
      case 'baixo': return 'bg-green-500';
      case 'medio': return 'bg-yellow-500';
      case 'alto': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Vegetativo': return 'bg-blue-100 text-blue-800';
      case 'Pronto Colheita': return 'bg-green-100 text-green-800';
      case 'Colhido': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Gestão de Lotes</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar lotes ou culturas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Filtros */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setFilterStatus(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filterStatus === filter.key
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
          <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center space-x-1">
            <Filter size={14} />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      {/* Lista de Lotes */}
      <div className="p-4 space-y-4">
        {lotesData.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum lote encontrado</p>
            <p className="text-gray-400 text-sm">Tente ajustar os filtros de busca</p>
          </div>
        ) : (
          lotesData.map((lote) => (
            <div
              key={lote.id}
              onClick={() => navigateTo('detalheLote', { loteId: lote.id })}
              className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              {/* Header do Card */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{lote.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{lote.nome}</h3>
                    <p className="text-gray-500 text-sm">{lote.cultura}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getRiscoColor(lote.risco)}`}></div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lote.status)}`}>
                    {lote.status}
                  </span>
                </div>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{lote.dias}</div>
                  <div className="text-xs text-gray-500">Dias</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">{lote.produtividade}%</div>
                  <div className="text-xs text-gray-500">Produtividade</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">{lote.area} ha</div>
                  <div className="text-xs text-gray-500">Área</div>
                </div>
              </div>

              {/* Próxima Atividade */}
              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🕒</span>
                  <span className="text-sm text-gray-600">Próxima: {lote.proximaAtividade}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LotesScreen;