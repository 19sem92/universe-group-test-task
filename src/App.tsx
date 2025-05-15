import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useMutation } from '@tanstack/react-query';

import ConverterForm from './components/ConverterForm';
import PDFViewer from './components/PDFViewer';
import HistoryList from './components/HistoryList';
import UIRender from './ui/UIRender';

import { createPdf } from './api/pdfApi';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { HistoryEntry } from './types';

export default function App() {
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null);
  const [history, setHistory] = useLocalStorage<HistoryEntry[]>('pdfHistory', []);

  const mutation = useMutation({
    mutationFn: createPdf,
    onSuccess: (blob, text) => {
      const url = URL.createObjectURL(blob);
      setSelectedPdfUrl(url);
      const entry: HistoryEntry = {
        id: uuidv4(),
        text,
        createdAt: new Date().toISOString(),
      };
      setHistory([entry, ...history]);
    },
  });

  const handleConvert = (text: string) => {
    mutation.mutate(text);
  };

  const handleSelectFromHistory = (text: string) => {
    mutation.mutate(text);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <ConverterForm onConvert={handleConvert} />

      <UIRender if={mutation.isPending}>
        <p className="text-blue-500">Генерується PDF...</p>
      </UIRender>

      <UIRender if={mutation.isError}>
        <p className="text-red-500">Сталася помилка при конвертації</p>
      </UIRender>

      <UIRender if={selectedPdfUrl}>
        <PDFViewer url={selectedPdfUrl} />
      </UIRender>

      <HistoryList history={history} onSelect={handleSelectFromHistory} />
    </div>
  );
}
