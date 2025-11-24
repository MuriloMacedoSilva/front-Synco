import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Usuario } from '../Types';
import { UsuarioService } from '../Services/UsuarioService';
import { useToast } from '../Context/ToastContext';

export function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');
  const toast = useToast();

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const dados = await UsuarioService.getAll();
      setUsuarios(dados);
    } catch (error) {
      toast.addToast("Erro ao carregar lista de usuários", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (email: string, nome: string) => {
    if (window.confirm(`Tem certeza que deseja remover o usuário ${nome}?`)) {
      try {
        await UsuarioService.delete(email);
        setUsuarios(prev => prev.filter(u => u.email !== email));
        toast.addToast("Usuário removido com sucesso.", "success");
      } catch (error) {
        toast.addToast("Erro ao remover usuário.", "error");
      }
    }
  };

  const usuariosFiltrados = usuarios.filter(u => 
    (u.nome?.toLowerCase() || '').includes(busca.toLowerCase()) || 
    (u.sobrenome?.toLowerCase() || '').includes(busca.toLowerCase()) ||
    (u.email?.toLowerCase() || '').includes(busca.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 animate-fade-in max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Gestão de Usuários</h1>
          <p className="text-gray-500 dark:text-gray-400">Integrado com API Java.</p>
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input 
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none shadow-sm"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
          </div>

          <Link 
            to="/usuarios/novo"
            className="bg-synco-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2 whitespace-nowrap"
          >
            <span>+</span> Novo
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
        {loading ? (
          <div className="p-20 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-synco-blue mb-4"></div>
            <p className="text-gray-500">Carregando dados da API...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700">
                  <th className="p-5 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Nome Completo</th>
                  <th className="p-5 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Idade</th>
                  <th className="p-5 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Email</th>
                  <th className="p-5 text-right text-sm font-bold text-gray-500 dark:text-gray-400 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {usuariosFiltrados.map((usuario, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                    <td className="p-5 font-medium text-gray-800 dark:text-white">
                      {usuario.nome} {usuario.sobrenome}
                    </td>
                    <td className="p-5 text-gray-600 dark:text-gray-300">
                      {usuario.idade} anos
                    </td>
                    <td className="p-5 text-gray-600 dark:text-gray-300">
                      {usuario.email}
                    </td>
                    <td className="p-5 text-right flex justify-end gap-2">
                      <Link 
                        to={`/usuarios/editar/${usuario.email}`}
                        className="text-gray-400 hover:text-yellow-500 transition-colors p-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                      >
                        ✏️
                      </Link>
                      <button 
                        onClick={() => handleDelete(usuario.email, usuario.nome)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {usuariosFiltrados.length === 0 && (
              <div className="p-10 text-center text-gray-500">
                Nenhum usuário encontrado.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}