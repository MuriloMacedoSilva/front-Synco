import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}

export function Sidebar({ isOpen, close }: SidebarProps) {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Agendar', path: '/reuniao/nova', icon: '➕' },
    { label: 'Emails', path: '/emails', icon: '📩' },
    { label: 'Usuarios', path: '/usuarios', icon: '👥' },
  ];

  return (
    <>

      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={close} 
      />

      {/* SIDEBAR PRINCIPAL */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 
          flex flex-col h-full min-h-screen transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Cabeçalho da Sidebar */}
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-synco-blue dark:text-white">
            Synco<span className="text-synco-green">.</span>
          </h2>
          {/* Botão X para fechar no mobile */}
          <button onClick={close} className="md:hidden text-gray-500 hover:text-red-500">
            ✕
          </button>
        </div>

        {/* Navegação */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={close}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'bg-synco-blue text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-synco-blue dark:hover:text-synco-green'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Rodapé */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
            <span>🚪</span>
            <span className="font-medium">Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}