import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../Components/Sidebar';
import { Header } from './Header';

export function DashboardLayout() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-synco-dark transition-colors duration-300">
      
      {/* Sidebar (Recebe o estado e a função para fechar) */}
      <Sidebar 
        isOpen={isMobileMenuOpen} 
        close={() => setIsMobileMenuOpen(false)} 
      />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header modificado para ter o botão Hambúrguer */}
        <div className="sticky top-0 z-30 bg-white dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 px-4 w-full">
            
            {/* BOTÃO HAMBÚRGUER (Visível apenas no Mobile 'md:hidden') */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* O Header original */}
            <div className="flex-1">
              <Header />
            </div>
          </div>
        </div>
        
        {/* Área de Conteúdo */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}