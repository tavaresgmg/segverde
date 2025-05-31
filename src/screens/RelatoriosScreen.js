import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Download, Share2, FileText, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

const RelatoriosScreen = () => {
  const { analyticsData, simulateLoading } = useApp();

  const handleExport = (tipo) => {
    simulateLoading(1500);
    // Simular download
    console.log(`Exportando relatório: ${tipo}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-800">Relatórios & Analytics</h1>
        <p className="text-gray-500 text-sm">Inteligência de negócio para sua propriedade</p>
      </div>

      <div className="p-4 space-y-6">
        {/* KPIs Principais */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {analyticsData.produtividade.atual}%
                </div>
                <div className="text-gray-600 text-sm">Produtividade</div>
                <div className="text-green-500 text-xs">
                  {analyticsData.produtividade.variacao} vs meta
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {analyticsData.conformidade.inc02018}%
                </div>
                <div className="text-gray-600 text-sm">Conformidade</div>
                <div className="text-blue-500 text-xs">INC 02/2018</div>
              </div>
            </div>
          </div>
        </div>

        {/* Insights da IA */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-4 text-white">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-2xl">🤖</span>
            <h3 className="font-semibold text-lg">Insights da IA</h3>
          </div>
          
          <div className="space-y-2 text-purple-100">
            <p className="text-sm">
              • Produtividade 12% acima da média regional para tomate
            </p>
            <p className="text-sm">
              • Redução de 8% nos custos com otimização de insumos
            </p>
            <p className="text-sm">
              • Janela ideal para plantio: próximas 2 semanas
            </p>
            <p className="text-sm">
              • ROI projetado: +15% para próxima safra
            </p>
          </div>
        </div>

        {/* Preços de Mercado */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Inteligência de Mercado</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🍅</span>
                <div>
                  <div className="font-medium">Tomate CEASA-GO</div>
                  <div className="text-gray-500 text-sm">R$ {analyticsData.precos.tomate.valor}/kg</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold">
                  {analyticsData.precos.tomate.variacao}
                </div>
                <div className="text-gray-400 text-xs">↗ Alta</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🥬</span>
                <div>
                  <div className="font-medium">Alface CEASA-GO</div>
                  <div className="text-gray-500 text-sm">R$ {analyticsData.precos.alface.valor}/kg</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600 font-semibold">
                  {analyticsData.precos.alface.variacao}
                </div>
                <div className="text-gray-400 text-xs">→ Estável</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🥦</span>
                <div>
                  <div className="font-medium">Brócolis CEASA-GO</div>
                  <div className="text-gray-500 text-sm">R$ {analyticsData.precos.brocolis.valor}/kg</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold">
                  {analyticsData.precos.brocolis.variacao}
                </div>
                <div className="text-gray-400 text-xs">↗ Alta</div>
              </div>
            </div>
          </div>
        </div>

        {/* Opções de Export */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Exportar Relatórios</h3>
          
          <div className="space-y-3">
            <button
              onClick={() => handleExport('pdf')}
              className="w-full flex items-center justify-between p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <FileText className="text-red-600" size={20} />
                <div className="text-left">
                  <div className="font-medium text-red-800">Relatório PDF</div>
                  <div className="text-red-600 text-sm">Relatório completo de atividades</div>
                </div>
              </div>
              <Download className="text-red-600" size={18} />
            </button>

            <button
              onClick={() => handleExport('excel')}
              className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <BarChart3 className="text-green-600" size={20} />
                <div className="text-left">
                  <div className="font-medium text-green-800">Planilha Excel</div>
                  <div className="text-green-600 text-sm">Dados para rastreabilidade</div>
                </div>
              </div>
              <Download className="text-green-600" size={18} />
            </button>

            <button
              onClick={() => handleExport('dashboard')}
              className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Share2 className="text-blue-600" size={20} />
                <div className="text-left">
                  <div className="font-medium text-blue-800">Dashboard Web</div>
                  <div className="text-blue-600 text-sm">Compartilhar analytics</div>
                </div>
              </div>
              <Share2 className="text-blue-600" size={18} />
            </button>
          </div>
        </div>

        {/* Status de Conformidade */}
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Status de Conformidade</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <div>
                  <div className="font-medium">INC 02/2018</div>
                  <div className="text-gray-500 text-sm">Rastreabilidade Vegetal</div>
                </div>
              </div>
              <div className="text-green-600 font-semibold">100% Conforme</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <div>
                  <div className="font-medium">Global GAP</div>
                  <div className="text-gray-500 text-sm">Certificação Internacional</div>
                </div>
              </div>
              <div className="text-green-600 font-semibold">Certificado</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium">Orgânico Brasil</div>
                  <div className="text-gray-500 text-sm">Certificação Orgânica</div>
                </div>
              </div>
              <div className="text-yellow-600 font-semibold">Em Processo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosScreen;