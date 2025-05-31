// SegVerde - Dados Mockados para Demonstração
// Aplicativo de Rastreabilidade Vegetal para Produtores Rurais de Goiás

export const lotes = [
  {
    id: 1,
    nome: 'Tomate Santa Clara A1',
    cultura: 'Tomate Mesa',
    emoji: '🍅',
    plantio: '15/03/2025',
    status: 'Vegetativo',
    area: 2.5,
    produtividade: 85,
    risco: 'baixo',
    proximaAtividade: 'Aplicação foliar - NPK',
    dias: 76,
    coordenadas: '-16.6869°S, -49.2648°W',
    talhao: 'A1',
    variedade: 'Santa Clara',
    densidadePlantio: '25.000 plantas/ha',
    sistemaIrrigacao: 'Gotejamento',
    precoMedio: 6.20,
    tendenciaPreco: 'alta'
  },
  {
    id: 2,
    nome: 'Alface Crespa Norte',
    cultura: 'Alface',
    emoji: '🥬',
    plantio: '01/04/2025',
    status: 'Pronto Colheita',
    area: 1.8,
    produtividade: 92,
    risco: 'baixo',
    proximaAtividade: 'Colheita programada',
    dias: 45,
    coordenadas: '-16.6825°S, -49.2590°W',
    talhao: 'B2',
    variedade: 'Crespa',
    densidadePlantio: '120.000 plantas/ha',
    sistemaIrrigacao: 'Aspersão',
    precoMedio: 2.80,
    tendenciaPreco: 'estavel'
  },
  {
    id: 3,
    nome: 'Brócolis Ramoso Sul',
    cultura: 'Brócolis',
    emoji: '🥦',
    plantio: '20/04/2025',
    status: 'Vegetativo',
    area: 3.2,
    produtividade: 78,
    risco: 'medio',
    proximaAtividade: 'Aplicação defensivo',
    dias: 35,
    coordenadas: '-16.6901°S, -49.2702°W',
    talhao: 'C1',
    variedade: 'Ramoso',
    densidadePlantio: '40.000 plantas/ha',
    sistemaIrrigacao: 'Gotejamento',
    precoMedio: 4.50,
    tendenciaPreco: 'alta'
  }
];

export const atividades = [
  {
    id: 1,
    loteId: 1,
    tipo: 'Aplicação',
    produto: 'NPK 20-20-20',
    dosagem: '2kg/ha',
    responsavel: 'João Silva',
    data: '2025-05-30',
    hora: '14:30',
    status: 'Sincronizado',
    foto: true,
    observacoes: 'Aplicação realizada em condições ideais, sem vento.',
    coordenadas: '-16.6869°S, -49.2648°W',
    temperatura: '26°C',
    umidade: '65%'
  },
  {
    id: 2,
    loteId: 2,
    tipo: 'Irrigação',
    produto: 'Água + Fertilizante',
    dosagem: '15mm',
    responsavel: 'Maria Santos',
    data: '2025-05-29',
    hora: '06:00',
    status: 'Pendente',
    foto: false,
    observacoes: 'Irrigação matinal para melhor aproveitamento.',
    coordenadas: '-16.6825°S, -49.2590°W',
    temperatura: '22°C',
    umidade: '72%'
  },
  {
    id: 3,
    loteId: 1,
    tipo: 'Monitoramento',
    produto: 'Inspeção Visual',
    dosagem: 'N/A',
    responsavel: 'Carlos Lima',
    data: '2025-05-28',
    hora: '08:15',
    status: 'Sincronizado',
    foto: true,
    observacoes: 'Plantas saudáveis, crescimento adequado.',
    coordenadas: '-16.6869°S, -49.2648°W',
    temperatura: '24°C',
    umidade: '68%'
  }
];

export const weather = {
  temperatura: 28,
  umidade: 65,
  vento: 12,
  condicao: 'ensolarado',
  icone: '☀️',
  previsao7dias: [
    { dia: 'Hoje', temp: 28, condicao: 'ensolarado', chuva: 0 },
    { dia: 'Amanhã', temp: 30, condicao: 'parcialmente nublado', chuva: 15 },
    { dia: 'Sex', temp: 26, condicao: 'chuvoso', chuva: 80 },
    { dia: 'Sáb', temp: 24, condicao: 'nublado', chuva: 40 },
    { dia: 'Dom', temp: 27, condicao: 'ensolarado', chuva: 5 },
    { dia: 'Seg', temp: 29, condicao: 'ensolarado', chuva: 0 },
    { dia: 'Ter', temp: 31, condicao: 'muito quente', chuva: 0 }
  ]
};

export const alertas = [
  {
    id: 1,
    tipo: 'risco',
    severidade: 'medio',
    titulo: 'Risco de Lagarta na Área Norte',
    descricao: 'Condições climáticas favorecem aparição de lagartas. Monitoramento recomendado.',
    loteAfetado: 'Alface Crespa Norte',
    dataAlerta: '2025-05-31',
    acao: 'Aplicar Bt (Bacillus thuringiensis)',
    status: 'ativo'
  },
  {
    id: 2,
    tipo: 'clima',
    severidade: 'baixo',
    titulo: 'Chuva Prevista para Sexta',
    descricao: 'Precipitação de 15-20mm prevista. Ideal para crescimento.',
    loteAfetado: 'Todos',
    dataAlerta: '2025-05-31',
    acao: 'Suspender irrigação',
    status: 'ativo'
  }
];

export const notificacoes = [
  {
    id: 1,
    titulo: 'Colheita do Lote B2 Amanhã',
    descricao: 'Alface Crespa Norte está pronta para colheita',
    tipo: 'colheita',
    urgencia: 'alta',
    tempo: 'há 2 horas'
  },
  {
    id: 2,
    titulo: 'Aplicação NPK Realizada',
    descricao: 'Tomate Santa Clara A1 - Aplicação concluída',
    tipo: 'aplicacao',
    urgencia: 'baixa',
    tempo: 'ontem'
  },
  {
    id: 3,
    titulo: 'Certificação Global GAP',
    descricao: 'Renovação de certificado aprovada',
    tipo: 'certificacao',
    urgencia: 'media',
    tempo: 'há 3 dias'
  }
];

export const analytics = {
  produtividade: {
    atual: 87,
    meta: 85,
    variacao: '+5%'
  },
  conformidade: {
    inc02018: 100,
    globalGap: 95,
    organico: 80
  },
  custos: {
    hectare: 4850,
    variacao: '-8%',
    breakdown: {
      sementes: 15,
      fertilizantes: 35,
      defensivos: 20,
      irrigacao: 15,
      maoObra: 15
    }
  },
  precos: {
    tomate: { valor: 6.20, variacao: '+8%' },
    alface: { valor: 2.80, variacao: '0%' },
    brocolis: { valor: 4.50, variacao: '+12%' }
  }
};

export const chatMensagens = [
  {
    id: 1,
    tipo: 'ia',
    conteudo: 'Olá! Sou sua assistente de campo SegVerde. Como posso ajudar hoje?',
    timestamp: '09:30'
  },
  {
    id: 2,
    tipo: 'usuario',
    conteudo: 'Preciso identificar se essa praga é perigosa para o tomate',
    timestamp: '09:32'
  },
  {
    id: 3,
    tipo: 'ia',
    conteudo: 'Posso analisar a imagem para você! Pela foto, identifico características de Helicoverpa armigera (lagarta-do-tomate). É uma praga de risco médio-alto. Recomendo aplicação de Bt ou produto específico. Quer que eu gere um receituário?',
    timestamp: '09:33'
  }
];

export const timeline = [
  {
    id: 1,
    loteId: 1,
    data: '2025-05-30',
    tipo: 'aplicacao',
    titulo: 'Aplicação NPK 20-20-20',
    descricao: 'Fertilização foliar realizada',
    responsavel: 'João Silva',
    status: 'concluido'
  },
  {
    id: 2,
    loteId: 1,
    data: '2025-05-28',
    tipo: 'monitoramento',
    titulo: 'Inspeção Fitossanitária',
    descricao: 'Plantas saudáveis, sem sinais de pragas',
    responsavel: 'Carlos Lima',
    status: 'concluido'
  },
  {
    id: 3,
    loteId: 1,
    data: '2025-05-25',
    tipo: 'irrigacao',
    titulo: 'Irrigação por Gotejamento',
    descricao: '18mm de água aplicados',
    responsavel: 'Sistema Automático',
    status: 'concluido'
  },
  {
    id: 4,
    loteId: 1,
    data: '2025-05-20',
    tipo: 'aplicacao',
    titulo: 'Aplicação Preventiva',
    descricao: 'Fungicida cúprico aplicado',
    responsavel: 'Maria Santos',
    status: 'concluido'
  },
  {
    id: 5,
    loteId: 1,
    data: '2025-03-15',
    tipo: 'plantio',
    titulo: 'Plantio das Mudas',
    descricao: 'Transplantio de 25.000 mudas/ha',
    responsavel: 'Equipe Plantio',
    status: 'concluido'
  }
];

export const blockchain = {
  hash: '0x7a8b9c2d...f5e6',
  blocoId: 'BLK_001_SEG_2025',
  timestampUltima: '2025-05-30T14:30:00Z',
  transacoes: 156,
  statusVerificacao: 'Verificado',
  rede: 'SegVerde Chain',
  consenso: 'Proof of Agriculture'
};

// Dados para formulários e seleções
export const produtosInsumos = [
  'NPK 20-20-20',
  'NPK 04-14-08',
  'Urea 45%',
  'Superfosfato Simples',
  'Cloreto de Potássio',
  'Calcário Dolomítico',
  'Boro Solúvel',
  'Sulfato de Zinco',
  'Bacillus thuringiensis',
  'Óleo de Neem',
  'Fungicida Cúprico',
  'Adubo Orgânico'
];

export const tiposAtividade = [
  { tipo: 'aplicacao', icone: '🧪', label: 'Aplicação' },
  { tipo: 'irrigacao', icone: '💧', label: 'Irrigação' },
  { tipo: 'plantio', icone: '🌱', label: 'Plantio' },
  { tipo: 'colheita', icone: '🥬', label: 'Colheita' },
  { tipo: 'monitoramento', icone: '👁️', label: 'Monitoramento' },
  { tipo: 'manutencao', icone: '🔧', label: 'Manutenção' }
];

export const culturas = [
  { nome: 'Tomate', emoji: '🍅', categoria: 'Fruto' },
  { nome: 'Alface', emoji: '🥬', categoria: 'Folhosa' },
  { nome: 'Brócolis', emoji: '🥦', categoria: 'Crucífera' },
  { nome: 'Cenoura', emoji: '🥕', categoria: 'Raiz' },
  { nome: 'Pimentão', emoji: '🫑', categoria: 'Fruto' },
  { nome: 'Repolho', emoji: '🥬', categoria: 'Folhosa' },
  { nome: 'Abobrinha', emoji: '🥒', categoria: 'Fruto' },
  { nome: 'Beterraba', emoji: '🍠', categoria: 'Raiz' }
];

export const responsaveis = [
  'João Silva',
  'Maria Santos',
  'Carlos Lima',
  'Ana Costa',
  'Pedro Oliveira',
  'Lucia Ferreira',
  'Sistema Automático'
];