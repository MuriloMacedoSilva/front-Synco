import { useState } from 'react';

export function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.nome}! Sua mensagem foi recebida.`);
    setFormData({ nome: '', email: '', mensagem: '' }); 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-synco-blue dark:text-white mb-4">Fale Conosco</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Tem alguma dúvida sobre o Synco ou quer sugerir uma nova funcionalidade? 
          Estamos aqui para ouvir você.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
        
        {/* Lado Esquerdo: Informações */}
        <div className="bg-synco-blue p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Elemento decorativo de fundo */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-synco-green opacity-20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-bold">Endereço</p>
                  <p className="text-blue-100">Av. Paulista, 1106 - Bela Vista<br/>São Paulo - SP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-blue-100">contato@synco.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold">Telefone</p>
                  <p className="text-blue-100">(11) 3385-8010</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10">
            <p className="text-sm text-blue-200">
              Atendimento de Seg. a Sex. das 09:00 às 18:00
            </p>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
              <input 
                type="text" 
                name="nome"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Profissional</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all"
                placeholder="voce@empresa.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
              <textarea 
                name="mensagem"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-synco-blue outline-none transition-all resize-none"
                placeholder="Como podemos ajudar?"
                value={formData.mensagem}
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-synco-blue text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}