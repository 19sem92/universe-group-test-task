import { API_BASE_URL } from '../constants/api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiClientOptions extends RequestInit {
  skipBaseUrl?: boolean;
}

export async function apiClient<T>(
  path: string,
  method: HttpMethod = 'GET',
  body?: any,
  options: ApiClientOptions = {}
): Promise<T> {
  const url = options.skipBaseUrl ? path : `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`API error ${response.status}: ${message}`);
  }

  const contentType = response.headers.get('Content-Type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  } else if (contentType.includes('application/pdf')) {
    return response.blob() as Promise<T>;
  } else {
    return response.text() as Promise<T>;
  }
}
