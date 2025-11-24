

// Interface local para os dados do membro
interface Membro {
  nome: string;
  rm: string;
  turma: string;
  funcao: string;
  fotoUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}
const equipe: Membro[] = [
  {
    nome: "Phillipo Barbosa",
    rm: "RM565399",
    turma: "1TDSA",
    funcao: "Front-end, IA",
    fotoUrl: "https://github.com/Pipo1506.png", 
    githubUrl: "https://github.com/Pipo1506",
    linkedinUrl: "https://www.linkedin.com/in/phillipobarbosa/"
  },
  {
    nome: "Murilo Macedo",
    rm: "RM566462",
    turma: "1TDSA",
    funcao: "Back-end Java, Python",
    fotoUrl: "https://github.com/MuriloMacedoSilva.png", 
    githubUrl: "https://github.com/MuriloMacedoSilva",
    linkedinUrl: "https://www.linkedin.com/in/murilomacedosilvadev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    nome: "João Victor",
    rm: "RM562707",
    turma: "1TDSR",
    funcao: "Database & Pitch",
    fotoUrl: "https://github.com/alc-joao.png", 
    githubUrl: "https://github.com/alc-joao",
    linkedinUrl: "http://linkedin.com/in/alc-joao"
  },
];

export function Integrantes() {
  return (
    <div className="animate-fade-in min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="bg-gradient-to-r from-synco-blue to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Conheça o nosso <span className="text-synco-green">TIME.</span>
        </h1>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
          Estudantes de Análise e Desenvolvimento de Sistemas da FIAP, dedicados a criar soluções que conectam produtividade e tecnologia.
        </p>
      </div>

      {/* 2. GRID DE CARDS */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {equipe.map((membro) => (
            <div 
              key={membro.rm}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Capa Decorativa */}
              <div className="h-24 bg-gray-50 dark:bg-gray-700/50 relative">
                <div className="absolute inset-0 bg-synco-blue/5 dark:bg-synco-blue/20 group-hover:bg-synco-blue/10 transition-colors"></div>
              </div>

              {/* Foto e Informações */}
              <div className="px-8 pb-8 relative">
                {/* Foto Circular */}
                <div className="-mt-12 mb-6 flex justify-center">
                  <img 
                    src={membro.fotoUrl} 
                    alt={membro.nome}
                    className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-md object-cover bg-white"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${membro.nome}&background=0056B3&color=fff`;
                    }}
                  />
                </div>

                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {membro.nome}
                  </h2>
                  
                  <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-synco-blue dark:text-blue-300 text-xs font-bold rounded-full mb-4">
                    {membro.funcao}
                  </span>

                  <div className="flex justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 border-t border-b border-gray-100 dark:border-gray-700 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700 dark:text-gray-200">{membro.rm}</span>
                      <span className="text-xs uppercase">RM</span>
                    </div>
                    <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700 dark:text-gray-200">{membro.turma}</span>
                      <span className="text-xs uppercase">Turma</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center">
                    <a 
                      href={membro.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors text-sm font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      GitHub
                    </a>
                    <a 
                      href={membro.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-[#0077b5] text-white rounded-lg hover:bg-[#006396] transition-colors text-sm font-medium"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}