import type { Usuario } from '../Types';

// Usamos o caminho relativo para o Proxy do Vite capturar
const API_URL = "/api/usuario";

export const UsuarioService = {
  // GET: Listar todos
  getAll: async (): Promise<Usuario[]> => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Erro ao buscar usuários');
      return await response.json();
    } catch (error) {
      console.error("Erro API:", error);
      return []; // Retorna vazio se der erro, pra não quebrar a tela
    }
  },

  // GET BY EMAIL
  getByEmail: async (email: string): Promise<Usuario | undefined> => {
    try {
      // Tenta buscar direto pelo endpoint de detalhe
      const response = await fetch(`${API_URL}/${email}`);
      if (response.ok) {
        return await response.json();
      }
      // Fallback: Busca todos e filtra localmente se a API não tiver busca por ID
      const todos = await UsuarioService.getAll();
      return todos.find(u => u.email === email);
    } catch (error) {
      return undefined;
    }
  },

  // POST: Criar
  create: async (usuario: any): Promise<void> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario)
    });
    
    if (!response.ok) {
      // Tenta ler o erro que o Java mandou
      const erroTexto = await response.text(); 
      throw new Error(erroTexto || 'Erro ao criar usuário');
    }
  },

  // PUT: Atualizar
  update: async (email: string, dados: any): Promise<void> => {
    const response = await fetch(`${API_URL}/${email}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });
    if (!response.ok) throw new Error('Erro ao atualizar usuário');
  },

  // DELETE: Remover
  delete: async (email: string): Promise<void> => {
    const response = await fetch(`${API_URL}/${email}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Erro ao deletar usuário');
  }
};