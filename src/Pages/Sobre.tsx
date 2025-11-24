import { Link } from 'react-router-dom';

export function Sobre() {
  return (
    <div className="min-h-screen animate-fade-in">
      
      {/* HERO SECTION  */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Elementos de fundo decorativos */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-synco-blue/5 dark:bg-synco-blue/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-synco-blue dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
            Global Solution 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            O fim do caos entre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-synco-blue to-synco-green">
              abas e aplicativos.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            O Synco não é apenas um dashboard. É a resposta para a fragmentação corporativa. 
            Centralizamos sua vida digital para que você pare de alternar janelas e comece a produzir.
          </p>
        </div>
      </section>

     
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">O Problema: <br/><span className="text-red-400">Context Switching</span></h2>
            <p className="text-gray-400 text-lg mb-6">
              Estudos mostram que um profissional perde, em média, <strong>40% de sua produtividade</strong> apenas trocando de contexto entre emails, agendas e chats.
            </p>
            <p className="text-gray-400 text-lg">
              Cada vez que você sai do Google Calendar para checar o Outlook, seu cérebro precisa de tempo para refocar. Multiplique isso por dezenas de vezes ao dia, e o resultado é exaustão e ineficiência.
            </p>
          </div>
          
         
          <div className="relative h-80 bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl flex items-center justify-center transform hover:rotate-1 transition-transform duration-500">
            <div className="absolute top-4 left-4 w-24 h-24 bg-red-500/20 rounded-lg animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="text-center z-10">
              <div className="text-6xl mb-4">🤯</div>
              <p className="font-mono text-sm text-gray-500">Erro: Muitas abas abertas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Como o Synco resolve isso</h2>
            <p className="text-gray-600 dark:text-gray-400">Três pilares fundamentais da nossa arquitetura.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Com efeito de Scale */}
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🔗
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Centralização</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Conectamos APIs do Google e Microsoft em um único hub. Seus dados, em um só lugar.
              </p>
            </div>

            {/* Card 2 - Com efeito de Scale */}
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Velocidade</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Interface otimizada com React e Vite para carregamento instantâneo e zero latência.
              </p>
            </div>

            {/* Card 3 - Com efeito de Scale */}
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-2xl mb-6">
                🎨
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">UX Premium</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Design limpo, Modo Escuro nativo e acessibilidade pensada desde a primeira linha de código.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-synco-blue to-blue-600 rounded-3xl p-12 md:p-20 text-white shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          {/* Círculos decorativos */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-synco-green opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para recuperar seu tempo?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Junte-se à revolução da produtividade. O projeto é open-source e desenvolvido com paixão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/login" 
                className="px-8 py-4 bg-white text-synco-blue font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-white/20"
              >
                Começar Agora
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}