import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="animate-fade-in">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Círculos de Fundo (Efeito Glow) */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-synco-blue/10 dark:bg-synco-blue/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-gray-800 text-synco-blue dark:text-blue-300 text-sm font-bold mb-8 border border-blue-100 dark:border-gray-700 shadow-sm hover:scale-105 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Novo: Integração com Microsoft Teams disponível!
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            Sincronize seu trabalho. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-synco-blue to-synco-green">
              Potencialize seu tempo.
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            A primeira plataforma que unifica suas reuniões, emails e tarefas em um único dashboard inteligente. Adeus, troca de abas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/login" 
              className="px-8 py-4 bg-synco-blue text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              Acessar Plataforma
            </Link>
            <Link 
              to="/sobre" 
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              Como funciona?
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-10 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Empresas que já economizam tempo com o Synco
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          
            <span className="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-2">
              <span className="text-blue-500">G</span>oogle
            </span>
            <span className="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-2">
              <span className="text-orange-500">AWS</span>
            </span>
            <span className="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-2">
              <span className="text-blue-700">Meta</span>
            </span>
            <span className="text-2xl font-black text-gray-800 dark:text-white flex items-center gap-2">
              <span className="text-green-500">Spotify</span>
            </span>
          </div>
        </div>
      </section>

     
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🗓️
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Agenda Unificada</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Visualize seus compromissos do Google Calendar e Outlook lado a lado. Nunca mais perca uma reunião por conflito de agenda.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ações Rápidas</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Entre em reuniões com um clique. Marque emails como lidos sem abrir. O Synco foi desenhado para velocidade.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Segurança Total</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Seus dados são criptografados de ponta a ponta. Não armazenamos suas credenciais, apenas facilitamos o acesso.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}