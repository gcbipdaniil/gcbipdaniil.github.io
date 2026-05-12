/* =============================================
   THEME  (also set inline in <head> to prevent flash)
   ============================================= */
;(function() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
        var cur = document.documentElement.getAttribute('data-theme');
        var next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
})();

/* =============================================
   TRANSLATIONS
   ============================================= */
var T = {
    pl: {
        store_logo:"MójSklep", discover:"Odkrywaj", desktop_apps:"Aplikacje Desktopowe",
        writerpro_desc:"Potężna aplikacja desktopowa dla pisarzy", btn_get:"Pobierz",
        android_apps:"Aplikacje Android", mojmck_short_desc:"Twój cyfrowy dziennik uniwersytecki",
        back:"Wróć", key_features:"Kluczowe funkcje", license_title:"Licencja",
        dev_info:"Zaprojektowane i stworzone przez Daniila Dudarchuka", contact:"Kontakt:",
        wp_subtitle:"Potężna aplikacja desktopowa dla pisarzy.",
        wp_lead:"Bez rejestracji, bez chmury. Po prostu potężne narzędzie działające na Twoim komputerze.",
        wp_desc:"WriterPro to kompletne środowisko do planowania, pisania i analizowania kreatywnych projektów.",
        feat_1_title:"Nawigator Projektu:", feat_1_desc:"Strukturyzuj projekt za pomocą rozdziałów i scen.",
        feat_2_title:"Postacie:", feat_2_desc:"Twórz szczegółowe profile postaci i buduj świat.",
        feat_3_title:"Edytor Tekstu:", feat_3_desc:"Pracuj w trybie bez rozpraszaczy.",
        feat_4_title:"Inspiracje:", feat_4_desc:"Wyszukuj obrazy i słuchaj muzyki.",
        feat_5_title:"Analityka:", feat_5_desc:"Śledź cele pisarskie i statystyki.",
        feat_6_title:"Eksport:", feat_6_desc:"Eksportuj do PDF, DOCX i EPUB.",
        license_desc:"Ten projekt jest udostępniany na licencji MIT.",
        mck_subtitle:"Twój cyfrowy dziennik uniwersytecki.",
        mck_lead:"Nieoficjalna aplikacja dla studentów MCK na Politechnice Krakowskiej.",
        mck_desc:"MójMCK daje natychmiastowy dostęp do wszystkiego, czego potrzebujesz na studiach.",
        mck_f1_title:"Oceny i Frekwencja:", mck_f1_desc:"Przeglądaj przedmioty, śledź średnią ważoną i kontroluj procentową obecność.",
        mck_f2_title:"Plan Zajęć:", mck_f2_desc:"Wybierz grupę i kierunek, aby stworzyć swój plan.",
        mck_f3_title:"Notatki i Terminy:", mck_f3_desc:"Dodawaj zadania do przedmiotów i ustawiaj terminy.",
        mck_f4_title:"Aktualności:", mck_f4_desc:"Bądź na bieżąco z najnowszymi informacjami z uczelni.",
        mck_f5_title:"Bezpieczeństwo i Szybkość:", mck_f5_desc:"Bezpieczne logowanie. Dane lokalne. Tryb ciemny."
    },
    en: {
        store_logo:"MyStore", discover:"Discover", desktop_apps:"Desktop Apps",
        writerpro_desc:"Powerful desktop application for writers", btn_get:"Get",
        android_apps:"Android Apps", mojmck_short_desc:"Your digital diary for university life",
        back:"Back", key_features:"Key Features", license_title:"License",
        dev_info:"Designed and developed by Daniil Dudarchuk", contact:"Contact:",
        wp_subtitle:"A powerful desktop application for writers.",
        wp_lead:"No registrations, no cloud. Just a powerful tool that runs on your computer.",
        wp_desc:"WriterPro is a complete environment for planning, writing, and analyzing your creative projects.",
        feat_1_title:"Project Navigator:", feat_1_desc:"Structure your project with chapters and scenes.",
        feat_2_title:"Characters:", feat_2_desc:"Create detailed profiles and build your world.",
        feat_3_title:"Text Editor:", feat_3_desc:"Work in a distraction-free mode.",
        feat_4_title:"Inspiration:", feat_4_desc:"Search images and listen to music.",
        feat_5_title:"Analytics:", feat_5_desc:"Track writing goals and stats.",
        feat_6_title:"Export:", feat_6_desc:"Export to PDF, DOCX, and EPUB.",
        license_desc:"This project is distributed under the MIT License.",
        mck_subtitle:"Your digital diary for university life.",
        mck_lead:"An unofficial companion app for students of MCK at Krakow University of Technology.",
        mck_desc:"MójMCK gives you instant access to everything you need for your studies.",
        mck_f1_title:"Grades & Attendance:", mck_f1_desc:"View subjects, track weighted averages, and monitor attendance.",
        mck_f2_title:"Custom Schedule:", mck_f2_desc:"Select your group and direction for a personalized timetable.",
        mck_f3_title:"Notes & Deadlines:", mck_f3_desc:"Add tasks to subjects. Set deadlines and receive push notifications.",
        mck_f4_title:"News:", mck_f4_desc:"Stay updated with university news and class topics.",
        mck_f5_title:"Secure & Fast:", mck_f5_desc:"Secure login. Data cached locally. Dark mode supported."
    },
    ru: {
        store_logo:"МойМагазин", discover:"Главная", desktop_apps:"Десктопные приложения",
        writerpro_desc:"Мощное приложение для писателей", btn_get:"Скачать",
        android_apps:"Android приложения", mojmck_short_desc:"Твой цифровой дневник для учебы",
        back:"Назад", key_features:"Ключевые особенности", license_title:"Лицензия",
        dev_info:"Спроектировано и разработано Даниилом Дударчуком", contact:"Контакты:",
        wp_subtitle:"Мощное десктопное приложение для писателей.",
        wp_lead:"Без регистраций и облаков. Мощный инструмент на вашем компьютере.",
        wp_desc:"WriterPro — среда для планирования, написания и анализа творческих проектов.",
        feat_1_title:"Навигатор:", feat_1_desc:"Структурируйте проект по главам и сценам.",
        feat_2_title:"Персонажи:", feat_2_desc:"Создавайте профили и базу данных вашего мира.",
        feat_3_title:"Редактор:", feat_3_desc:"Работайте в режиме без отвлечений.",
        feat_4_title:"Вдохновение:", feat_4_desc:"Ищите картинки и слушайте музыку.",
        feat_5_title:"Аналитика:", feat_5_desc:"Следите за прогрессом на графиках.",
        feat_6_title:"Экспорт:", feat_6_desc:"Экспортируйте в PDF, DOCX и EPUB.",
        license_desc:"Этот проект распространяется под лицензией MIT.",
        mck_subtitle:"Твой цифровой дневник для учебы.",
        mck_lead:"Неофициальное приложение для студентов MCK при Краковском политехническом университете.",
        mck_desc:"MójMCK даёт быстрый доступ ко всему необходимому для учебы.",
        mck_f1_title:"Оценки и посещаемость:", mck_f1_desc:"Смотрите предметы, считайте средневзвешенный балл.",
        mck_f2_title:"Расписание:", mck_f2_desc:"Выберите группу и направление.",
        mck_f3_title:"Заметки и дедлайны:", mck_f3_desc:"Добавляйте задачи и получайте уведомления.",
        mck_f4_title:"Новости:", mck_f4_desc:"Читайте новости университета в приложении.",
        mck_f5_title:"Безопасность и скорость:", mck_f5_desc:"Безопасный вход. Кэш офлайн. Тёмная тема."
    }
};

/* =============================================
   DOM READY
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initPageTransitions();
    initGallery();
    initDownloadButtons();
});

/* =============================================
   LANGUAGE
   ============================================= */
function initLanguage() {
    var langBtn  = document.querySelector('.lang-btn');
    var langMenu = document.querySelector('.lang-menu');
    var options  = document.querySelectorAll('.lang-option');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
        document.addEventListener('click', function() { langMenu.classList.remove('show'); });
    }

    function applyLang(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.querySelectorAll('.current-lang-label').forEach(function(el) { el.textContent = lang.toUpperCase(); });
        options.forEach(function(o) { o.classList.toggle('active', o.dataset.lang === lang); });
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (T[lang] && T[lang][key]) el.textContent = T[lang][key];
        });
        // also update .btn-text inside .get-btn
        document.querySelectorAll('.get-btn .btn-text').forEach(function(el) {
            if (T[lang] && T[lang]['btn_get']) el.textContent = T[lang]['btn_get'];
        });
    }

    options.forEach(function(o) {
        o.addEventListener('click', function() { applyLang(o.dataset.lang); });
    });

    applyLang(localStorage.getItem('lang') || 'pl');
}

/* =============================================
   PAGE TRANSITIONS
   ============================================= */
function initPageTransitions() {
    // Inject veil element
    var veil = document.getElementById('page-veil');
    if (!veil) {
        veil = document.createElement('div');
        veil.id = 'page-veil';
        document.body.appendChild(veil);
    }

    document.addEventListener('click', function(e) {
        var a = e.target.closest('a[href]');
        if (!a) return;
        var href = a.getAttribute('href');
        // Only handle same-origin relative links (not #, mailto, http, target=_blank)
        if (!href || href.startsWith('http') || href.startsWith('mailto')
            || href.startsWith('#') || href.startsWith('javascript')
            || a.target === '_blank') return;

        e.preventDefault();
        var dest = href;

        // Fade out
        veil.classList.add('visible');
        setTimeout(function() { window.location.href = dest; }, 220);
    });
}

/* =============================================
   GALLERY (lazy load + modal)
   ============================================= */
function initGallery() {
    var modal    = document.getElementById('image-modal');
    if (!modal) return;
    var modalImg = document.getElementById('modal-img');
    var closeBtn = document.querySelector('.close-modal');

    document.querySelectorAll('.img-wrapper img').forEach(function(img) {
        var wrap = img.parentElement;
        function onLoad() { img.classList.add('loaded'); wrap.classList.remove('loading'); }
        if (img.complete) { onLoad(); }
        else {
            img.addEventListener('load', onLoad);
            img.addEventListener('error', function() { wrap.classList.remove('loading'); });
        }
        img.addEventListener('click', function() {
            modalImg.src = img.src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(function() { modalImg.src = ''; }, 300);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

/* =============================================
   DOWNLOAD SYSTEM
   ============================================= */

// ---- Toast helpers ----
var toastTimer = null;

function toastShow(appName, iconSrc) {
    clearTimeout(toastTimer);
    var toast = document.getElementById('dl-toast');
    var nameEl = document.getElementById('toast-name');
    var iconEl = document.getElementById('toast-icon-img');
    if (!toast) return;
    if (nameEl) nameEl.textContent = appName;
    if (iconEl) iconEl.innerHTML = iconSrc ? '<img src="'+iconSrc+'" alt="">' : '';
    toast.classList.add('show');
}

function toastUpdate(pct, statusText) {
    var bar    = document.getElementById('toast-bar');
    var status = document.getElementById('toast-status');
    if (bar)    bar.style.width = pct + '%';
    if (status) status.textContent = statusText;
}

function toastHide(delay) {
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function() {
        var toast = document.getElementById('dl-toast');
        if (toast) toast.classList.remove('show');
    }, delay || 0);
}

function fmtBytes(b) {
    if (b < 1024)        return b + ' B';
    if (b < 1048576)     return (b/1024).toFixed(1) + ' KB';
    return (b/1048576).toFixed(1) + ' MB';
}

// ---- Ring progress helpers ----
// For hero button ring: circumference = 2*PI*12 ≈ 75.4
var HERO_CIRC = 75.4;
// For get-btn ring: circumference = 2*PI*14 ≈ 87.96 — we set 88 in CSS
var GET_CIRC  = 88;

function setHeroRing(btn, pct) {
    var fill = btn.querySelector('.dl-ring-fill');
    if (!fill) return;
    var offset = HERO_CIRC - (HERO_CIRC * pct / 100);
    fill.style.strokeDashoffset = offset;
}

function setGetRing(btn, pct) {
    var fill = btn.querySelector('.ring-fill');
    if (!fill) return;
    var offset = GET_CIRC - (GET_CIRC * pct / 100);
    fill.style.strokeDashoffset = offset;
}

function setHeroBar(btn, pct) {
    var fill = btn.querySelector('.dl-bar-fill');
    if (fill) fill.style.width = pct + '%';
}

function setHeroPct(btn, pct) {
    var el = btn.querySelector('.dl-btn-pct');
    if (el) el.textContent = pct + '%';
}

// ---- Trigger real file save ----
function triggerSave(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(url); }, 30000);
}

// ---- Core streaming download ----
// Returns a Promise that resolves when done.
// Calls onProgress(receivedBytes, totalBytes|null) during download.
function streamDownload(url, onProgress, signal) {
    return fetch(url, { signal: signal }).then(function(response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        var contentLength = response.headers.get('Content-Length');
        var total = contentLength ? parseInt(contentLength, 10) : null;
        var reader = response.body.getReader();
        var chunks = [];
        var received = 0;

        function pump() {
            return reader.read().then(function(result) {
                if (result.done) {
                    return new Blob(chunks);
                }
                chunks.push(result.value);
                received += result.value.length;
                onProgress(received, total);
                return pump();
            });
        }
        return pump();
    });
}

// ---- Hero download button ----
function initHeroBtn(btn) {
    var phase = 'idle'; // idle | downloading | done
    var abortCtrl = null;

    btn.addEventListener('click', function() {
        if (phase !== 'idle') return;

        var url      = btn.dataset.url;
        var filename = btn.dataset.filename || 'download';
        var appName  = btn.dataset.appname  || 'App';
        var iconSrc  = btn.dataset.icon     || '';

        phase = 'downloading';
        btn.classList.add('is-downloading');
        setHeroRing(btn, 0);
        setHeroBar(btn, 0);
        setHeroPct(btn, 0);

        toastShow(appName, iconSrc);
        toastUpdate(0, 'Preparing…');

        abortCtrl = new AbortController();

        streamDownload(url, function(received, total) {
            var pct = total ? Math.round(received / total * 100) : Math.min(95, Math.round(Math.log(received+1)/Math.log(200000000)*100));
            setHeroRing(btn, pct);
            setHeroBar(btn, pct);
            setHeroPct(btn, pct);
            var statusText = total
                ? fmtBytes(received) + ' of ' + fmtBytes(total)
                : fmtBytes(received) + ' downloaded…';
            toastUpdate(pct, statusText);
        }, abortCtrl.signal).then(function(blob) {
            // 100%
            setHeroRing(btn, 100);
            setHeroBar(btn, 100);
            setHeroPct(btn, 100);
            toastUpdate(100, 'Saving file…');

            return new Promise(function(res) { setTimeout(res, 280); }).then(function() {
                triggerSave(blob, filename);
                phase = 'done';
                btn.classList.remove('is-downloading');
                btn.classList.add('is-done');
                toastUpdate(100, 'Download complete!');
                toastHide(3200);
            });
        }).catch(function(err) {
            if (err.name === 'AbortError') {
                phase = 'idle';
                btn.classList.remove('is-downloading');
                toastHide(0);
                return;
            }
            // Fallback: direct browser download
            console.warn('Stream failed, using fallback:', err.message);
            var a = document.createElement('a');
            a.href = url; a.download = filename; a.target = '_blank';
            document.body.appendChild(a); a.click(); document.body.removeChild(a);

            phase = 'done';
            btn.classList.remove('is-downloading');
            btn.classList.add('is-done');
            toastUpdate(100, 'Opening download…');
            toastHide(2500);
        });
    });
}

// ---- Small card GET button ----
function initGetBtn(btn) {
    var phase = 'idle';
    var abortCtrl = null;

    // Build the button's inner HTML for ring + icons
    var textContent = btn.querySelector('.btn-text') ? btn.querySelector('.btn-text').textContent : (btn.textContent.trim() || 'Get');
    btn.innerHTML =
        '<span class="btn-text">'+textContent+'</span>' +
        '<svg class="get-ring" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" overflow="visible">' +
          '<circle class="ring-track" cx="19" cy="19" r="14"/>' +
          '<circle class="ring-fill"  cx="19" cy="19" r="14"/>' +
        '</svg>' +
        '<span class="get-pause">' +
          '<svg viewBox="0 0 24 24" width="11" height="11" fill="none">' +
            '<rect x="5" y="4" width="4" height="16" rx="1" fill="currentColor"/>' +
            '<rect x="15" y="4" width="4" height="16" rx="1" fill="currentColor"/>' +
          '</svg>' +
        '</span>' +
        '<span class="get-check">' +
          '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>' +
        '</span>';

    btn.addEventListener('click', function(e) {
        e.preventDefault(); e.stopPropagation();
        if (phase !== 'idle') return;

        var url      = btn.dataset.url;
        var filename = btn.dataset.filename || 'download';
        var appName  = btn.dataset.appname  || 'App';
        var iconSrc  = btn.dataset.icon     || '';

        phase = 'downloading';
        btn.classList.add('is-downloading');
        setGetRing(btn, 0);

        toastShow(appName, iconSrc);
        toastUpdate(0, 'Preparing…');

        abortCtrl = new AbortController();

        streamDownload(url, function(received, total) {
            var pct = total ? Math.round(received / total * 100) : Math.min(95, Math.round(Math.log(received+1)/Math.log(200000000)*100));
            setGetRing(btn, pct);
            toastUpdate(pct, total ? fmtBytes(received)+' / '+fmtBytes(total) : fmtBytes(received)+'…');
        }, abortCtrl.signal).then(function(blob) {
            setGetRing(btn, 100);
            toastUpdate(100, 'Saving…');
            return new Promise(function(res) { setTimeout(res, 260); }).then(function() {
                triggerSave(blob, filename);
                phase = 'done';
                btn.classList.remove('is-downloading');
                btn.classList.add('is-done');
                toastUpdate(100, 'Done!');
                toastHide(2800);
                // reset after 4s
                setTimeout(function() {
                    phase = 'idle';
                    btn.classList.remove('is-done');
                    setGetRing(btn, 0);
                    var lang = localStorage.getItem('lang') || 'pl';
                    var label = (T[lang] && T[lang]['btn_get']) || 'Get';
                    btn.querySelector('.btn-text').textContent = label;
                }, 4000);
            });
        }).catch(function(err) {
            if (err.name === 'AbortError') {
                phase = 'idle';
                btn.classList.remove('is-downloading');
                toastHide(0);
                return;
            }
            var a = document.createElement('a');
            a.href = url; a.download = filename; a.target = '_blank';
            document.body.appendChild(a); a.click(); document.body.removeChild(a);
            phase = 'done';
            btn.classList.remove('is-downloading');
            btn.classList.add('is-done');
            toastUpdate(100, 'Opening…');
            toastHide(2000);
            setTimeout(function() {
                phase = 'idle';
                btn.classList.remove('is-done');
                setGetRing(btn, 0);
            }, 3000);
        });
    });
}

function initDownloadButtons() {
    // Hero buttons (detail pages)
    document.querySelectorAll('.hero-dl-btn').forEach(function(btn) {
        initHeroBtn(btn);
    });

    // Card "Get" buttons (index page)
    document.querySelectorAll('.get-btn[data-url]').forEach(function(btn) {
        initGetBtn(btn);
    });

    // Toast close button
    var toastClose = document.getElementById('toast-close');
    if (toastClose) {
        toastClose.addEventListener('click', function() { toastHide(0); });
    }
}
