import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UsuarioService } from '../Services/UsuarioService';
import { useToast } from '../Context/ToastContext';

export function FormularioUsuario() {
  const { email } = useParams<{ email: string }>();
  const navigate = useNavigate();
  const toast = useToast();
  
  const isEditing = !!email;
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    idade: '',
    email: '',
    senha: ''
  });

  useEffect(() => {
    if (isEditing) {
      const carregarDados = async () => {
        const usuario = await UsuarioService.getByEmail(email);
        if (usuario) {
          setFormData({
            nome: usuario.nome,
            sobrenome: usuario.sobrenome,
            idade: usuario.idade.toString(),
            email: usuario.email,
            senha: '' 
          });
        } else {
          toast.addToast("Usuário não encontrado.", "error");
          navigate('/usuarios');
        }
      };
      carregarDados();
    }
  }, [email, isEditing, navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
     
      const payload = {
        nome: formData.nome,
        sobrenome: formData.sobrenome,
        idade: parseInt(formData.idade, 10),
        email: formData.email,
  
        senha: formData.senha || (isEditing ? undefined : '123456')
      };

      if (isEditing) {
        
        if (!payload.senha) delete payload.senha;
        
        await UsuarioService.update(email, payload);
        toast.addToast("Usuário atualizado com sucesso!", "success");
      } else {
        await UsuarioService.create(payload);
        toast.addToast("Usuário cadastrado com sucesso!", "success");
      }
      navigate('/usuarios');
    } catch (error: any) {
      console.error(error);
      toast.addToast("Erro ao salvar. Verifique os dados.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        {isEditing ? 'Editar Usuário' : 'Novo Usuário'}
      </h1>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome</label>
            <input 
              type="text" name="nome" required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.nome} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sobrenome</label>
            <input 
              type="text" name="sobrenome" required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.sobrenome} onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Idade</label>
            <input 
              type="number" name="idade" required min="1"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.idade} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input 
              type="email" name="email" required
              disabled={isEditing}
              className={`w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none ${isEditing ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-70' : 'bg-gray-50 dark:bg-gray-900'}`}
              value={formData.email} onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {isEditing ? 'Nova Senha (opcional)' : 'Senha'}
          </label>
          <input 
            type="password" name="senha"
           
            required={!isEditing && !formData.senha}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
            placeholder="••••••"
            value={formData.senha} onChange={handleChange}
          />
        </div>

        <div className="pt-4 flex gap-4">
          <button 
            type="button" onClick={() => navigate('/usuarios')}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button 
            type="submit" disabled={loading}
            className="flex-1 bg-synco-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Salvando...' : (isEditing ? 'Salvar Alterações' : 'Cadastrar Usuário')}
          </button>
        </div>

      </form>
    </div>
  );
}