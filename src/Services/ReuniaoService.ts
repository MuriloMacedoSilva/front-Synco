import type { Reuniao } from '../Types';


let mockReunioes: Reuniao[] = [
  { id: 1, titulo: "Daily Scrum", data: "2024-05-20", hora: "09:00", participantes: 5, plataforma: "Google Meet", status: "agendada" },
  { id: 2, titulo: "Alinhamento Cliente", data: "2024-05-20", hora: "14:30", participantes: 2, plataforma: "Teams", status: "agendada" },
  { id: 3, titulo: "Review Sprint", data: "2024-05-20", hora: "16:00", participantes: 8, plataforma: "Zoom", status: "agendada" },
];

export const ReuniaoService = {
  // GET: Buscar todas
  getAll: async (): Promise<Reuniao[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...mockReunioes];
  },

  // GET: Buscar por ID
  getById: async (id: number): Promise<Reuniao | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockReunioes.find(r => r.id === id);
  },

  // POST: Criar nova
  create: async (reuniao: Omit<Reuniao, 'id'>): Promise<Reuniao> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const novaReuniao = {
      ...reuniao,
      id: Math.floor(Math.random() * 10000) // Gera ID aleatório
    };
    
    mockReunioes.push(novaReuniao);
    return novaReuniao;
  },

  // PUT: Atualizar 
  // Usamos Partial<Reuniao> porque podemos atualizar só o título, só a data, etc.
  update: async (id: number, reuniaoAtualizada: Partial<Reuniao>): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = mockReunioes.findIndex(r => r.id === id);
    if (index !== -1) {
      // Atualiza apenas os campos que foram enviados, mantendo o resto (ID, status, etc)
      mockReunioes[index] = { ...mockReunioes[index], ...reuniaoAtualizada };
      console.log("Reunião atualizada:", mockReunioes[index]);
    } else {
      throw new Error("Reunião não encontrada para atualização");
    }
  },

  // DELETE: Remover
  delete: async (id: number): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    mockReunioes = mockReunioes.filter(r => r.id !== id);
  }
};