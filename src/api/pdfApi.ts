import { API_KEY } from '../constants/api';
import { apiClient } from './apiClient';

export async function createPdf(text: string): Promise<Blob> {
  return apiClient<Blob>(`/create-pdf?apiKey=${API_KEY}`, 'POST', { text });
}
