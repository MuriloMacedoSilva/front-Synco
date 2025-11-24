import { createContext, useContext, useState,  } from 'react';
import type {ReactNode} from 'react';
type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = (message: string, type: ToastType = 'info') => {
    const id = Date.now();
    const newMessage: ToastMessage = { id, message, type };
    
    setMessages((prev) => [...prev, newMessage]);


    setTimeout(() => {
      setMessages((prev) => prev.filter((m) => m.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider');
  }
  return context;
}

function ToastContainer({ messages }: { messages: ToastMessage[] }) {
  const getColors = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 border-green-700 text-white';
      case 'error':
        return 'bg-red-500 border-red-700 text-white';
      case 'warning':
        return 'bg-yellow-500 border-yellow-700 text-gray-800';
      default:
        return 'bg-synco-blue border-blue-700 text-white';
    }
  };

  return (

    <div className="fixed top-4 right-4 z-[9999] space-y-3">
      {messages.map((toast) => (
        <div 
          key={toast.id}
          className={`
            p-4 rounded-xl shadow-2xl border-b-4 transform 
            transition-all duration-300 ease-out animate-slide-in
            ${getColors(toast.type)}
          `}
        >
          <p className="font-bold text-lg">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}