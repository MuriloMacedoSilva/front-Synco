import { Link } from 'react-router-dom';
import type { Reuniao, Email } from '../Types';

// Mock Data (Dados falsos para visualização)
const reunioesHoje: Reuniao[] = [
  { id: 1, titulo: "Daily Scrum", data: "Hoje", hora: "09:00", participantes: 5, plataforma: "Google Meet", status: "agendada" },
  { id: 2, titulo: "Alinhamento com Cliente", data: "Hoje", hora: "14:30", participantes: 2, plataforma: "Teams", status: "agendada" },
  { id: 3, titulo: "Review de Sprint", data: "Hoje", hora: "16:00", participantes: 8, plataforma: "Zoom", status: "agendada" },
];

const emailsRecentes: Email[] = [
  { id: 1, remetente: "João Silva", assunto: "Relatório Mensal", preview: "Segue em anexo o relatório...", lido: false, data: "10:30" },
  { id: 2, remetente: "Maria Tech", assunto: "Nova feature", preview: "Precisamos revisar o código...", lido: true, data: "Ontem" },
];

export function Dashboard() {
  return (
    <div className="p-6 md:p-10 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Olá, Usuário 👋</h1>
          <p className="text-gray-500 dark:text-gray-400">Aqui está o resumo do seu dia no Synco.</p>
        </div>
        <Link to="/reuniao/nova" className="bg-synco-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 font-medium inline-block">
        +          Novo Agendamento
        </Link>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Reuniões Hoje</h3>
          <p className="text-4xl font-bold text-synco-blue dark:text-white mt-2">3</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Emails Não Lidos</h3>
          <p className="text-4xl font-bold text-yellow-500 mt-2">1</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase">Horas Livres</h3>
          <p className="text-4xl font-bold text-synco-green mt-2">4h</p>
        </div>
      </div>

      {/* Listas de Reuniões e Emails */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Coluna da Esquerda: Próximas Reuniões (Agora clicáveis!) */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Próximas Reuniões</h2>
          <div className="space-y-4">
            {reunioesHoje.map(reuniao => (
              // LINK PARA ROTA DINÂMICA
              <Link 
                to={`/reuniao/${reuniao.id}`} 
                key={reuniao.id} 
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors cursor-pointer group block"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-lg font-bold text-sm">
                    {reuniao.hora}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white group-hover:text-synco-blue transition-colors">
                      {reuniao.titulo}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {reuniao.plataforma} • {reuniao.participantes} pessoas
                    </p>
                  </div>
                </div>
                <span className="text-gray-400 hover:text-synco-blue transition-colors">➡️</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Coluna da Direita: Emails Recentes */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Emails Recentes</h2>
          <div className="space-y-4">
            {emailsRecentes.map(email => (
              <div key={email.id} className={`p-4 rounded-xl border ${email.lido ? 'border-transparent bg-gray-50 dark:bg-gray-700/30' : 'border-l-4 border-l-synco-green bg-green-50 dark:bg-green-900/10'} transition-all`}>
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-bold ${email.lido ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>{email.remetente}</h4>
                  <span className="text-xs text-gray-500">{email.data}</span>
                </div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{email.assunto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}