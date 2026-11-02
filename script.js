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
        store_logo:"DanStudio", web_apps:"Aplikacje webowe",btn_open:"Otwórz",btn_open_app:"Otwórz aplikację",tab_apps:"Aplikacje",tab_about:"O mnie",shot_ph:"Zrzut ekranu",fitevo_short_desc:"Dziennik jedzenia i kalorii z czatem",fit_subtitle:"Dziennik żywieniowy, który sam liczy kalorie.",fit_privacy:"Polityka danych",fit_lead:"FITEVO to webowy dziennik jedzenia i kalorii, który działa jak zwykła aplikacja na telefonie.",fit_desc:"Napisz w czacie, co zjadłeś, a kalorie i makroskładniki zostaną policzone za Ciebie. Dane zostają na Twoim urządzeniu i na Twoim koncie Puter, a nie na moim serwerze.",fit_f1_title:"Czat:",fit_f1_desc:"opisz posiłek zwykłym zdaniem i dodaj go do dziennika jednym dotknięciem.",fit_f2_title:"Dzienna norma:",fit_f2_desc:"kalorie i makroskładniki liczone według Twoich parametrów i celu.",fit_f3_title:"Skaner kodów kreskowych:",fit_f3_desc:"wspólna baza produktów, do której każdy może dodać brakującą pozycję.",fit_f4_title:"Wykresy i prognoza:",fit_f4_desc:"waga, kalorie i postępy w czasie oraz prognoza dojścia do celu.",fit_f5_title:"Raport tygodniowy:",fit_f5_desc:"podsumowanie tygodnia na jednym ekranie i karta do udostępnienia, tworzona na urządzeniu.",fit_f6_title:"Higiena i osiągnięcia:",fit_f6_desc:"śledzenie nawyków, woda i odznaki za regularność.",fit_f7_title:"Plan diety i offline:",fit_f7_desc:"plan z własnych produktów; aplikacja działa także bez internetu.",fit_install_title:"Instalacja",fit_install_desc:"Na telefonie aplikację trzeba dodać na ekran główny (PWA). iPhone: w Safari dotknij „Udostępnij” → „Do ekranu początkowego”. Android: w Chrome wybierz „Zainstaluj aplikację”. Na komputerze wystarczy przeglądarka.",fit_req_title:"Wymagania",fit_req_desc:"Darmowe konto Puter i nowoczesna przeglądarka (Safari, Chrome, Edge, Firefox).",about_role:"Programista · DanStudio",about_lead:"DanStudio to moje prywatne centrum projektów: aplikacje webowe, desktopowe i na Androida, które sam projektuję i piszę.",about_p1:"Cześć! Nazywam się Daniil. Od dzieciństwa interesuję się technologiami komputerowymi. Programowaniem zainteresowałem się w wieku 11 lat, co doprowadziło mnie do nauki różnych języków i technologii webowych. Teraz aktywnie uczę się Kotlina i pracy w Android Studio.",about_p2:"Tworzę projekty internetowe: HTML, CSS i JavaScript dla interaktywności oraz PHP na backendzie. Znam też Python i C#, więc potrafię wybrać narzędzie do zadania.",about_p3:"Interesuje mnie tworzenie aplikacji internetowych i wsparcie techniczne. Chętnie poświęcam dużo czasu pracy i stale rozwijam swoje umiejętności.",about_p4:"Mam ponad 5 lat doświadczenia w kontaktach z klientami. Dzięki temu lepiej rozumiem potrzeby użytkowników i potrafię jasno się komunikować.",about_skills:"Technologie", discover:"Odkrywaj", desktop_apps:"Aplikacje Desktopowe",
        writerpro_desc:"Potężna aplikacja desktopowa dla pisarzy", btn_get:"Pobierz",
        android_apps:"Aplikacje Android", mojmck_short_desc:"Twój cyfrowy dziennik uniwersytecki",
        back:"Wróć", key_features:"Kluczowe funkcje", license_title:"Licencja",
        dev_info:"Zaprojektowane i stworzone przez DanStudio (Daniil Dudarchuk)", contact:"Kontakt:",
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
        mck_f5_title:"Bezpieczeństwo i Szybkość:", mck_f5_desc:"Bezpieczne logowanie. Dane lokalne. Tryb ciemny.",
        uniplan_short_desc:"Planer zajęć i klient USOS dla studentów UKEN",
        uni_subtitle:"Planer zajęć i klient USOS dla studentów UKEN w Krakowie.",
        uni_lead:"Nowoczesna, natywna aplikacja na Androida dla studentów Uniwersytetu Komisji Edukacji Narodowej w Krakowie.",
        uni_desc:"UniPlan łączy przejrzysty kalendarz zajęć ze zintegrowanym portalem USOSweb, inteligentnymi przypomnieniami i aktualnościami uczelni.",
        uni_f1_title:"Kalendarz zajęć:", uni_f1_desc:"Siatka miesięczna, widok dzienny i lista z postępem zajęć oraz karta „Teraz” z odliczaniem do końca zajęć lub początku kolejnych.",
        uni_f2_title:"Oceny USOS:", uni_f2_desc:"Zaloguj się przez CAS i przeglądaj przedmioty oraz oceny z podziałem na semestry.",
        uni_f3_title:"Aktualności USOS:", uni_f3_desc:"Ogłoszenia z formatowaniem, wyróżnionymi ostrzeżeniami „UWAGA!” i aktywnymi linkami. Zdjęcia otwierają się na pełnym ekranie z możliwością powiększania.",
        uni_f4_title:"Inteligentne przypomnienia:", uni_f4_desc:"Dokładne powiadomienia przed zajęciami, automatycznie wyciszane w trakcie wykładu.",
        uni_f5_title:"Strefy czasowe:", uni_f5_desc:"Automatyczne wykrywanie, szybki wybór miast i wyszukiwarka stref czasowych.",
        uni_f6_title:"Wygląd i języki:", uni_f6_desc:"Material Design 3 z kolorami dynamicznymi, tryb jasny i ciemny oraz pięć języków: polski, angielski, rosyjski, białoruski i ukraiński.",
        uni_req_title:"Wymagania", uni_req_desc:"Android 8.0 (API 26) lub nowszy.",
        /* download toast */
        dl_preparing:"Przygotowywanie…", dl_saving:"Zapisywanie pliku…", dl_complete:"Pobieranie zakończone!",
        dl_opening:"Otwieranie pobierania…", dl_left:"pozostało", dl_downloaded:"pobrano"
    },
    en: {
        store_logo:"DanStudio", web_apps:"Web Apps",btn_open:"Open",btn_open_app:"Open app",tab_apps:"Apps",tab_about:"About me",shot_ph:"Screenshot",fitevo_short_desc:"Food and calorie diary with a chat",fit_subtitle:"A food diary that counts calories for you.",fit_privacy:"Privacy policy",fit_lead:"FITEVO is a web food and calorie diary that works like a regular phone app.",fit_desc:"Tell the chat what you ate and calories and macros are counted for you. Your data stays on your device and in your own Puter account, not on my server.",fit_f1_title:"Chat:",fit_f1_desc:"describe a meal in plain words and add it to your diary with one tap.",fit_f2_title:"Daily target:",fit_f2_desc:"calories and macros calculated from your parameters and goal.",fit_f3_title:"Barcode scanner:",fit_f3_desc:"a shared product base where anyone can add a missing item.",fit_f4_title:"Charts and forecast:",fit_f4_desc:"weight, calories and progress over time, plus a forecast of reaching your goal.",fit_f5_title:"Weekly report:",fit_f5_desc:"your week on one screen and a share card generated on your device.",fit_f6_title:"Hygiene and achievements:",fit_f6_desc:"habit tracking, water and badges for consistency.",fit_f7_title:"Diet plan and offline:",fit_f7_desc:"a plan built from your own products; the app also works without internet.",fit_install_title:"Installation",fit_install_desc:"On a phone the app must be added to the home screen (PWA). iPhone: in Safari tap Share → “Add to Home Screen”. Android: in Chrome choose “Install app”. On a computer a browser is enough.",fit_req_title:"Requirements",fit_req_desc:"A free Puter account and a modern browser (Safari, Chrome, Edge, Firefox).",about_role:"Developer · DanStudio",about_lead:"DanStudio is my personal hub of projects: web, desktop and Android apps that I design and build myself.",about_p1:"Hi! My name is Daniil. I have loved computers since childhood. My interest in programming began at the age of 11 and led me to learn various languages and web technologies. Now I'm actively studying Kotlin and working with Android Studio.",about_p2:"I build web projects with HTML, CSS and JavaScript for interactivity, and PHP on the backend. I also know Python and C#, so I can pick the right tool for the job.",about_p3:"I'm interested in web application development and technical support. I'm happy to put a lot of time into my work and keep improving my skills.",about_p4:"I have over 5 years of experience communicating with clients, which helped me understand user needs and explain things clearly.",about_skills:"Technologies", discover:"Discover", desktop_apps:"Desktop Apps",
        writerpro_desc:"Powerful desktop application for writers", btn_get:"Get",
        android_apps:"Android Apps", mojmck_short_desc:"Your digital diary for university life",
        back:"Back", key_features:"Key Features", license_title:"License",
        dev_info:"Designed and developed by DanStudio (Daniil Dudarchuk)", contact:"Contact:",
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
        mck_f5_title:"Secure & Fast:", mck_f5_desc:"Secure login. Data cached locally. Dark mode supported.",
        uniplan_short_desc:"Class planner and USOS client for UKEN students",
        uni_subtitle:"Class planner and USOS client for UKEN Krakow students.",
        uni_lead:"A modern, native Android app for students of the University of the National Education Commission in Krakow (UKEN).",
        uni_desc:"UniPlan combines a clean class calendar with an integrated USOSweb portal, smart reminders and university news.",
        uni_f1_title:"Class Calendar:", uni_f1_desc:"Monthly grid, daily schedule and list view with progress tracking, plus a \"Now\" card with a live countdown to the end of your class or the start of the next one.",
        uni_f2_title:"USOS Grades:", uni_f2_desc:"Sign in through CAS and browse your subjects and grades organized by academic semester.",
        uni_f3_title:"USOS News:", uni_f3_desc:"Read announcements with rich formatting, highlighted \"UWAGA!\" warnings and clickable links. Open images fullscreen and zoom in with pinch or double-tap.",
        uni_f4_title:"Smart Reminders:", uni_f4_desc:"Exact notifications before class starts, automatically silenced during an active lecture.",
        uni_f5_title:"Time Zones:", uni_f5_desc:"Automatic detection, quick city presets and a searchable time zone picker.",
        uni_f6_title:"Design & Languages:", uni_f6_desc:"Material Design 3 with dynamic colors, light and dark themes, and five languages: English, Polish, Russian, Belarusian and Ukrainian.",
        uni_req_title:"Requirements", uni_req_desc:"Android 8.0 (API 26) or newer.",
        /* download toast */
        dl_preparing:"Preparing…", dl_saving:"Saving file…", dl_complete:"Download complete!",
        dl_opening:"Opening download…", dl_left:"left", dl_downloaded:"downloaded"
    },
    ru: {
        store_logo:"DanStudio", web_apps:"Веб-приложения",btn_open:"Открыть",btn_open_app:"Открыть приложение",tab_apps:"Приложения",tab_about:"Обо мне",shot_ph:"Скриншот",fitevo_short_desc:"Дневник питания и калорий с чатом",fit_subtitle:"Дневник питания, который сам считает калории.",fit_privacy:"Политика данных",fit_lead:"FITEVO — веб-дневник питания и калорий, который работает как обычное приложение на телефоне.",fit_desc:"Напишите в чате, что вы съели, и калории с БЖУ посчитаются сами. Ваши данные остаются на вашем устройстве и в вашем аккаунте Puter, а не на моём сервере.",fit_f1_title:"Чат:",fit_f1_desc:"опишите приём пищи обычными словами и добавьте его в дневник одним нажатием.",fit_f2_title:"Дневная норма:",fit_f2_desc:"калории и БЖУ считаются по вашим параметрам и цели.",fit_f3_title:"Сканер штрихкодов:",fit_f3_desc:"общая база продуктов, в которую любой может добавить недостающий.",fit_f4_title:"Графики и прогноз:",fit_f4_desc:"вес, калории и прогресс во времени, плюс прогноз достижения цели.",fit_f5_title:"Недельный отчёт:",fit_f5_desc:"итоги недели на одном экране и карточка «Поделиться», которая создаётся на устройстве.",fit_f6_title:"Гигиена и достижения:",fit_f6_desc:"трекер привычек, вода и награды за регулярность.",fit_f7_title:"План питания и офлайн:",fit_f7_desc:"план из ваших продуктов; приложение работает и без интернета.",fit_install_title:"Установка",fit_install_desc:"На телефоне приложение нужно добавить на главный экран (PWA). iPhone: в Safari нажмите «Поделиться» → «На экран «Домой»». Android: в Chrome выберите «Установить приложение». На компьютере достаточно браузера.",fit_req_title:"Требования",fit_req_desc:"Бесплатный аккаунт Puter и современный браузер (Safari, Chrome, Edge, Firefox).",about_role:"Разработчик · DanStudio",about_lead:"DanStudio — мои личные проекты: веб-, десктопные и Android-приложения, которые я сам придумываю и пишу.",about_p1:"Привет! Меня зовут Даниил. С детства я увлекаюсь компьютерными технологиями. Интерес к программированию начался в 11 лет и привёл меня к изучению разных языков и веб-технологий. Сейчас я активно изучаю Kotlin и работу в Android Studio.",about_p2:"Делаю веб-проекты: HTML, CSS и JavaScript для интерактивности и PHP для бэкенда. Также владею Python и C#, поэтому могу выбрать подходящий инструмент под задачу.",about_p3:"Интересуюсь разработкой веб-приложений и технической поддержкой. Готов вкладывать много времени в работу и постоянно совершенствовать навыки.",about_p4:"Имею более 5 лет опыта общения с клиентами. Он помог понимать потребности пользователей и ясно объяснять.",about_skills:"Технологии", discover:"Главная", desktop_apps:"Десктопные приложения",
        writerpro_desc:"Мощное приложение для писателей", btn_get:"Скачать",
        android_apps:"Android приложения", mojmck_short_desc:"Твой цифровой дневник для учебы",
        back:"Назад", key_features:"Ключевые особенности", license_title:"Лицензия",
        dev_info:"Спроектировано и разработано DanStudio (Даниил Дударчук)", contact:"Контакты:",
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
        mck_f5_title:"Безопасность и скорость:", mck_f5_desc:"Безопасный вход. Кэш офлайн. Тёмная тема.",
        uniplan_short_desc:"Планировщик пар и клиент USOS для студентов UKEN",
        uni_subtitle:"Планировщик расписания и клиент USOS для студентов UKEN в Кракове.",
        uni_lead:"Современное нативное Android-приложение для студентов Университета Комиссии национального образования в Кракове (UKEN).",
        uni_desc:"UniPlan объединяет удобный календарь расписания со встроенным порталом USOSweb, умными напоминаниями и новостями университета.",
        uni_f1_title:"Календарь расписания:", uni_f1_desc:"Сетка месяца, просмотр дня и список с прогрессом занятий, а также карточка «Сейчас» с обратным отсчётом до конца пары или начала следующей.",
        uni_f2_title:"Оценки USOS:", uni_f2_desc:"Входите через CAS и смотрите предметы и оценки по семестрам.",
        uni_f3_title:"Новости USOS:", uni_f3_desc:"Объявления с форматированием, выделенными предупреждениями «UWAGA!» и кликабельными ссылками. Изображения открываются на весь экран с приближением жестами и двойным тапом.",
        uni_f4_title:"Умные напоминания:", uni_f4_desc:"Точные уведомления перед началом пары, автоматически отключаются во время лекции.",
        uni_f5_title:"Часовые пояса:", uni_f5_desc:"Автоопределение, быстрый выбор городов и поиск по часовым поясам.",
        uni_f6_title:"Дизайн и языки:", uni_f6_desc:"Material Design 3 с динамическими цветами, светлая и тёмная темы, пять языков: русский, польский, английский, белорусский и украинский.",
        uni_req_title:"Требования", uni_req_desc:"Android 8.0 (API 26) или новее.",
        /* download toast */
        dl_preparing:"Подготовка…", dl_saving:"Сохранение файла…", dl_complete:"Загрузка завершена!",
        dl_opening:"Открываем загрузку…", dl_left:"осталось", dl_downloaded:"загружено"
    }
};

function currentLang() {
    return localStorage.getItem('lang') || 'pl';
}

// Translate a key using the current language (fallback: English, then key itself)
function tr(key) {
    var lang = currentLang();
    return (T[lang] && T[lang][key]) || (T.en && T.en[key]) || key;
}

/* =============================================
   DOM READY
   ============================================= */
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initPageTransitions();
    initGallery();
    initDownloadButtons();
    initOpenButtons();
    initTabs();
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

    applyLang(currentLang());
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
        function mark(ok) {
            wrap.classList.remove('loading');
            if (ok) img.classList.add('loaded'); else wrap.classList.add('empty');
        }
        if (img.complete) { mark(img.naturalWidth > 0); }
        else {
            img.addEventListener('load', function() { mark(true); });
            img.addEventListener('error', function() { mark(false); });
        }
        img.addEventListener('click', function() {
            if (wrap.classList.contains('empty')) return;
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

// ---- Formatting helpers ----
function fmtBytes(b) {
    if (b < 1024)        return b + ' B';
    if (b < 1048576)     return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(1) + ' MB';
}

function fmtSpeed(bps) {
    return fmtBytes(Math.round(bps)) + '/s';
}

function fmtTime(sec) {
    if (!isFinite(sec) || sec < 0) return '…';
    sec = Math.ceil(sec);
    if (sec < 60) return sec + ' s';
    var m = Math.floor(sec / 60), s = sec % 60;
    return m + ' min ' + s + ' s';
}

// Speed tracker with smoothing (exponential moving average), so numbers don't jump
function createSpeedTracker() {
    var lastT = Date.now(), lastB = 0, speed = 0;
    return function(received) {
        var now = Date.now();
        var dt = (now - lastT) / 1000;
        if (dt >= 0.4) {
            var inst = (received - lastB) / dt;
            speed = speed ? speed * 0.7 + inst * 0.3 : inst;
            lastT = now;
            lastB = received;
        }
        return speed;
    };
}

function buildStatus(received, total, speed) {
    if (!total) {
        return fmtBytes(received) + ' ' + tr('dl_downloaded') +
               (speed ? ' · ' + fmtSpeed(speed) : '') + '…';
    }
    var text = fmtBytes(received) + ' / ' + fmtBytes(total);
    if (speed > 0) {
        var left = (total - received) / speed;
        text += ' · ' + fmtSpeed(speed) + ' · ' + fmtTime(left) + ' ' + tr('dl_left');
    }
    return text;
}

// ---- Toast helpers ----
var toastTimer = null;

function toastShow(appName, iconSrc) {
    clearTimeout(toastTimer);
    var toast  = document.getElementById('dl-toast');
    var nameEl = document.getElementById('toast-name');
    var iconEl = document.getElementById('toast-icon-img');
    if (!toast) return;
    if (nameEl) nameEl.textContent = appName;
    if (iconEl) iconEl.innerHTML = iconSrc ? '<img src="' + iconSrc + '" alt="">' : '';
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

// ---- Ring / bar helpers ----
// Hero button ring: circumference = 2*PI*12 ≈ 75.4
var HERO_CIRC = 75.4;
// Get-btn ring: circumference = 2*PI*14 ≈ 87.96 — we use 88 (matches CSS)
var GET_CIRC  = 88;

function setHeroRing(btn, pct) {
    var fill = btn.querySelector('.dl-ring-fill');
    if (!fill) return;
    fill.style.strokeDashoffset = HERO_CIRC - (HERO_CIRC * pct / 100);
}

function setGetRing(btn, pct) {
    var fill = btn.querySelector('.ring-fill');
    if (!fill) return;
    fill.style.strokeDashoffset = GET_CIRC - (GET_CIRC * pct / 100);
}

function setHeroBar(btn, pct) {
    var fill = btn.querySelector('.dl-bar-fill');
    if (fill) fill.style.width = pct + '%';
}

function setHeroPct(btn, pct) {
    var el = btn.querySelector('.dl-btn-pct');
    if (el) el.textContent = pct + '%';
}

// ---- Trigger real file save (instant: the file is already in memory) ----
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
// Resolves with a Blob. onProgress(receivedBytes, totalBytes|null).
function streamDownload(url, onProgress, signal, mimeType) {
    return fetch(url, { signal: signal }).then(function(response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        if (!response.body || !response.body.getReader) throw new Error('Streaming not supported');

        var contentLength = response.headers.get('Content-Length');
        var total = contentLength ? parseInt(contentLength, 10) : null;
        var reader = response.body.getReader();
        var chunks = [];
        var received = 0;

        function pump() {
            return reader.read().then(function(result) {
                if (result.done) {
                    return new Blob(chunks, mimeType ? { type: mimeType } : undefined);
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

function guessMime(filename) {
    if (/\.apk$/i.test(filename)) return 'application/vnd.android.package-archive';
    if (/\.zip$/i.test(filename)) return 'application/zip';
    if (/\.exe$/i.test(filename)) return 'application/vnd.microsoft.portable-executable';
    return 'application/octet-stream';
}

// ---- Currently active download (so the toast "×" can cancel it) ----
var currentAbort = null;

// ---- Shared download runner used by both button types ----
// hooks: { start(), progress(pct), done(), abort() }
function startDownload(btn, hooks) {
    var url      = btn.dataset.url;
    var filename = btn.dataset.filename || 'download';
    var appName  = btn.dataset.appname  || 'App';
    var iconSrc  = btn.dataset.icon     || '';

    var ctrl = new AbortController();
    currentAbort = ctrl;
    var track = createSpeedTracker();

    hooks.start();
    toastShow(appName, iconSrc);
    toastUpdate(0, tr('dl_preparing'));

    streamDownload(url, function(received, total) {
        var pct = total
            ? Math.round(received / total * 100)
            : Math.min(95, Math.round(Math.log(received + 1) / Math.log(200000000) * 100));
        hooks.progress(pct);
        toastUpdate(pct, buildStatus(received, total, track(received)));
    }, ctrl.signal, guessMime(filename))

    .then(function(blob) {
        hooks.progress(100);
        toastUpdate(100, tr('dl_saving'));
        return new Promise(function(res) { setTimeout(res, 280); }).then(function() {
            triggerSave(blob, filename);          // file is already downloaded → saves instantly
            hooks.done();
            toastUpdate(100, tr('dl_complete'));
            toastHide(3200);
        });
    })

    .catch(function(err) {
        if (err && err.name === 'AbortError') {
            hooks.abort();
            toastHide(0);
            return;
        }
        // Fallback (e.g. CORS blocked): normal browser download
        console.warn('Stream failed, using fallback:', err && err.message);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.target = '_blank';
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        hooks.done();
        toastUpdate(100, tr('dl_opening'));
        toastHide(2500);
    })

    .then(function() {
        if (currentAbort === ctrl) currentAbort = null;
    });
}

// ---- Hero download button (detail pages) ----
function initHeroBtn(btn) {
    var phase = 'idle'; // idle | downloading | done

    btn.addEventListener('click', function() {
        if (phase !== 'idle') return;

        startDownload(btn, {
            start: function() {
                phase = 'downloading';
                btn.classList.add('is-downloading');
                setHeroRing(btn, 0);
                setHeroBar(btn, 0);
                setHeroPct(btn, 0);
            },
            progress: function(pct) {
                setHeroRing(btn, pct);
                setHeroBar(btn, pct);
                setHeroPct(btn, pct);
            },
            done: function() {
                phase = 'done';
                btn.classList.remove('is-downloading');
                btn.classList.add('is-done');
            },
            abort: function() {
                phase = 'idle';
                btn.classList.remove('is-downloading');
                setHeroRing(btn, 0);
                setHeroBar(btn, 0);
                setHeroPct(btn, 0);
            }
        });
    });
}

// ---- Small card GET button (index page) ----
function initGetBtn(btn) {
    var phase = 'idle';

    // Build the button's inner HTML for ring + icons
    var textEl = btn.querySelector('.btn-text');
    var textContent = textEl ? textEl.textContent : (btn.textContent.trim() || 'Get');
    btn.innerHTML =
        '<span class="btn-text">' + textContent + '</span>' +
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

    function resetLater(ms) {
        setTimeout(function() {
            phase = 'idle';
            btn.classList.remove('is-done');
            setGetRing(btn, 0);
            var label = btn.querySelector('.btn-text');
            if (label) label.textContent = tr('btn_get');
        }, ms);
    }

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Click on the button while downloading = cancel (pause icon is shown in CSS)
        if (phase === 'downloading') {
            if (currentAbort) currentAbort.abort();
            return;
        }
        if (phase !== 'idle') return;

        startDownload(btn, {
            start: function() {
                phase = 'downloading';
                btn.classList.add('is-downloading');
                setGetRing(btn, 0);
            },
            progress: function(pct) {
                setGetRing(btn, pct);
            },
            done: function() {
                phase = 'done';
                btn.classList.remove('is-downloading');
                btn.classList.add('is-done');
                resetLater(4000);
            },
            abort: function() {
                phase = 'idle';
                btn.classList.remove('is-downloading');
                setGetRing(btn, 0);
            }
        });
    });
}

function initDownloadButtons() {
    // Hero buttons (detail pages)
    document.querySelectorAll('.hero-dl-btn').forEach(initHeroBtn);

    // Card "Get" buttons (index page)
    document.querySelectorAll('.get-btn[data-url]').forEach(initGetBtn);

    // Toast close button: cancels an active download, otherwise just hides the toast
    var toastClose = document.getElementById('toast-close');
    if (toastClose) {
        toastClose.addEventListener('click', function() {
            if (currentAbort) currentAbort.abort();
            else toastHide(0);
        });
    }
}

/* =============================================
   OPEN BUTTONS (web apps) + TABS
   ============================================= */
function initOpenButtons() {
    document.querySelectorAll('.open-btn[data-open]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); e.stopPropagation();
            window.open(btn.getAttribute('data-open'), '_blank', 'noopener');
        });
    });
}

function initTabs() {
    var btns = document.querySelectorAll('.tab-btn[data-tab]');
    if (!btns.length) return;
    function show(name, push) {
        if (!document.getElementById('tab-' + name)) name = 'apps';
        btns.forEach(function(b) {
            var on = b.dataset.tab === name;
            b.classList.toggle('active', on);
            b.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        document.querySelectorAll('.tab-pane').forEach(function(p) { p.hidden = p.id !== 'tab-' + name; });
        try { if (push) history.replaceState(null, '', name === 'about' ? '#about' : location.pathname + location.search); } catch (e) {}
    }
    btns.forEach(function(b) { b.addEventListener('click', function() { show(b.dataset.tab, true); }); });
    window.addEventListener('hashchange', function() { show(location.hash === '#about' ? 'about' : 'apps', false); });
    show(location.hash === '#about' ? 'about' : 'apps', false);
}
