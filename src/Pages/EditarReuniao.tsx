import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReuniaoService } from '../Services/ReuniaoService';

export function EditarReuniao() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    titulo: '',
    data: '',
    hora: '',
    participantes: 0,
    plataforma: 'Google Meet',
  });

  useEffect(() => {
    const carregarDados = async () => {
      if (!id) return;
      const reuniao = await ReuniaoService.getById(Number(id));
      if (reuniao) {
        setFormData({
          titulo: reuniao.titulo,
          data: reuniao.data, 
          hora: reuniao.hora,
          participantes: reuniao.participantes,
          plataforma: reuniao.plataforma,
        });
      } else {
        alert("Reunião não encontrada");
        navigate('/dashboard');
      }
      setLoading(false);
    };
    carregarDados();
  }, [id, navigate]);

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await ReuniaoService.update(Number(id), formData as any);
      alert('Reunião atualizada com sucesso!');
      navigate(`/reuniao/${id}`); 
    } catch (error) {
      alert('Erro ao atualizar.');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) return <div className="p-10 text-center">Carregando...</div>;

  return (
    <div className="p-6 md:p-10 max-w-2xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Editar Reunião</h1>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 space-y-6">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Título</label>
          <input 
            type="text" name="titulo" required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none"
            value={formData.titulo} onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Data</label>
            <input 
              type="date" name="data" required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white"
              value={formData.data} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hora</label>
            <input 
              type="time" name="hora" required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white"
              value={formData.hora} onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Plataforma</label>
            <select 
              name="plataforma"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white"
              value={formData.plataforma} onChange={handleChange}
            >
              <option value="Google Meet">Google Meet</option>
              <option value="Teams">Microsoft Teams</option>
              <option value="Zoom">Zoom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Participantes</label>
            <input 
              type="number" name="participantes" min="1"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white"
              value={formData.participantes} onChange={handleChange}
            />
          </div>
        </div>

        <div className="pt-4 flex gap-4">
          <button 
            type="button" onClick={() => navigate(-1)}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button 
            type="submit" disabled={saving}
            className="flex-1 bg-synco-blue text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </div>
      </form>
    </div>
  );
}