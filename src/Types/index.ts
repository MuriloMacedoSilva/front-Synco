export interface Usuario {
  
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
  senha?: string; 
  id?: number;
}

export interface Reuniao {
  id: number;
  titulo: string;
  data: string;
  hora: string;
  participantes: number;
  plataforma: 'Google Meet' | 'Teams' | 'Zoom';
  status: 'agendada' | 'concluida' | 'cancelada';
}

export interface Email {
  id: number;
  remetente: string;
  assunto: string;
  preview: string;
  lido: boolean;
  data: string;
}