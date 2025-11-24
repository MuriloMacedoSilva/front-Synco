import type { Email } from '../Types';

// Mock de dados inicial
let mockEmails: Email[] = [
  { id: 1, remetente: "João Silva", assunto: "Relatório Mensal", preview: "Segue em anexo o relatório de performance...", lido: false, data: "10:30" },
  { id: 2, remetente: "Maria Tech", assunto: "Nova feature", preview: "Precisamos revisar o código da nova funcionalidade...", lido: true, data: "Ontem" },
  { id: 3, remetente: "RH", assunto: "Férias Coletivas", preview: "Informamos que as férias coletivas começarão em...", lido: false, data: "20 Mai" },
  { id: 4, remetente: "Suporte TI", assunto: "Manutenção no Servidor", preview: "O servidor passará por manutenção programada...", lido: true, data: "18 Mai" },
  { id: 5, remetente: "Cliente X", assunto: "Dúvida sobre Contrato", preview: "Poderiam esclarecer a cláusula 5 do contrato?", lido: false, data: "15 Mai" },
];

export const EmailService = {
  // Buscar todos os emails
  getAll: async (): Promise<Email[]> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...mockEmails];
  },

  // Marcar email como lido
  markAsRead: async (id: number): Promise<void> => {
    const index = mockEmails.findIndex(e => e.id === id);
    if (index !== -1) {
      mockEmails[index].lido = true;
    }
  },
  
  // Pegar contagem de não lidos (Útil para notificações)
  getUnreadCount: async (): Promise<number> => {
    return mockEmails.filter(e => !e.lido).length;
  }
};