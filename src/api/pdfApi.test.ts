import { createPdf } from './pdfApi';

jest.mock('../constants//api');

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    headers: {
        get: () => 'application/pdf',
    },
    blob: () => Promise.resolve(new Blob(['mock-pdf'], { type: 'application/pdf' })),
  })
) as jest.Mock;


describe('createPdf', () => {
  it('sends a POST request and returns a PDF blob', async () => {
    const text = 'Hello, test PDF';
    const blob = await createPdf(text);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining('/create-pdf'),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ text }),
      })
    );

    expect(blob).toBeInstanceOf(Blob);
  });
});
