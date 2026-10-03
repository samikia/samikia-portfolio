const DETAILS_DE = {
  'x-panto': {
    sub: 'Frontend Developer', when: 'JUL 2024 → HEUTE · DEUTSCHLAND · REMOTE',
    intro: 'Frontend Developer an einer Monitoring-Plattform für Bahninfrastruktur – in einem agilen Remote-Team, mit Verantwortung für die Kartenschicht und einen großen Teil der Monitoring-Dashboards.',
    points: [
      'Gesamte Google-Maps-Integrationsschicht verantwortet (Point Detail, Calendar & Trips, Catenary Points): eigene Marker, Geocoding, Marker-Rotation, Street View und Satellitenansicht in 50+ gemergten PRs.',
      'Heatmap-Feature von Grund auf entworfen und das Rendering anschließend von Google-Maps-Overlays auf deck.gl (WebGL) mit Lazy-Loading umgestellt – bessere Performance bei großen Datensätzen und kleineres Bundle.',
      'Vollständige Migration von React Router v5 auf v6 über 30+ Dateien geleitet, ohne Regressionen bei Auth-Redirects oder Route Guards.',
      'Wiederverwendbares Hintergrund-Polling mit Fortschrittsanzeige und Abbruch gebaut sowie viewportbasierte Virtualisierung für Marker und Polylinien ergänzt – inzwischen auf 5 Monitoring-Seiten im Einsatz.',
      '9+ End-to-End-Monitoring-Dashboards von Grund auf erstellt (CPU, RAM, Disk, Device Uptime, GPS Health, Video Profiling, Server Monitoring, Heatmap, Event Score) – inklusive UI, Filter, Charts und REST-API-Anbindung.',
      'Vereinheitlichung der Chart-Komponenten geleitet: ca. 2.100 Zeilen duplizierten Code in 19 Dateien entfernt, ohne Funktionsverlust.',
      'User & Asset Intelligence Dashboard mit Besuchserfassung, PDF/Excel-Export und Sentry Session Replay gebaut.',
      '300+ Beiträge (PRs und Commits) zu Features, Performance-Optimierung und Produktionsstabilität geliefert.'
    ]
  },
  'x-lo-web': {
    sub: 'Frontend Web Developer', when: 'NOV 2022 → JUN 2024',
    intro: 'Mehrsprachige Unternehmenswebsites für Agenturkunden mit Next.js und TypeScript umgesetzt – in zwei großen Projekten.',
    points: [
      'Sahar Food: 15+ Seiten und Features eigenständig umgesetzt (Über uns, CSR, Magazin, News, Karriere, Produkt & Kategorie) in Next.js 13 und TypeScript – mit vollständiger Unterstützung für Englisch, Persisch und Russisch und komplettem RTL-Layout.',
      'Sahar Food: Wiederverwendbare UI-Komponenten gebaut (Hero-Slider mit Swiper und GSAP, Navigations-Preloader, Akkordeons, gemeinsames SEO-Modul) und Persischen (Jalali) Kalender integriert – 33 gemergte PRs über 13 Monate.',
      'Zargroup: 7+ CMS-basierte Seiten mit Next.js, TypeScript, REST/GraphQL und einem Strapi-Backend entwickelt, mit vollständiger persisch-englischer Zweisprachigkeit (i18n und RTL).',
      'Zargroup: Startseite in dynamische, CMS-gesteuerte Sektionen mit responsiven interaktiven Komponenten (Modals, Karussells, Parallax) umgebaut – 60+ Commits in einem Team von 10+ Entwicklern.'
    ]
  },
  'x-lo-intern': {
    sub: 'Frontend Developer Praktikum', when: 'APR 2022 → SEP 2022',
    intro: 'Erste berufliche Station nach dem autodidaktischen Lernen.',
    points: [
      'Responsive UI-Komponenten mit React, HTML, CSS und JavaScript gebaut.',
      'An Code-Reviews, Tests und Debugging beteiligt.'
    ]
  },
  'x-selftaught': {
    title: 'Autodidaktische Frontend-Entwicklung', sub: 'Berufswechsel', when: '2020 → 2022',
    intro: 'Mit rund 1,5 bis 2 Jahren Selbststudium vom Lehrberuf in die Softwareentwicklung gewechselt.',
    points: [
      'Über Online-Tutorials gelernt – zuerst die Grundlagen (HTML, CSS und JavaScript), dann React und moderne Tools.',
      'Nebenbei eigene Projekte gebaut, bevor die erste berufliche Stelle folgte.'
    ]
  },
  'x-teacher': {
    sub: 'Englischlehrer', when: '2016 → 2020 · VOR ORT & ONLINE',
    intro: 'Englisch für Lernende aller Altersgruppen und Niveaus unterrichtet – vor Ort und online.',
    points: [
      'Die Lehrjahre haben das fließende Berufsenglisch geprägt, das ich heute in internationalen Teams nutze.',
      'Ständige Übung im klaren Erklären, Feedbackgeben und Mentoring – was sich direkt auf Code-Reviews und Teamarbeit übertragen lässt.'
    ]
  },
  'p-panto': {
    title: 'Bahn-Monitoring-Plattform', sub: 'PantoHealth',
    intro: 'Eine Monitoring-Plattform für Bahninfrastruktur, die kartenbasierte Ansichten mit Echtzeit-Dashboards verbindet.',
    points: [
      'Google-Maps-Integration in Point Detail, Calendar & Trips und Catenary Points: eigene Marker, Geocoding, Marker-Rotation, Street View und Satellitenansicht.',
      'Heatmap von Grund auf entworfen und anschließend mit deck.gl (WebGL) und Lazy-Loading neu gebaut – bessere Performance bei großen Datensätzen und kleineres Bundle.',
      'Viewportbasierte Virtualisierung für Marker und Polylinien sowie ein wiederverwendbares Hintergrund-Polling mit Fortschritt und Abbruch, auf 5 Seiten im Einsatz.',
      '9+ Monitoring-Dashboards (CPU, RAM, Disk, Device Uptime, GPS Health, Video Profiling, Server Monitoring, Heatmap, Event Score) mit Filtern, Charts und REST-Anbindung.',
      'User & Asset Intelligence Dashboard mit Besuchserfassung, PDF/Excel-Export und Sentry Session Replay.',
      'Vereinheitlichung der Chart-Komponenten, die ca. 2.100 Zeilen duplizierten Code entfernte.'
    ]
  },
  'p-sahar': {
    title: 'Sahar Food', sub: 'Unternehmenswebsite · Lo Agency',
    intro: 'Unternehmenswebsite für Sahar Food, umgesetzt über 13 Monate mit 33 gemergten PRs. Live unter <a href="https://saharfood.co/" target="_blank" rel="noopener">saharfood.co</a>.',
    points: [
      '15+ Seiten und Features eigenständig umgesetzt: Über uns, CSR, Magazin, News, Karriere, Produkt & Kategorie.',
      'Vollständige Unterstützung für Englisch, Persisch und Russisch mit komplettem RTL-Layout.',
      'Wiederverwendbare UI-Komponenten: Hero-Slider mit Swiper und GSAP, Navigations-Preloader, Akkordeons und ein gemeinsames SEO-Modul.',
      'Unterstützung für den Persischen (Jalali) Kalender.'
    ]
  },
  'p-zar': {
    title: 'Zargroup', sub: 'Unternehmenswebsite · Lo Agency',
    intro: 'Unternehmenswebsite, entstanden in einem Team von 10+ Entwicklern, mit 60+ Commits von mir. Live unter <a href="https://zargroup.ir/fa" target="_blank" rel="noopener">zargroup.ir</a>.',
    points: [
      '7+ CMS-basierte Seiten mit Next.js, TypeScript, REST/GraphQL und einem Strapi-Backend entwickelt.',
      'Vollständige persisch-englische Zweisprachigkeit (i18n und RTL).',
      'Startseite in dynamische, CMS-gesteuerte Sektionen mit responsiven interaktiven Komponenten umgebaut: Modals, Karussells und Parallax.'
    ]
  }
};

Object.assign(DETAILS_DE, {
  'p-workout': {
    title: 'Workout Tracker', sub: 'Praktikumsprojekt · Lo Agency',
    intro: 'Ein einfacher Workout-Tracker, 2023 von einem Dreierteam von Praktikanten bei Lo Agency gebaut. Quellcode: <a href="https://github.com/samikia/workout" target="_blank" rel="noopener">github.com/samikia/workout</a>.',
    points: [
      'Login und Registrierung, dazu persönliche Trainingspläne mit Fälligkeitsdatum.',
      'Tägliche und wöchentliche Statistiken der Workouts sowie die Möglichkeit, die Pläne anderer Nutzer und anderer Gyms zu verfolgen.',
      'Serverseitig gerenderte Seiten mit der Template-Engine Twig.js auf einem Express-Server, Speicherung mit better-sqlite3.',
      'Alpine.js für leichtgewichtiges Client-Verhalten und Axios für Anfragen an andere APIs; Gestaltung mit HTML, CSS und Bootstrap.'
    ]
  },
  'p-kerio': {
    title: 'Kerio', sub: 'Praktikumsprojekt · Lo Agency',
    intro: 'Eine Full-Stack-Webanwendung, die im Team während des Praktikums bei Lo Agency entstand. Quellcode: <a href="https://github.com/samikia/Kerio" target="_blank" rel="noopener">github.com/samikia/Kerio</a>.',
    points: [
      'Frontend in React 18 und TypeScript mit React Router, gestaltet mit Tailwind CSS; u. a. mit Dashboard und Kontaktseite.',
      'Formulare mit Formik und Yup-Validierung; Datenabruf mit Axios.',
      'Backend in NestJS mit TypeORM und PostgreSQL, gegliedert in Controller, Services und Entities; inklusive E-Mail-Einladungs-Ablauf.',
      'Teamworkflow mit Pull Requests und PR-Template, ESLint und Prettier für Codequalität sowie Jest/Testing Library für Tests.'
    ]
  }
});
