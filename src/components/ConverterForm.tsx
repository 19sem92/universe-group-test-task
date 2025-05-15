import { useState } from 'react';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';

export default function ConverterForm({ onConvert }: { onConvert: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      onConvert(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Введіть текст..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
      />
      <Button type="submit">Конвертувати в PDF</Button>
    </form>
  );
}
