import type { ConvertedFile } from '../types';
import { formatDateTime, truncateText } from '../utils/format';

export default function HistoryList({
  history,
  onSelect,
}: {
  history: ConvertedFile[];
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Історія</h2>
      <ul className="space-y-1">
        {history.map((file) => (
          <li
            key={file.id}
            onClick={() => onSelect(file.id)}
            className="cursor-pointer hover:underline text-blue-700"
          >
            {formatDateTime(file.createdAt)} — {truncateText(file.text)}
          </li>
        ))}
      </ul>
    </div>
  );
}