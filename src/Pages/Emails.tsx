import { useEffect, useState } from 'react';
import type { Email } from '../Types';
import { EmailService } from '../Services/EmailServices';

export function Emails() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarEmails();
  }, []);

  const carregarEmails = async () => {
    const dados = await EmailService.getAll();
    setEmails(dados);
    setLoading(false);
  };

  const toggleLido = async (id: number) => {
    setEmails(prev => prev.map(e => 
      e.id === id ? { ...e, lido: !e.lido } : e
    ));
  
    await EmailService.markAsRead(id);
  };

  return (
    <div className="p-6 md:p-10 animate-fade-in max-w-6xl mx-auto h-[calc(100vh-100px)] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Caixa de Entrada</h1>
        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
          {emails.filter(e => !e.lido).length} não lidos
        </span>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex-1 overflow-hidden flex flex-col">
        
        {/* Barra de Ferramentas Simulada */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex gap-4 text-gray-400">
          <button className="hover:text-synco-blue">🔄 Atualizar</button>
          <button className="hover:text-synco-blue">🗑️ Lixeira</button>
        </div>

        {/* Lista de Emails */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="p-10 text-center">Carregando emails...</div>
          ) : (
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {emails.map((email) => (
                <div 
                  key={email.id}
                  onClick={() => toggleLido(email.id)}
                  className={`
                    group flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors border-l-4
                    ${email.lido 
                      ? 'bg-white dark:bg-gray-800 border-transparent opacity-70' 
                      : 'bg-blue-50/30 dark:bg-blue-900/10 border-synco-blue'
                    }
                  `}
                >
                  {/* Checkbox Simulado */}
                  <div className={`w-5 h-5 rounded border flex items-center justify-center
                    ${email.lido ? 'border-gray-300' : 'border-synco-blue bg-synco-blue text-white'}
                  `}>
                    {!email.lido && <span className="text-xs">✓</span>}
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
                    <span className={`col-span-3 truncate text-sm ${!email.lido ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                      {email.remetente}
                    </span>
                    
                    <div className="col-span-8 flex items-center gap-2 truncate">
                      <span className={`text-sm ${!email.lido ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                        {email.assunto}
                      </span>
                      <span className="text-sm text-gray-400 dark:text-gray-500 hidden md:inline">
                        - {email.preview}
                      </span>
                    </div>

                    <span className="col-span-1 text-xs text-right text-gray-400 font-medium">
                      {email.data}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}