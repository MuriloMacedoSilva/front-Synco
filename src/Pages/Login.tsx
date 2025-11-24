import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard'); 
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
        
        {/* Cabeçalho do Card */}
        <div className="p-8 text-center border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <h1 className="text-3xl font-bold text-synco-blue dark:text-white">
            Synco<span className="text-synco-green">.</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm">Conecte suas contas para sincronizar.</p>
        </div>

        {/* Corpo do Login */}
        <div className="p-8 space-y-6">
          
          {/* Botões Sociais (Fake Auth) */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <span className="text-xl">G</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">Google</span>
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <span className="text-xl text-blue-600">M</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">Outlook</span>
            </button>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">Ou continue com email</span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
          </div>

          {/* Formulário Tradicional */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
                <a href="#" className="text-xs text-synco-blue hover:underline">Esqueceu a senha?</a>
              </div>
              <input 
                type="password" 
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-synco-blue text-white py-3.5 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-wait flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Acessando...
                </>
              ) : (
                'Acessar Plataforma'
              )}
            </button>
          </form>
        </div>

        {/* Rodapé do Card */}
        <div className="p-4 text-center bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Não tem uma conta? <Link to="/cadastro" className="text-synco-blue font-bold hover:underline">Cadastre-se</Link>
          </p>
        </div>

      </div>
    </div>
  );
}