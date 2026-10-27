"use client";

import { usePathname, useRouter } from "next/navigation";

const PROJECTS = [
  {
    id: 1,
    title: "Портфолио на React с анимациями Framer Motion",
    desc: "Личный сайт-визитка с плавными переходами между секциями, тёмной темой и адаптивной вёрсткой. Использованы CSS Grid для галереи проектов и Intersection Observer для анимации появления блоков при скролле.",
    stars: 87,
    date: "03.02.2025",
  },
  {
    id: 2,
    title: "Трекер привычек с локальным хранилищем",
    desc: "Приложение для отслеживания ежедневных привычек с визуализацией прогресса в виде календарной сетки. Данные сохраняются в localStorage, есть тёмная и светлая темы, а также экспорт статистики в CSV.",
    stars: 45,
    date: "18.11.2024",
  },
  {
    id: 3,
    title: "Клон интерфейса Spotify на TypeScript",
    desc: "Учебный проект с плеером, плейлистами и поиском треков через публичное API. Реализовано управление состоянием через Zustand, кастомные хуки для работы с аудио и адаптивный плеер, закреплённый снизу экрана.",
    stars: 210,
    date: "27.06.2025",
  },
  {
    id: 4,
    title: "Конструктор форм с drag-and-drop",
    desc: "Инструмент для визуального создания веб-форм без кода. Поддерживает перетаскивание полей, настройку валидации и экспорт готовой формы в JSON-схему или React-компонент. Собран на dnd-kit и react-hook-form.",
    stars: 156,
    date: "09.09.2025",
  },
  {
    id: 5,
    title: "Дашборд для анализа криптовалют",
    desc: "Панель с графиками курсов, историей транзакций и портфелем пользователя. Данные подтягиваются через WebSocket в реальном времени, графики построены на Recharts, есть фильтрация по периодам и монетам.",
    stars: 98,
    date: "14.01.2025",
  },
  {
    id: 6,
    title: "Генератор случайных паттернов для фона",
    desc: "SVG-генератор геометрических узоров с настройкой цветов, плотности и формы элементов. Позволяет скачать результат в форматах SVG и PNG, а также скопировать код напрямую для вставки в проект.",
    stars: 63,
    date: "30.07.2024",
  },
  {
    id: 7,
    title: "Приложение для совместного редактирования заметок",
    desc: "Реал-тайм редактор заметок с поддержкой нескольких пользователей одновременно. Использует WebSocket для синхронизации изменений, CRDT-алгоритм для разрешения конфликтов и Markdown-разметку для форматирования текста.",
    stars: 134,
    date: "05.05.2025",
  },
];

export default function ProjectsPage() {
  const router = useRouter();
  const pathname = usePathname()



  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corporis
      autem alias fugiat nostrum quasi obcaecati, placeat similique animi
      quisquam, in nesciunt officia nobis. Voluptatibus in dolore vel quisquam
      nisi assumenda, ad corrupti velit? Laboriosam impedit doloribus nemo quas
      quaerat beatae, molestias laborum eum similique labore magnam doloremque
      vitae perferendis.
    </div>
  );
}
