import React, { createContext, useContext, useState } from 'react';
import { lotes, atividades, weather, alertas, notificacoes, analytics, chatMensagens } from '../data/mockData';

// Criação do Context
const AppContext = createContext();

// Hook personalizado para usar o Context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
};

// Provider Component
export const AppProvider = ({ children }) => {
  // Estados principais da aplicação
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedLote, setSelectedLote] = useState(null);
  const [isOffline, setIsOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');

  // Dados simulados (em uma app real, viriam de APIs)
  const [lotesData] = useState(lotes);
  const [atividadesData, setAtividadesData] = useState(atividades);
  const [weatherData] = useState(weather);
  const [alertasData] = useState(alertas);
  const [notificacoesData] = useState(notificacoes);
  const [analyticsData] = useState(analytics);
  const [chatData, setChatData] = useState(chatMensagens);

  // Funções de navegação
  const navigateTo = (screen, params = null) => {
    if (screen === 'detalheLote' && params?.loteId) {
      const lote = lotesData.find(l => l.id === params.loteId);
      setSelectedLote(lote);
    }
    setCurrentScreen(screen);
  };

  const goBack = () => {
    // Lógica simples de navegação - em uma app real usaria React Router
    if (currentScreen === 'detalheLote' || currentScreen === 'novoLote' || currentScreen === 'iaAssistant') {
      setCurrentScreen('home');
    } else {
      setCurrentScreen('home');
    }
  };

  // Função para simular loading
  const simulateLoading = (duration = 800) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  };

  // Função para adicionar nova atividade (simulada)
  const addAtividade = (novaAtividade) => {
    const atividade = {
      ...novaAtividade,
      id: atividadesData.length + 1,
      data: new Date().toISOString().split('T')[0],
      hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: isOffline ? 'Pendente' : 'Sincronizado'
    };
    
    setAtividadesData(prev => [atividade, ...prev]);
    simulateLoading();
  };

  // Função para adicionar mensagem ao chat
  const addChatMessage = (mensagem, tipo = 'usuario') => {
    const novaMensagem = {
      id: chatData.length + 1,
      tipo,
      conteudo: mensagem,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatData(prev => [...prev, novaMensagem]);
    
    // Simular resposta da IA após delay
    if (tipo === 'usuario') {
      setTimeout(() => {
        const respostaIA = generateIAResponse(mensagem);
        const mensagemIA = {
          id: chatData.length + 2,
          tipo: 'ia',
          conteudo: respostaIA,
          timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
        setChatData(prev => [...prev, mensagemIA]);
      }, 1500);
    }
  };

  // Função para gerar resposta da IA (simulada)
  const generateIAResponse = (pergunta) => {
    const respostas = [
      'Com base nos dados do seu lote, recomendo monitoramento mais frequente.',
      'As condições climáticas estão favoráveis para essa aplicação.',
      'Sugiro aguardar 48h após a chuva para realizar essa atividade.',
      'Pelos indicadores, o lote está em excelente estado de desenvolvimento.',
      'Recomendo análise foliar para confirmar deficiências nutricionais.'
    ];
    return respostas[Math.floor(Math.random() * respostas.length)];
  };

  // Filtrar lotes baseado na busca e filtro
  const filteredLotes = lotesData.filter(lote => {
    const matchesSearch = lote.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lote.cultura.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'todos' || 
                         lote.status.toLowerCase() === filterStatus.toLowerCase() ||
                         (filterStatus === 'risco-alto' && lote.risco === 'alto') ||
                         (filterStatus === 'colheita' && lote.status === 'Pronto Colheita');
    
    return matchesSearch && matchesFilter;
  });

  // Função para toggle modo offline (simulação)
  const toggleOfflineMode = () => {
    setIsOffline(prev => !prev);
    simulateLoading(500);
  };

  // Estatísticas calculadas
  const stats = {
    lotesAtivos: lotesData.length,
    produtividadeMedia: Math.round(lotesData.reduce((acc, lote) => acc + lote.produtividade, 0) / lotesData.length),
    conformidade: 100, // Simulado como 100% conforme
    atividadesPendentes: atividadesData.filter(a => a.status === 'Pendente').length,
    proximasColheitas: lotesData.filter(l => l.status === 'Pronto Colheita').length,
    alertasAtivos: alertasData.filter(a => a.status === 'ativo').length
  };

  // Context value
  const value = {
    // Estados
    currentScreen,
    selectedLote,
    isOffline,
    isLoading,
    searchTerm,
    filterStatus,
    
    // Dados
    lotesData: filteredLotes,
    allLotes: lotesData,
    atividadesData,
    weatherData,
    alertasData,
    notificacoesData,
    analyticsData,
    chatData,
    stats,
    
    // Funções de navegação
    navigateTo,
    goBack,
    
    // Funções de estado
    setSearchTerm,
    setFilterStatus,
    toggleOfflineMode,
    simulateLoading,
    
    // Funções de dados
    addAtividade,
    addChatMessage,
    
    // Utilitários
    setSelectedLote
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;