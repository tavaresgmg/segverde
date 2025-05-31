import React from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowLeft, QrCode, Camera, Share2, MapPin, Calendar, TrendingUp, Droplets, Shield, CheckCircle } from 'lucide-react';
import { timeline, blockchain } from '../data/mockData';

const DetalheLoteScreen = () => {
  const { selectedLote, goBack, simulateLoading } = useApp();

  if (!selectedLote) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Lote não encontrado</p>
      </div>
    );
  }

  const handleAction = (action) => {
    simulateLoading(1000);
    console.log(`Ação: ${action}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Vegetativo': return 'bg-blue-100 text-blue-800';
      case 'Pronto Colheita': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimelineIcon = (tipo) => {
    switch (tipo) {
      case 'aplicacao': return '🧪';
      case 'irrigacao': return '💧';
      case 'monitoramento': return '👁️';
      case 'plantio': return '🌱';
      default: return '📋';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={goBack}
              className="p-2 hover:bg-green-500 rounded-full transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-xl font-bold">Detalhes do Lote</h1>
              <p className="text-green-100 text-sm">ID: LOT_{selectedLote.id.toString().padStart(3, '0')} • Talhão {selectedLote.talhao}</p>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">{selectedLote.emoji}</div>
            <h2 className="text-2xl font-bold mb-1">{selectedLote.nome}</h2>
            <p className="text-green-100">{selectedLote.cultura} • {selectedLote.variedade}</p>
          </div>

          {/* Métricas Principais */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{selectedLote.dias}</div>
              <div className="text-green-100 text-sm">Dias plantio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{selectedLote.produtividade}%</div>
              <div className="text-green-100 text-sm">Produtividade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{selectedLote.area}</div>
              <div className="text-green-100 text-sm">Hectares</div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="text-center">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(selectedLote.status)}`}>
              {selectedLote.status}
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleAction('qrcode')}
            className="bg-green-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-green-600 transition-colors"
          >
            <QrCode size={24} />
            <span className="text-sm font-medium">QR Code</span>
          </button>
          
          <button
            onClick={() => handleAction('foto')}
            className="bg-blue-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-blue-600 transition-colors"
          >
            <Camera size={24} />
            <span className="text-sm font-medium">Foto</span>
          </button>
          
          <button
            onClick={() => handleAction('compartilhar')}
            className="bg-purple-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-purple-600 transition-colors"
          >
            <Share2 size={24} />
            <span className="text-sm font-medium">Compartilhar</span>
          </button>
        </div>

        {/* Informações Detalhadas */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-orange-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Crescimento</div>
                <div className="text-gray-500 text-sm">12cm/semana</div>
              </div>
            </div>
            <div className="text-green-600 text-sm">+8% vs média</div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Droplets className="text-blue-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Irrigação</div>
                <div className="text-gray-500 text-sm">380L/m²</div>
              </div>
            </div>
            <div className="text-blue-600 text-sm">Eficiente</div>
          </div>
        </div>

        {/* Blockchain/Rastreabilidade */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-3 mb-3">
            <Shield size={24} />
            <div>
              <h3 className="font-semibold">Blockchain SegVerde</h3>
              <p className="text-indigo-100 text-sm">Rastreabilidade garantida</p>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-3">
            <div className="text-xs text-indigo-100 mb-1">Hash do Bloco</div>
            <div className="font-mono text-sm break-all">{blockchain.hash}</div>
          </div>
          
          <div className="flex justify-between text-sm text-indigo-100">
            <span>Transações: {blockchain.transacoes}</span>
            <span>Status: {blockchain.statusVerificacao}</span>
          </div>
          
          <button
            onClick={() => handleAction('verificar-blockchain')}
            className="mt-3 w-full bg-white bg-opacity-20 py-2 rounded-lg text-sm font-medium"
          >
            Verificar na Blockchain
          </button>
        </div>

        {/* Informações Técnicas */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Informações Técnicas</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Coordenadas</span>
              <span className="text-gray-800 font-medium">{selectedLote.coordenadas}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Sistema Irrigação</span>
              <span className="text-gray-800 font-medium">{selectedLote.sistemaIrrigacao}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Densidade</span>
              <span className="text-gray-800 font-medium">{selectedLote.densidadePlantio}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Preço Médio</span>
              <span className="text-gray-800 font-medium">R$ {selectedLote.precoMedio}/kg</span>
            </div>
          </div>
        </div>

        {/* Timeline de Atividades */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Timeline de Atividades</h3>
          
          <div className="space-y-4">
            {timeline.filter(item => item.loteId === selectedLote.id).map((item, index) => (
              <div key={item.id} className="flex items-start space-x-3">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">{getTimelineIcon(item.tipo)}</span>
                  </div>
                  {index < timeline.filter(t => t.loteId === selectedLote.id).length - 1 && (
                    <div className="w-px h-6 bg-gray-200 mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-800">{item.titulo}</h4>
                    <CheckCircle className="text-green-500" size={16} />
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{item.descricao}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{item.data}</span>
                    </span>
                    <span>{item.responsavel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalheLoteScreen;