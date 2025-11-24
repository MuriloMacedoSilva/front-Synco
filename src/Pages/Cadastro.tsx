import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    confirmarSenha: ''
  });

  // Verifica se as senhas batem
  const senhasConferem = formData.senha.length > 0 && formData.senha === formData.confirmarSenha;

  // Função auxiliar para formatar CPF (000.000.000-00)
  const mascaraCPF = (valor: string) => {
    return valor
      .replace(/\D/g, '') // Remove tudo o que não é dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto entre o terceiro e o quarto dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto entre o sexto e o sétimo dígitos
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca um hífen depois do bloco de 9 dígitos
      .replace(/(-\d{2})\d+?$/, '$1'); // Captura pela máscara apenas os dois últimos dígitos
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Se for o campo CPF, aplica a máscara
    if (name === 'cpf') {
      setFormData(prev => ({ ...prev, [name]: mascaraCPF(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!senhasConferem) {
      alert("As senhas não coincidem!");
      return;
    }

    if (formData.cpf.length < 14) {
      alert("Por favor, preencha o CPF completo.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Dados enviados:", formData); 
      alert(`Administrador ${formData.nome} (CPF: ${formData.cpf}) cadastrado com sucesso!`);
      navigate('/login'); 
    }, 1500);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        
        {/* Cabeçalho */}
        <div className="p-8 text-center border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <h1 className="text-2xl font-bold text-synco-blue dark:text-white">
            Novo Admin
          </h1>
          <p className="text-gray-500 mt-2 text-sm">Crie sua conta para gerenciar o Synco.</p>
        </div>

        {/* Formulário */}
        <div className="p-8 space-y-6">
          <form onSubmit={handleCadastro} className="space-y-4">
            
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Nome Completo</label>
              <input 
                type="text" name="nome" required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                placeholder="Ex: João Silva"
                value={formData.nome} onChange={handleChange}
              />
            </div>

            {/* CPF e Email lado a lado em telas grandes, ou empilhados em mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email Corporativo</label>
                    <input 
                        type="email" name="email" required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                        placeholder="admin@empresa.com"
                        value={formData.email} onChange={handleChange}
                    />
                </div>
                
               
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">CPF</label>
                    <input 
                        type="text" name="cpf" required
                        maxLength={14}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all font-mono"
                        placeholder="000.000.000-00"
                        value={formData.cpf} onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Senha</label>
                <input 
                  type="password" name="senha" required minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                  placeholder="••••••"
                  value={formData.senha} onChange={handleChange}
                />
              </div>

              {/* Confirmar Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Confirmar</label>
                <input 
                  type="password" name="confirmarSenha" required minLength={6}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border text-gray-800 dark:text-white focus:ring-2 outline-none transition-all ${
                    formData.confirmarSenha && !senhasConferem 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-200 dark:border-gray-700 focus:ring-synco-blue'
                  }`}
                  placeholder="••••••"
                  value={formData.confirmarSenha} onChange={handleChange}
                />
              </div>
            </div>

            {/* Aviso de Senha */}
            {formData.confirmarSenha && !senhasConferem && (
              <p className="text-xs text-red-500 font-medium animate-pulse">
                As senhas não coincidem.
              </p>
            )}

            <button 
              type="submit" 
              disabled={isLoading || !senhasConferem}
              className="w-full bg-synco-blue text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? 'Criando conta...' : 'Cadastrar Administrador'}
            </button>
          </form>
        </div>

        {/* Rodapé */}
        <div className="p-4 text-center bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Já tem uma conta? <Link to="/login" className="text-synco-blue font-bold hover:underline">Fazer Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
}