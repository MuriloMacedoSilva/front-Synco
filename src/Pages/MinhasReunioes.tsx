import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Reuniao } from '../Types';
import { ReuniaoService } from '../Services/ReuniaoService';

export function MinhasReunioes() {
  const [reunioes, setReunioes] = useState<Reuniao[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState<'todas' | 'agendada' | 'cancelada' | 'concluida'>('todas');

  // Busca os dados ao carregar
  useEffect(() => {
    carregarReunioes();
  }, []);

  const carregarReunioes = async () => {
    try {
      const dados = await ReuniaoService.getAll();
      setReunioes(dados);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  
  const reunioesFiltradas = reunioes.filter(r => {
    if (filtro === 'todas') return true;
    return r.status === filtro;
  });

  return (
    <div className="p-6 md:p-10 animate-fade-in max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Minhas Reuniões</h1>
          <p className="text-gray-500 dark:text-gray-400">Gerencie toda a sua agenda.</p>
        </div>
        <Link to="/reuniao/nova" className="bg-synco-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
          + Nova Reunião
        </Link>
      </div>

      {/* Barra de Filtros */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['todas', 'agendada', 'concluida', 'cancelada'].map((status) => (
          <button
            key={status}
            onClick={() => setFiltro(status as any)}
            className={`px-4 py-2 rounded-full text-sm font-bold capitalize transition-colors ${
              filtro === status
                ? 'bg-synco-blue text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Carregando agenda...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {reunioesFiltradas.length === 0 ? (
            <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
              <p className="text-gray-500">Nenhuma reunião encontrada com este filtro.</p>
            </div>
          ) : (
            reunioesFiltradas.map((reuniao) => (
              <Link 
                to={`/reuniao/${reuniao.id}`} 
                key={reuniao.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-synco-blue/30 transition-all group"
              >
                <div className="flex items-center gap-6">
                  {/* Data Box */}
                  <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-700/50 w-20 h-20 rounded-lg border border-gray-200 dark:border-gray-600">
                    <span className="text-xs font-bold text-gray-500 uppercase">{reuniao.data.substring(0, 4) === 'Hoje' ? 'HOJE' : 'DIA'}</span>
                    <span className="text-xl font-bold text-synco-blue dark:text-white">{reuniao.hora}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${
                        reuniao.status === 'agendada' ? 'bg-green-500' : 
                        reuniao.status === 'cancelada' ? 'bg-red-500' : 'bg-gray-400'
                      }`} />
                      <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">{reuniao.status}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-synco-blue transition-colors">
                      {reuniao.titulo}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span>📹 {reuniao.plataforma}</span>
                      <span>•</span>
                      <span>👥 {reuniao.participantes} participantes</span>
                    </p>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 self-end md:self-center">
                   <span className="text-synco-blue font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                     Ver Detalhes ➡️
                   </span>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}