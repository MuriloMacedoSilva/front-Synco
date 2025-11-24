import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import { DashboardLayout } from './Layout/Header/DashboardLayout';
import { Header } from './Layout/Header/Header';

// Páginas Públicas
import { Home } from './Pages/Home';
import { Sobre } from './Pages/Sobre';
import { Integrantes } from './Pages/Integrantes';
import { Contato } from './Pages/Contato';
import { Login } from './Pages/Login';
import { Cadastro } from './Pages/Cadastro';

// Páginas Privadas (Dashboard)
import { Dashboard } from './Pages/Dashboard';
import { ReuniaoDetalhes } from './Pages/ReuniaoDetalhes';
import { NovaReuniao } from './Pages/NovaReuniao';
import { EditarReuniao } from './Pages/EditarReuniao';
import { MinhasReunioes } from './Pages/MinhasReunioes';
import { Emails } from './Pages/Emails';
import { Usuarios } from './Pages/Usuarios';
import { FormularioUsuario } from './Pages/FormularioUsuario'; // Página de Criar/Editar Usuário

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-synco-dark transition-colors duration-500">
    <Header />
    {children}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === ROTAS PÚBLICAS === */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/integrantes" element={<PublicLayout><Integrantes /></PublicLayout>} />
        <Route path="/sobre" element={<PublicLayout><Sobre /></PublicLayout>} />
        <Route path="/contato" element={<PublicLayout><Contato /></PublicLayout>} />
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/cadastro" element={<PublicLayout><Cadastro /></PublicLayout>} />
        
        {/* === ROTAS PRIVADAS (DASHBOARD) === */}
        <Route element={<DashboardLayout />}>
          {/* Dashboard Principal */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Gestão de Reuniões */}
          <Route path="/reunioes" element={<MinhasReunioes />} />
          <Route path="/reuniao/:id" element={<ReuniaoDetalhes />} />
          <Route path="/reuniao/nova" element={<NovaReuniao />} />
          <Route path="/reuniao/editar/:id" element={<EditarReuniao />} />
          
          {/* Comunicação */}
          <Route path="/emails" element={<Emails />} />
          
          {/* Gestão de Usuários (CRUD com API) */}
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/novo" element={<FormularioUsuario />} />
          <Route path="/usuarios/editar/:email" element={<FormularioUsuario />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;