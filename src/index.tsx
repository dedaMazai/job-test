import { createRoot } from 'react-dom/client';
import { App } from './app/App';

import '@/app/styles/index.scss';

const container = document.getElementById('root');

document.body.className = 'theme';

if (!container) {
    throw new Error('Контейнер root не найден, НЕ удалось вмонтировать React app');
}

const root = createRoot(container);
root.render(
    <App />,
);
