import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { WORKER_URL } from '../constants/PDFViewer';

export default function PDFViewer({ url }: { url: string }) {
  if (!url) return null;

  return (
    <div className="border rounded overflow-hidden h-[600px]">
      <Worker workerUrl={WORKER_URL}>
        <Viewer fileUrl={url} />
      </Worker>
    </div>
  );
}
