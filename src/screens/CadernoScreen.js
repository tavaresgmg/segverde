import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Camera, Plus, Clock, CheckCircle, Upload } from 'lucide-react';
import { produtosInsumos, tiposAtividade, responsaveis } from '../data/mockData';

const CadernoScreen = () => {
  const { 
    allLotes, 
    atividadesData, 
    addAtividade, 
    isOffline, 
    simulateLoading 
  } = useApp();

  const [formData, setFormData] = useState({
    loteId: '',
    tipo: '',
    produto: '',
    dosagem: '',
    responsavel: '',
    observacoes: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.loteId || !formData.tipo || !formData.responsavel) {
      alert('Preencha os campos obrigatórios');
      return;
    }

    addAtividade({
      ...formData,
      foto: hasPhoto
    });

    // Reset form
    setFormData({
      loteId: '',
      tipo: '',
      produto: '',
      dosagem: '',
      responsavel: '',
      observacoes: ''
    });
    setHasPhoto(false);
    setShowForm(false);
  };

  const simulatePhotoUpload = () => {
    simulateLoading(1000);
    setTimeout(() => {
      setHasPhoto(true);
    }, 1000);
  };

  const getStatusIcon = (status) => {
    return status === 'Sincronizado' ? 
      <CheckCircle className="text-green-500" size={16} /> : 
      <Clock className="text-yellow-500" size={16} />;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Caderno de Campo</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Formulário de Registro */}
        {showForm && (
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <h2 className="font-semibold text-gray-800 mb-4">Novo Registro</h2>
            
            <div className="space-y-4">
              {/* Seleção de Lote */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lote *
                </label>
                <select
                  value={formData.loteId}
                  onChange={(e) => handleInputChange('loteId', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecione o lote</option>
                  {allLotes.map((lote) => (
                    <option key={lote.id} value={lote.id}>
                      {lote.emoji} {lote.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tipo de Atividade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Atividade *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {tiposAtividade.map((tipo) => (
                    <button
                      key={tipo.tipo}
                      onClick={() => handleInputChange('tipo', tipo.tipo)}
                      className={`p-3 rounded-xl border-2 transition-colors ${
                        formData.tipo === tipo.tipo
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-xl mb-1">{tipo.icone}</div>
                        <div className="text-xs font-medium">{tipo.label}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Produto/Insumo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Produto/Insumo
                </label>
                <select
                  value={formData.produto}
                  onChange={(e) => handleInputChange('produto', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecione o produto</option>
                  {produtosInsumos.map((produto) => (
                    <option key={produto} value={produto}>
                      {produto}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dosagem */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dosagem
                </label>
                <input
                  type="text"
                  value={formData.dosagem}
                  onChange={(e) => handleInputChange('dosagem', e.target.value)}
                  placeholder="Ex: 2kg/ha, 15mm, etc."
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Responsável */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsável *
                </label>
                <select
                  value={formData.responsavel}
                  onChange={(e) => handleInputChange('responsavel', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecione o responsável</option>
                  {responsaveis.map((resp) => (
                    <option key={resp} value={resp}>
                      {resp}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload de Foto */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Evidência Fotográfica
                </label>
                <button
                  onClick={simulatePhotoUpload}
                  className={`w-full p-4 border-2 border-dashed rounded-xl transition-colors ${
                    hasPhoto 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <div className="text-center">
                    {hasPhoto ? (
                      <>
                        <CheckCircle className="mx-auto text-green-500 mb-2" size={24} />
                        <p className="text-green-700 font-medium">Foto anexada!</p>
                      </>
                    ) : (
                      <>
                        <Camera className="mx-auto text-gray-400 mb-2" size={24} />
                        <p className="text-gray-600">Tocar para adicionar foto</p>
                        <p className="text-gray-400 text-sm">Evidência para conformidade INC 02/2018</p>
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observações
                </label>
                <textarea
                  value={formData.observacoes}
                  onChange={(e) => handleInputChange('observacoes', e.target.value)}
                  placeholder="Observações adicionais..."
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Botão de Envio */}
              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                {isOffline ? (
                  <>
                    <Upload size={18} />
                    <span>📱 Salvar Offline</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} />
                    <span>☁️ Registrar & Sincronizar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Sugestão da IA */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">⚡</span>
            <div className="flex-1">
              <h3 className="font-semibold">Sugestão da IA</h3>
              <p className="text-purple-100 text-sm">
                Melhor horário para aplicação foliar: entre 6h-8h ou 16h-18h
              </p>
            </div>
          </div>
          <button className="mt-3 bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">
            Aplicar Sugestão
          </button>
        </div>

        {/* Registros Recentes */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Registros Recentes</h3>
          
          <div className="space-y-3">
            {atividadesData.slice(0, 5).map((atividade) => {
              const lote = allLotes.find(l => l.id === atividade.loteId);
              return (
                <div key={atividade.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium">{atividade.tipo}</span>
                      {atividade.foto && <Camera size={14} className="text-gray-400" />}
                      {getStatusIcon(atividade.status)}
                    </div>
                    <p className="text-xs text-gray-600">
                      {lote?.emoji} {lote?.nome} • {atividade.produto}
                    </p>
                    <p className="text-xs text-gray-500">
                      {atividade.data} às {atividade.hora} • {atividade.responsavel}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadernoScreen;