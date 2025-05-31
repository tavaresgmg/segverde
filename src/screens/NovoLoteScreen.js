import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowLeft, MapPin, CheckCircle } from 'lucide-react';
import { culturas } from '../data/mockData';

const NovoLoteScreen = () => {
  const { goBack, simulateLoading, navigateTo } = useApp();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    cultura: '',
    variedade: '',
    area: '',
    talhao: '',
    sistemaIrrigacao: '',
    densidadePlantio: '',
    coordenadas: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    simulateLoading(1500);
    setTimeout(() => {
      navigateTo('lotes');
    }, 1500);
  };

  const simulateGPS = () => {
    simulateLoading(1000);
    setTimeout(() => {
      handleInputChange('coordenadas', '-16.6869°S, -49.2648°W');
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={goBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Novo Lote</h1>
            <p className="text-gray-500 text-sm">Etapa {step} de 3</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex space-x-2 mt-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex-1 h-2 rounded-full ${
                num <= step ? 'bg-green-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Step 1: Informações Básicas */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-4">Informações Básicas</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome do Lote *
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Ex: Tomate Santa Clara A1"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cultura *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {culturas.map((cultura) => (
                      <button
                        key={cultura.nome}
                        onClick={() => handleInputChange('cultura', cultura.nome)}
                        className={`p-3 rounded-xl border-2 transition-colors ${
                          formData.cultura === cultura.nome
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{cultura.emoji}</div>
                          <div className="text-sm font-medium">{cultura.nome}</div>
                          <div className="text-xs text-gray-500">{cultura.categoria}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Variedade
                  </label>
                  <input
                    type="text"
                    value={formData.variedade}
                    onChange={(e) => handleInputChange('variedade', e.target.value)}
                    placeholder="Ex: Santa Clara, Crespa, Ramoso"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={nextStep}
              disabled={!formData.nome || !formData.cultura}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300"
            >
              Próxima Etapa
            </button>
          </div>
        )}

        {/* Step 2: Localização e Área */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-4">Localização e Área</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Área (hectares) *
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      placeholder="2.5"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Talhão
                    </label>
                    <input
                      type="text"
                      value={formData.talhao}
                      onChange={(e) => handleInputChange('talhao', e.target.value)}
                      placeholder="A1"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coordenadas GPS
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={formData.coordenadas}
                      onChange={(e) => handleInputChange('coordenadas', e.target.value)}
                      placeholder="Clique em 'Obter Localização'"
                      readOnly
                      className="flex-1 p-3 border border-gray-200 rounded-xl bg-gray-50"
                    />
                    <button
                      onClick={simulateGPS}
                      className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <MapPin size={18} />
                      <span className="hidden sm:inline">GPS</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Localização necessária para conformidade
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sistema de Irrigação
                  </label>
                  <select
                    value={formData.sistemaIrrigacao}
                    onChange={(e) => handleInputChange('sistemaIrrigacao', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selecione o sistema</option>
                    <option value="Gotejamento">Gotejamento</option>
                    <option value="Aspersão">Aspersão</option>
                    <option value="Micro aspersão">Micro aspersão</option>
                    <option value="Sulcos">Sulcos</option>
                    <option value="Não irrigado">Não irrigado</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={nextStep}
                disabled={!formData.area}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-300"
              >
                Próxima Etapa
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Configurações e Recursos */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h2 className="font-semibold text-gray-800 mb-4">Configurações Avançadas</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Densidade de Plantio
                  </label>
                  <input
                    type="text"
                    value={formData.densidadePlantio}
                    onChange={(e) => handleInputChange('densidadePlantio', e.target.value)}
                    placeholder="Ex: 25.000 plantas/ha"
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Recursos Inteligentes */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">Recursos Inteligentes SegVerde</h3>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  <span className="text-blue-700 text-sm">Monitoramento automático via satélite</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  <span className="text-blue-700 text-sm">Alertas inteligentes de pragas e doenças</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  <span className="text-blue-700 text-sm">Integração com blockchain para rastreabilidade</span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-green-600" />
                  <span className="text-blue-700 text-sm">Previsões climáticas personalizadas</span>
                </label>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={prevStep}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Voltar
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle size={18} />
                <span>Criar Lote</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NovoLoteScreen;