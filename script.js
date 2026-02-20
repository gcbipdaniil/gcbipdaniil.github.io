
const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

setTheme(getPreferredTheme());

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});


const translations = {
    pl: {
        "store_logo": "MójSklep",
        "discover": "Odkrywaj",
        "desktop_apps": "Aplikacje Desktopowe",
        "writerpro_desc": "Potężna aplikacja desktopowa dla pisarzy",
        "btn_get": "Pobierz",
        "android_apps": "Aplikacje Android",
        "mojmck_short_desc": "Twój cyfrowy dziennik uniwersytecki",
        
        "back": "Wróć",
        "key_features": "Kluczowe funkcje",
        "license_title": "Licencja",

        "dev_info": "Zaprojektowane i stworzone przez Daniila Dudarchuka",
        "contact": "Kontakt:",

        "wp_subtitle": "Potężna aplikacja desktopowa dla pisarzy.",
        "wp_lead": "Bez rejestracji, bez chmury. Po prostu potężne narzędzie działające na Twoim komputerze.",
        "wp_desc": "WriterPro to kompletne środowisko do planowania, pisania i analizowania kreatywnych projektów.",
        "feat_1_title": "Nawigator Projektu:", "feat_1_desc": "Strukturyzuj projekt za pomocą rozdziałów i scen.",
        "feat_2_title": "Postacie:", "feat_2_desc": "Twórz szczegółowe profile postaci i buduj świat.",
        "feat_3_title": "Edytor Tekstu:", "feat_3_desc": "Pracuj w trybie bez rozpraszaczy.",
        "feat_4_title": "Inspiracje:", "feat_4_desc": "Wyszukuj obrazy i słuchaj muzyki.",
        "feat_5_title": "Analityka:", "feat_5_desc": "Śledź cele pisarskie i statystyki.",
        "feat_6_title": "Eksport:", "feat_6_desc": "Eksportuj do PDF, DOCX i EPUB.",
        "license_desc": "Ten projekt jest udostępniany na licencji MIT.",

        "mck_subtitle": "Twój cyfrowy dziennik uniwersytecki.",
        "mck_lead": "Nieoficjalna aplikacja dla studentów Międzynarodowego Centrum Kształcenia (MCK) na Politechnice Krakowskiej.",
        "mck_desc": "MójMCK daje natychmiastowy dostęp do wszystkiego, czego potrzebujesz na studiach. Sprawdzaj oceny, frekwencję, zarządzaj planem zajęć i nigdy nie przegap terminu dzięki notatkom.",
        "mck_f1_title": "Oceny i Frekwencja:", "mck_f1_desc": "Przeglądaj przedmioty, śledź średnią ważoną i kontroluj procentową obecność na zajęciach.",
        "mck_f2_title": "Plan Zajęć:", "mck_f2_desc": "Wybierz grupę i kierunek, aby stworzyć swój plan. Dodawaj, edytuj i sprawdzaj czas do końca lekcji.",
        "mck_f3_title": "Notatki i Terminy:", "mck_f3_desc": "Dodawaj zadania do przedmiotów. Ustawiaj terminy i otrzymuj powiadomienia push.",
        "mck_f4_title": "Aktualności:", "mck_f4_desc": "Bądź na bieżąco z najnowszymi informacjami z uczelni i tematami zajęć.",
        "mck_f5_title": "Bezpieczeństwo i Szybkość:", "mck_f5_desc": "Bezpieczne logowanie. Dane są zapisywane lokalnie (działa offline). Obsługa trybu ciemnego."
    },
    en: {
        "store_logo": "MyStore",
        "discover": "Discover",
        "desktop_apps": "Desktop Apps",
        "writerpro_desc": "Powerful desktop application for writers",
        "btn_get": "Get",
        "android_apps": "Android Apps",
        "mojmck_short_desc": "Your digital diary for university life",
        
        "back": "Back",
        "key_features": "Key Features",
        "license_title": "License",

        "dev_info": "Designed and developed by Daniil Dudarchuk",
        "contact": "Contact:",

        "wp_subtitle": "A powerful desktop application for writers.",
        "wp_lead": "No registrations, no cloud. Just a powerful tool that runs on your computer.",
        "wp_desc": "WriterPro is a complete environment for planning, writing, and analyzing your creative projects.",
        "feat_1_title": "Project Navigator:", "feat_1_desc": "Structure your project with chapters and scenes.",
        "feat_2_title": "Characters:", "feat_2_desc": "Create detailed profiles and build your world.",
        "feat_3_title": "Text Editor:", "feat_3_desc": "Work in a distraction-free mode.",
        "feat_4_title": "Inspiration:", "feat_4_desc": "Search images and listen to music.",
        "feat_5_title": "Analytics:", "feat_5_desc": "Track writing goals and stats.",
        "feat_6_title": "Export:", "feat_6_desc": "Export to PDF, DOCX, and EPUB.",
        "license_desc": "This project is distributed under the MIT License.",

        "mck_subtitle": "Your digital diary for university life.",
        "mck_lead": "An unofficial companion app for students of Międzynarodowe Centrum Kształcenia (MCK) at Krakow University of Technology.",
        "mck_desc": "MójMCK gives you instant access to everything you need for your studies. Check your grades, monitor attendance, manage your schedule, and never miss a deadline with notes.",
        "mck_f1_title": "Grades & Attendance:", "mck_f1_desc": "View subjects, track weighted averages, and monitor your class attendance percentages.",
        "mck_f2_title": "Custom Schedule:", "mck_f2_desc": "Select your group and direction for a personalized timetable. Track time left until the lesson ends.",
        "mck_f3_title": "Notes & Deadlines:", "mck_f3_desc": "Add tasks to subjects. Set deadlines and receive push notifications.",
        "mck_f4_title": "News:", "mck_f4_desc": "Stay updated with university news and class topics.",
        "mck_f5_title": "Secure & Fast:", "mck_f5_desc": "Secure login. Data is cached locally for offline access. Supports dark mode."
    },
    ru: {
        "store_logo": "МойМагазин",
        "discover": "Главная",
        "desktop_apps": "Десктопные приложения",
        "writerpro_desc": "Мощное приложение для писателей",
        "btn_get": "Скачать",
        "android_apps": "Android приложения",
        "mojmck_short_desc": "Твой цифровой дневник для учебы",
        
        "back": "Назад",
        "key_features": "Ключевые особенности",
        "license_title": "Лицензия",

        "dev_info": "Спроектировано и разработано Даниилом Дударчуком",
        "contact": "Контакты:",

        "wp_subtitle": "Мощное десктопное приложение для писателей.",
        "wp_lead": "Без регистраций и облаков. Мощный инструмент на вашем компьютере.",
        "wp_desc": "WriterPro — это среда для планирования, написания и анализа творческих проектов.",
        "feat_1_title": "Навигатор:", "feat_1_desc": "Структурируйте проект по главам и сценам.",
        "feat_2_title": "Персонажи:", "feat_2_desc": "Создавайте профили и базу данных вашего мира.",
        "feat_3_title": "Редактор:", "feat_3_desc": "Работайте в режиме без отвлечений.",
        "feat_4_title": "Вдохновение:", "feat_4_desc": "Ищите картинки и слушайте музыку.",
        "feat_5_title": "Аналитика:", "feat_5_desc": "Следите за прогрессом на графиках.",
        "feat_6_title": "Экспорт:", "feat_6_desc": "Экспортируйте в PDF, DOCX и EPUB.",
        "license_desc": "Этот проект распространяется под лицензией MIT.",

        "mck_subtitle": "Твой цифровой дневник для учебы.",
        "mck_lead": "Неофициальное приложение для студентов Międzynarodowe Centrum Kształcenia (MCK) при Краковском политехническом университете.",
        "mck_desc": "MójMCK дает быстрый доступ ко всему необходимому для учебы. Проверяйте оценки, посещаемость, управляйте расписанием и не пропускайте дедлайны благодаря заметкам.",
        "mck_f1_title": "Оценки и посещаемость:", "mck_f1_desc": "Смотрите предметы, считайте средневзвешенный балл и процент посещаемости.",
        "mck_f2_title": "Расписание:", "mck_f2_desc": "Выберите группу и направление. Добавляйте пары и следите за временем до конца занятия.",
        "mck_f3_title": "Заметки и дедлайны:", "mck_f3_desc": "Добавляйте задачи к предметам. Ставьте сроки и получайте пуш-уведомления.",
        "mck_f4_title": "Новости:", "mck_f4_desc": "Читайте новости университета и темы занятий в приложении.",
        "mck_f5_title": "Безопасность и скорость:", "mck_f5_desc": "Безопасный вход. Данные кэшируются для работы офлайн. Поддержка темной темы."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.querySelector('.lang-btn');
    const langMenu = document.querySelector('.lang-menu');
    const currentLangLabels = document.querySelectorAll('.current-lang-label');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
    }

    document.addEventListener('click', () => {
        if (langMenu && langMenu.classList.contains('show')) {
            langMenu.classList.remove('show');
        }
    });

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        
        currentLangLabels.forEach(label => {
            label.textContent = lang.toUpperCase();
        });

        langOptions.forEach(opt => {
            if (opt.getAttribute('data-lang') === lang) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    if (langOptions.length > 0) {
        langOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                setLanguage(lang);
            });
        });
    }

    const savedLang = localStorage.getItem('lang') || 'pl';
    setLanguage(savedLang);
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.img-wrapper img');
    const modal = document.getElementById('image-modal');
    
    if (!modal || images.length === 0) return;

    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');

    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.remove('loading');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                img.parentElement.classList.remove('loading');
            });
            img.addEventListener('error', () => {
                img.parentElement.classList.remove('loading');
            });
        }

        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { modalImg.src = ''; }, 300);
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});