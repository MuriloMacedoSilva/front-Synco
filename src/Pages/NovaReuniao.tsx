import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReuniaoService } from '../Services/ReuniaoService';
import { useToast } from '../Context/ToastContext';

export function NovaReuniao() {
  const navigate = useNavigate();
  const toast = useToast(); 
  const [loading, setLoading] = useState(false);
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    titulo: '',
    data: '',
    hora: '',
    participantes: 2,
    plataforma: 'Google Meet' as const,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
    
      await ReuniaoService.create({
        ...formData,
        status: 'agendada'
      });

      toast.addToast('Reunião agendada com sucesso!', 'success');
      
      navigate('/dashboard'); 
    } catch (error) {
      console.error(error);
   
      toast.addToast('Erro ao agendar reunião. Tente novamente.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 md:p-10 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Novo Agendamento
      </h1>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 space-y-6">
        
        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Título da Reunião</label>
          <input 
            type="text" 
            name="titulo"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
            placeholder="Ex: Daily Scrum"
            value={formData.titulo}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data</label>
            <input 
              type="date" 
              name="data"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.data}
              onChange={handleChange}
            />
          </div>

          {/* Hora */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Horário</label>
            <input 
              type="time" 
              name="hora"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.hora}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Plataforma */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Plataforma</label>
            <select 
              name="plataforma"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.plataforma}
              onChange={handleChange}
            >
              <option value="Google Meet">Google Meet</option>
              <option value="Teams">Microsoft Teams</option>
              <option value="Zoom">Zoom</option>
            </select>
          </div>

          {/* Participantes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Participantes (Estimado)</label>
            <input 
              type="number" 
              name="participantes"
              min="1"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
              value={formData.participantes}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="pt-4 flex gap-4">
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            disabled={loading}
            className="flex-1 bg-synco-green text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Agendando...' : 'Confirmar Agendamento'}
          </button>
        </div>

      </form>
    </div>
  );
}