/* ============================================
   THEME
   ============================================ */
const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function getPreferredTheme() {
    return localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

setTheme(getPreferredTheme());

themeToggleBtn?.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    setTheme(cur === 'dark' ? 'light' : 'dark');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light');
});

/* ============================================
   PAGE TRANSITION
   ============================================ */
function setupPageTransitions() {
    // Inject overlay if missing
    if (!document.getElementById('page-transition-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'page-transition-overlay';
        document.body.appendChild(overlay);
    }

    // Intercept internal links
    document.addEventListener('click', e => {
        const anchor = e.target.closest('a[href]');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('mailto') ||
            href.startsWith('#') || href.startsWith('javascript') ||
            anchor.hasAttribute('target')) return;

        e.preventDefault();
        navigateTo(href);
    });
}

function navigateTo(href) {
    // Animate main content out
    const main = document.querySelector('main');
    if (main) {
        main.style.animation = 'pageExit 0.28s cubic-bezier(0.4,0,1,1) forwards';
    }

    const overlay = document.getElementById('page-transition-overlay');
    if (overlay) {
        setTimeout(() => {
            overlay.classList.add('active');
        }, 180);
    }

    setTimeout(() => {
        window.location.href = href;
    }, 280);
}

// On load: animate in
window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main) {
        main.classList.add('page-enter');
        main.addEventListener('animationend', () => main.classList.remove('page-enter'), { once: true });
    }
    setupPageTransitions();
});

/* ============================================
   TRANSLATIONS
   ============================================ */
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
        "mck_lead": "Nieoficjalna aplikacja dla studentów MCK na Politechnice Krakowskiej.",
        "mck_desc": "MójMCK daje natychmiastowy dostęp do wszystkiego, czego potrzebujesz na studiach.",
        "mck_f1_title": "Oceny i Frekwencja:", "mck_f1_desc": "Przeglądaj przedmioty, śledź średnią ważoną i kontroluj procentową obecność.",
        "mck_f2_title": "Plan Zajęć:", "mck_f2_desc": "Wybierz grupę i kierunek, aby stworzyć swój plan.",
        "mck_f3_title": "Notatki i Terminy:", "mck_f3_desc": "Dodawaj zadania do przedmiotów i ustawiaj terminy.",
        "mck_f4_title": "Aktualności:", "mck_f4_desc": "Bądź na bieżąco z najnowszymi informacjami z uczelni.",
        "mck_f5_title": "Bezpieczeństwo i Szybkość:", "mck_f5_desc": "Bezpieczne logowanie. Dane lokalne. Tryb ciemny."
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
        "mck_lead": "An unofficial companion app for students of MCK at Krakow University of Technology.",
        "mck_desc": "MójMCK gives you instant access to everything you need for your studies.",
        "mck_f1_title": "Grades & Attendance:", "mck_f1_desc": "View subjects, track weighted averages, and monitor attendance percentages.",
        "mck_f2_title": "Custom Schedule:", "mck_f2_desc": "Select your group and direction for a personalized timetable.",
        "mck_f3_title": "Notes & Deadlines:", "mck_f3_desc": "Add tasks to subjects. Set deadlines and receive push notifications.",
        "mck_f4_title": "News:", "mck_f4_desc": "Stay updated with university news and class topics.",
        "mck_f5_title": "Secure & Fast:", "mck_f5_desc": "Secure login. Data cached locally. Dark mode supported."
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
        "wp_desc": "WriterPro — среда для планирования, написания и анализа творческих проектов.",
        "feat_1_title": "Навигатор:", "feat_1_desc": "Структурируйте проект по главам и сценам.",
        "feat_2_title": "Персонажи:", "feat_2_desc": "Создавайте профили и базу данных вашего мира.",
        "feat_3_title": "Редактор:", "feat_3_desc": "Работайте в режиме без отвлечений.",
        "feat_4_title": "Вдохновение:", "feat_4_desc": "Ищите картинки и слушайте музыку.",
        "feat_5_title": "Аналитика:", "feat_5_desc": "Следите за прогрессом на графиках.",
        "feat_6_title": "Экспорт:", "feat_6_desc": "Экспортируйте в PDF, DOCX и EPUB.",
        "license_desc": "Этот проект распространяется под лицензией MIT.",
        "mck_subtitle": "Твой цифровой дневник для учебы.",
        "mck_lead": "Неофициальное приложение для студентов MCK при Краковском политехническом университете.",
        "mck_desc": "MójMCK даёт быстрый доступ ко всему необходимому для учебы.",
        "mck_f1_title": "Оценки и посещаемость:", "mck_f1_desc": "Смотрите предметы, считайте средневзвешенный балл.",
        "mck_f2_title": "Расписание:", "mck_f2_desc": "Выберите группу и направление.",
        "mck_f3_title": "Заметки и дедлайны:", "mck_f3_desc": "Добавляйте задачи и получайте уведомления.",
        "mck_f4_title": "Новости:", "mck_f4_desc": "Читайте новости университета в приложении.",
        "mck_f5_title": "Безопасность и скорость:", "mck_f5_desc": "Безопасный вход. Кэш офлайн. Тёмная тема."
    }
};

/* ============================================
   LANGUAGE
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.querySelector('.lang-btn');
    const langMenu = document.querySelector('.lang-menu');
    const langOptions = document.querySelectorAll('.lang-option');

    langBtn?.addEventListener('click', e => {
        e.stopPropagation();
        langMenu?.classList.toggle('show');
    });

    document.addEventListener('click', () => langMenu?.classList.remove('show'));

    function setLanguage(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('.current-lang-label').forEach(l => l.textContent = lang.toUpperCase());
        langOptions.forEach(opt => opt.classList.toggle('active', opt.dataset.lang === lang));
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang]?.[key]) el.textContent = translations[lang][key];
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener('click', () => setLanguage(opt.dataset.lang));
    });

    setLanguage(localStorage.getItem('lang') || 'pl');
});

/* ============================================
   IMAGE LAZY LOAD + MODAL
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-wrapper img');
    const modal = document.getElementById('image-modal');
    if (!modal || !images.length) return;

    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-modal');

    images.forEach(img => {
        const wrapper = img.parentElement;
        const onLoad = () => { img.classList.add('loaded'); wrapper.classList.remove('loading'); };
        if (img.complete) onLoad();
        else { img.addEventListener('load', onLoad); img.addEventListener('error', () => wrapper.classList.remove('loading')); }

        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modalImg.src = '', 300);
    };

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });
});

/* ============================================
   DOWNLOAD SYSTEM — App Store + MEGA style
   ============================================ */

/*
  State machine per button:
  idle → loading → downloading → done

  "loading" = server-side fetch simulation (like MEGA preparing the file)
  "downloading" = progress bar filling (like MEGA downloading to browser)
  "done" = file saved to disk
*/

class DownloadManager {
    constructor() {
        this.downloads = new Map(); // key = download url
        this.toast = null;
        this.toastTimeout = null;
        this._buildToast();
    }

    _buildToast() {
        this.toast = document.createElement('div');
        this.toast.id = 'download-toast';
        this.toast.innerHTML = `
            <div class="toast-icon" id="toast-icon"></div>
            <div class="toast-body">
                <div class="toast-title" id="toast-title">Preparing download…</div>
                <div class="toast-progress-track">
                    <div class="toast-progress-fill" id="toast-fill"></div>
                </div>
                <div class="toast-status" id="toast-status">Connecting…</div>
            </div>
            <button class="toast-cancel" id="toast-cancel" title="Cancel">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        `;
        document.body.appendChild(this.toast);

        document.getElementById('toast-cancel')?.addEventListener('click', () => {
            this._hideToast();
        });
    }

    _showToast(appName, iconSrc) {
        clearTimeout(this.toastTimeout);
        const icon = document.getElementById('toast-icon');
        if (icon && iconSrc) icon.innerHTML = `<img src="${iconSrc}" alt="">`;
        const title = document.getElementById('toast-title');
        if (title) title.textContent = appName;
        this.toast.classList.add('visible');
    }

    _hideToast(delay = 0) {
        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            this.toast.classList.remove('visible');
        }, delay);
    }

    _updateToast(percent, statusText) {
        const fill = document.getElementById('toast-fill');
        const status = document.getElementById('toast-status');
        if (fill) fill.style.width = percent + '%';
        if (status) status.textContent = statusText;
    }

    // Attach to a hero download button
    attachHeroButton(btn, { url, filename, appName, iconSrc }) {
        const state = { phase: 'idle', aborted: false };
        this.downloads.set(btn, state);

        btn.addEventListener('click', async () => {
            if (state.phase !== 'idle') return;
            state.phase = 'loading';
            state.aborted = false;

            this._runHeroDownload(btn, state, { url, filename, appName, iconSrc });
        });
    }

    // Attach to a small card "Get" button
    attachGetButton(btn, { url, filename, appName, iconSrc }) {
        const state = { phase: 'idle', aborted: false };
        this.downloads.set(btn, state);

        btn.addEventListener('click', async e => {
            e.preventDefault(); e.stopPropagation();
            if (state.phase !== 'idle') return;
            state.phase = 'loading';
            state.aborted = false;

            this._runGetDownload(btn, state, { url, filename, appName, iconSrc });
        });
    }

    async _runHeroDownload(btn, state, { url, filename, appName, iconSrc }) {
        // ---- Phase 1: "Preparing" (server-side / MEGA fetch)
        this._setHeroState(btn, 'downloading', 0);
        this._showToast(appName, iconSrc);
        this._updateToast(0, 'Preparing file…');

        // ---- Phase 2: Fetch with real progress (if supported) or simulated
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network error');

            const contentLength = response.headers.get('Content-Length');
            const total = contentLength ? parseInt(contentLength, 10) : null;

            const reader = response.body.getReader();
            const chunks = [];
            let received = 0;

            while (true) {
                if (state.aborted) { reader.cancel(); return; }
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                received += value.length;

                const pct = total ? Math.round((received / total) * 100) : null;
                const displayPct = pct ?? this._simulatePct(received);

                this._setHeroState(btn, 'downloading', displayPct);
                this._updateToast(displayPct, pct
                    ? `${this._formatBytes(received)} of ${this._formatBytes(total)}`
                    : `${this._formatBytes(received)} downloaded…`
                );
            }

            if (state.aborted) return;

            // ---- Phase 3: Assemble & trigger download
            this._setHeroState(btn, 'downloading', 100);
            this._updateToast(100, 'Saving file…');
            await new Promise(r => setTimeout(r, 320));

            const blob = new Blob(chunks);
            this._triggerSave(blob, filename);

            // ---- Phase 4: Done
            state.phase = 'done';
            this._setHeroState(btn, 'done');
            this._updateToast(100, 'Download complete!');
            this._hideToast(3000);

        } catch (err) {
            console.warn('Download error, falling back:', err);
            // Fallback: direct link
            this._directDownload(url, filename);
            state.phase = 'done';
            this._setHeroState(btn, 'done');
            this._updateToast(100, 'Opening download…');
            this._hideToast(2500);
        }
    }

    async _runGetDownload(btn, state, { url, filename, appName, iconSrc }) {
        // For card buttons: show circular progress
        this._setGetState(btn, 'loading', 0);
        this._showToast(appName, iconSrc);
        this._updateToast(0, 'Preparing…');

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network error');

            const contentLength = response.headers.get('Content-Length');
            const total = contentLength ? parseInt(contentLength, 10) : null;
            const reader = response.body.getReader();
            const chunks = [];
            let received = 0;

            while (true) {
                if (state.aborted) { reader.cancel(); return; }
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
                received += value.length;

                const pct = total ? Math.round((received / total) * 100) : this._simulatePct(received);
                this._setGetState(btn, 'downloading', pct);
                this._updateToast(pct, total
                    ? `${this._formatBytes(received)} / ${this._formatBytes(total)}`
                    : `${this._formatBytes(received)}…`
                );
            }

            if (state.aborted) return;

            this._setGetState(btn, 'downloading', 100);
            this._updateToast(100, 'Saving…');
            await new Promise(r => setTimeout(r, 300));

            const blob = new Blob(chunks);
            this._triggerSave(blob, filename);

            state.phase = 'done';
            this._setGetState(btn, 'done');
            this._updateToast(100, 'Done!');
            this._hideToast(2500);

            // Reset get button after 4s
            setTimeout(() => {
                state.phase = 'idle';
                this._setGetState(btn, 'idle');
            }, 4000);

        } catch (err) {
            this._directDownload(url, filename);
            state.phase = 'done';
            this._setGetState(btn, 'done');
            this._updateToast(100, 'Opening…');
            this._hideToast(2000);

            setTimeout(() => {
                state.phase = 'idle';
                this._setGetState(btn, 'idle');
            }, 3000);
        }
    }

    /* --- Hero button states --- */
    _setHeroState(btn, phase, pct = 0) {
        btn.className = btn.className.replace(/state-\w+/g, '').trim();

        const fill = btn.querySelector('.btn-progress-fill');
        const textEl = btn.querySelector('.btn-label');

        if (phase === 'downloading') {
            btn.classList.add('state-downloading');
            if (fill) fill.style.width = pct + '%';
            if (textEl) textEl.textContent = pct < 100 ? `${pct}%` : 'Saving…';
        } else if (phase === 'done') {
            btn.classList.add('state-done');
            if (fill) fill.style.width = '100%';
            if (textEl) {
                textEl.innerHTML = `
                    <svg class="icon-done" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Open
                `;
            }
        }
    }

    /* --- Get button (circular) states --- */
    _setGetState(btn, phase, pct = 0) {
        if (phase === 'idle') {
            // Restore original "Get" button markup
            const lang = localStorage.getItem('lang') || 'pl';
            const label = translations[lang]?.btn_get || 'Get';
            btn.outerHTML; // we'll just replace innerHTML
            btn.className = 'get-btn';
            btn.innerHTML = label;
            return;
        }

        if (phase === 'loading' || phase === 'downloading') {
            // Build circular progress button (replace inline)
            const r = 14;
            const circ = 2 * Math.PI * r;
            const dashOffset = circ - (circ * pct / 100);

            btn.className = 'dl-progress-btn';
            btn.innerHTML = `
                <svg class="progress-ring" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                    <circle class="ring-track" cx="19" cy="19" r="${r}"/>
                    <circle class="ring-fill" cx="19" cy="19" r="${r}"
                        stroke-dasharray="${circ.toFixed(2)}"
                        stroke-dashoffset="${dashOffset.toFixed(2)}"/>
                </svg>
                <svg class="icon-pause" viewBox="0 0 24 24" width="12" height="12" fill="none">
                    <rect x="6" y="4" width="4" height="16" rx="1"/>
                    <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
            `;
        } else if (phase === 'done') {
            btn.className = 'dl-progress-btn';
            btn.innerHTML = `
                <svg class="progress-ring" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                    <circle class="ring-track" cx="19" cy="19" r="14"/>
                    <circle class="ring-fill" cx="19" cy="19" r="14"
                        stroke-dasharray="87.96"
                        stroke-dashoffset="0"/>
                </svg>
                <svg class="icon-done" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <polyline points="20 6 9 17 4 12"/>
                </svg>
            `;
        }
    }

    _triggerSave(blob, filename) {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    }

    _directDownload(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    _simulatePct(bytes) {
        // Estimate progress without Content-Length
        return Math.min(99, Math.round(Math.log(bytes + 1) / Math.log(100_000_000) * 100));
    }

    _formatBytes(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }
}

/* ============================================
   INIT DOWNLOAD BUTTONS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    const dm = new DownloadManager();

    // Hero download buttons (writerpro.html)
    document.querySelectorAll('.download-btn[data-url]').forEach(btn => {
        const originalContent = btn.innerHTML;
        // Preserve label span
        btn.innerHTML = `
            <span class="btn-label" style="display:flex;align-items:center;gap:8px;">${originalContent}</span>
            <div class="btn-progress-track"><div class="btn-progress-fill"></div></div>
        `;

        dm.attachHeroButton(btn, {
            url: btn.dataset.url,
            filename: btn.dataset.filename || 'download',
            appName: btn.dataset.appname || document.title,
            iconSrc: btn.dataset.icon || ''
        });
    });

    // Card "Get" buttons
    document.querySelectorAll('.get-btn[data-url]').forEach(btn => {
        dm.attachGetButton(btn, {
            url: btn.dataset.url,
            filename: btn.dataset.filename || 'download',
            appName: btn.dataset.appname || 'App',
            iconSrc: btn.dataset.icon || ''
        });
    });
});