# 📝 Text to PDF Converter

Це простий React-додаток, який дозволяє користувачам конвертувати введений текст у PDF-документ за допомогою API. Після конвертації файл відображається у PDF-переглядачі, а історія конвертацій зберігається локально.

## 🚀 Як запустити

1. Клонуй репозиторій:
```bash
git clone https://github.com/19sem92/universe-group-test-task.git
cd universe-group-test-task
```

2. Встанови залежності:
```bash
npm install
```

3. Створи файл `.env` на основі прикладу:
```
VITE_API_BASE_URL={YOUR_BASE_URL}
VITE_API_KEY={YOUR_API_KEY}
```

4. Запусти локальний сервер:
```bash
npm run dev
```

---

## 🧾 Документація

### 📁 Структура проєкту

```
src/
├── api/               # API-клієнти для роботи з бекендом
│   └── pdfApi.ts
├── components/        # UI-компоненти з логікою
│   ├── ConverterForm.tsx
│   ├── HistoryList.tsx
│   └── PDFViewer.tsx
├── hooks/             # Кастомні React-хуки
│   └── useLocalStorage.ts
├── storage/           # Робота з IndexedDB
│   └── indexedDb.ts
├── types/             # Загальні типи TypeScript
│   └── index.ts
├── ui/                # Прості, універсальні UI-компоненти
│   ├── Button.tsx
│   ├── Textarea.tsx
│   └── UIRender.tsx
├── utils/             # Утиліти: форматування, обрізка тексту тощо
│   └── format.ts
├── App.tsx            # Головний компонент додатку
└── main.tsx           # Точка входу, підключення React Query
```

### 📦 Основні модулі

- **`pdfApi.ts`** — обгортає запит до бекенду.
- **`ConverterForm.tsx`** — форма вводу тексту.
- **`PDFViewer.tsx`** — відображення PDF.
- **`HistoryList.tsx`** — історія збережених текстів.
- **`useLocalStorage.ts`** — збереження історії у `localStorage`.
- **`indexedDb.ts`** — (альтернатива) зберігання `Blob` файлів.
- **`UIRender.tsx`** — умовний рендер у декларативному стилі.

### 🧠 Архітектурний підхід

- Файлова модульність
- Масштабованість
- Розділення UI/бізнес-логіки
- React Query для API-статусу

---

## ❓ Чому використано `localStorage` замість IndexedDB

У проєкті я залишив реалізацію з `localStorage` як дефолтну через:

- Простоту реалізації
- Легкий дебаг і контроль у браузері
- Обсяг збережених даних (лише текст, не файли)
