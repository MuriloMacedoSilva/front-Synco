import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import type { Reuniao } from '../Types';
import { ReuniaoService } from '../Services/ReuniaoService';
import { useToast } from '../Context/ToastContext'; 

export function ReuniaoDetalhes() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast(); 
  
  const [reuniao, setReuniao] = useState<Reuniao | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  
  useEffect(() => {
    const carregarDados = async () => {
      if (!id) return;
      try {
        const dados = await ReuniaoService.getById(Number(id));
        setReuniao(dados);
      } catch (error) {
        console.error("Erro ao buscar reunião", error);
        toast.addToast("Não foi possível carregar os detalhes da reunião.", 'error');
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, [id, toast]);

  
  const handleDelete = async () => {
    const confirmacao = window.confirm("Tem certeza que deseja cancelar esta reunião? Esta ação não pode ser desfeita.");
    
    if (confirmacao && id) {
      setDeleting(true);
      try {
      
        await ReuniaoService.delete(Number(id));
        
        
        toast.addToast("Reunião cancelada com sucesso!", 'success');
        
        navigate('/dashboard'); 
      } catch (error) {
       
        toast.addToast("Erro ao cancelar reunião. Tente novamente.", 'error');
        setDeleting(false);
      }
    }
  };

  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-synco-blue"></div>
      </div>
    );
  }

 
  if (!reuniao) {
    return (
      <div className="p-10 text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-red-500">Reunião não encontrada!</h2>
        <Link to="/dashboard" className="text-synco-blue hover:underline mt-4 block font-bold">
          ⬅ Voltar para Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto animate-fade-in">
      {/* Botão de Voltar */}
      <Link to="/dashboard" className="inline-flex items-center text-gray-500 hover:text-synco-blue mb-6 transition-colors font-medium">
        ⬅ Voltar para o Dashboard
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        
        {/* Cabeçalho do Card */}
        <div className="p-8 border-b border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
              reuniao.status === 'agendada' ? 'bg-blue-100 text-blue-700' : 
              reuniao.status === 'cancelada' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}>
              {reuniao.status}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-4 mb-2">
              {reuniao.titulo}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">ID da Reunião: #{reuniao.id}</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-4xl font-bold text-synco-blue dark:text-white">{reuniao.hora}</p>
            <p className="text-gray-500 font-medium">{reuniao.data}</p>
          </div>
        </div>

        {/* Corpo do Card */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2 tracking-wider">Plataforma</h3>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📹</span>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{reuniao.plataforma}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase mb-2 tracking-wider">Participantes</h3>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👥</span>
              <span className="text-lg font-medium text-gray-700 dark:text-gray-200">{reuniao.participantes} Confirmados</span>
            </div>
          </div>
        </div>

        {/* RODAPÉ COM BOTÕES */}
        <div className="bg-gray-50 dark:bg-gray-700/30 p-6 flex flex-wrap gap-4">
          <button className="flex-1 bg-synco-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
            Entrar na Sala
          </button>
          
          <Link 
            to={`/reuniao/editar/${reuniao.id}`}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-bold hover:bg-yellow-600 transition-colors flex items-center gap-2"
          >
            <span>✏️</span> Editar
          </Link>
          
          <button 
            onClick={handleDelete}
            disabled={deleting}
            className="px-6 py-3 border border-red-200 text-red-600 rounded-lg font-bold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
          >
            {deleting ? '...' : 'Cancelar Reunião'}
          </button>
        </div>
      </div>
    </div>
  );
}