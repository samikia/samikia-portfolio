const DETAILS = {
  'x-panto': {
    title: 'PantoHealth GmbH', sub: 'Frontend Developer', when: 'JUL 2024 → PRESENT · GERMANY · REMOTE',
    intro: 'Frontend developer on a railway-infrastructure monitoring platform, working in an Agile remote team with ownership of the maps layer and a large share of the monitoring dashboards.',
    points: [
      'Owned the full Google Maps integration layer (Point Detail, Calendar & Trips, Catenary Points): custom markers, geocoding, marker rotation, Street View and satellite mode, across 50+ merged PRs.',
      'Designed the heatmap feature from scratch, then rebuilt its rendering by moving from Google Maps overlays to deck.gl (WebGL) with lazy-loaded modules, improving performance on large datasets and cutting bundle size.',
      'Led the full migration from React Router v5 to v6 across 30+ files with zero regressions to auth redirects or route guards.',
      'Built a reusable background-polling system with progress tracking and cancellation, and added viewport-based virtualization for map markers and polylines, now used across 5 monitoring pages.',
      'Created 9+ end-to-end monitoring dashboards from scratch (CPU, RAM, Disk, Device Uptime, GPS Health, Video Profiling, Server Monitoring, Heatmap, Event Score), covering UI, filtering, charting and REST API integration.',
      'Led a chart-component unification refactor that removed about 2,100 lines of duplicated code across 19 files with no loss of features.',
      'Built the User & Asset Intelligence dashboard with visit tracking, PDF/Excel export and Sentry session-replay.',
      'Shipped 300+ contributions (PRs and commits) across feature work, performance optimization and production stability.'
    ],
    tech: ['React', 'TypeScript', 'Google Maps API', 'deck.gl', 'WebGL', 'React Router', 'Recharts', 'Sentry', 'jsPDF', 'SheetJS']
  },
  'x-lo-web': {
    title: 'Lo Agency', sub: 'Frontend Web Developer', when: 'NOV 2022 → JUN 2024',
    intro: 'Delivered multilingual corporate websites for agency clients with Next.js and TypeScript, working on two major projects.',
    points: [
      'Sahar Food: shipped 15+ pages and features independently (About Us, CSR, Magazine, News, Careers, Product & Category) in Next.js 13 and TypeScript, with full English, Persian and Russian support and complete RTL layout.',
      'Sahar Food: built reusable UI components (hero slider with Swiper and GSAP, navigation preloader, accordions, shared SEO module) and Persian (Jalali) calendar support, with 33 merged PRs over 13 months.',
      'Zargroup: developed 7+ CMS-backed pages using Next.js, TypeScript, REST/GraphQL and a Strapi backend with full Persian and English bilingual support (i18n and RTL).',
      'Zargroup: rebuilt the homepage into dynamic, CMS-driven sections with responsive interactive components (modals, carousels, parallax), contributing 60+ commits in a team of 10+ engineers.'
    ],
    tech: ['Next.js 13', 'TypeScript', 'Strapi', 'REST', 'GraphQL', 'Swiper', 'GSAP', 'i18n', 'RTL']
  },
  'x-lo-intern': {
    title: 'Lo Agency', sub: 'Frontend Developer Intern', when: 'APR 2022 → SEP 2022',
    intro: 'First professional role, after self-taught learning.',
    points: [
      'Built responsive UI components with React, HTML, CSS and JavaScript.',
      'Took part in code reviews, testing and debugging.'
    ],
    tech: ['React', 'HTML', 'CSS', 'JavaScript']
  },
  'x-selftaught': {
    title: 'Self-Taught Frontend Development', sub: 'Career transition', when: '2020 → 2022',
    intro: 'Moved from teaching into software development through roughly 1.5 to 2 years of self-study.',
    points: [
      'Learned through online tutorials, starting with the fundamentals (HTML, CSS and JavaScript) and moving on to React and modern tooling.',
      'Built personal projects along the way before taking a first professional role.'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  'x-teacher': {
    title: 'Kalame Mehr Language Institute', sub: 'English Language Teacher', when: '2016 → 2020 · IN-PERSON & ONLINE',
    intro: 'Taught English to learners of all ages and levels, in person and online.',
    points: [
      'Years of teaching built the fluent professional English used in international teams today.',
      'Constant practice in explaining things clearly, giving feedback and mentoring, which transfers directly to code review and teamwork.'
    ],
    tech: []
  },
  'p-panto': {
    title: 'Railway monitoring platform', sub: 'PantoHealth', when: 'GOOGLE MAPS JS API · DECK.GL · REACT · TYPESCRIPT',
    intro: 'A railway-infrastructure monitoring platform combining map-based views with real-time monitoring dashboards.',
    points: [
      'Google Maps integration across Point Detail, Calendar & Trips and Catenary Points: custom markers, geocoding, marker rotation, Street View and satellite mode.',
      'Heatmap designed from scratch, then rebuilt on deck.gl (WebGL) with lazy-loaded modules for better performance on large datasets and a smaller bundle.',
      'Viewport-based virtualization for markers and polylines, plus a reusable background-polling system with progress tracking and cancellation, used on 5 pages.',
      '9+ monitoring dashboards (CPU, RAM, Disk, Device Uptime, GPS Health, Video Profiling, Server Monitoring, Heatmap, Event Score) with filtering, charting and REST integration.',
      'User & Asset Intelligence dashboard with visit tracking, PDF/Excel export and Sentry session-replay.',
      'Chart-component unification that removed about 2,100 lines of duplicated code.'
    ],
    tech: ['React', 'TypeScript', 'Google Maps API', 'deck.gl', 'Recharts', 'Sentry']
  },
  'p-sahar': {
    title: 'Sahar Food', sub: 'Corporate website · Lo Agency', when: 'NEXT.JS 13 · TYPESCRIPT · SWIPER · GSAP',
    intro: 'Corporate website for Sahar Food, built over 13 months with 33 merged PRs. Live at <a href="https://saharfood.co/" target="_blank" rel="noopener">saharfood.co</a>.',
    points: [
      'Shipped 15+ pages and features independently: About Us, CSR, Magazine, News, Careers, Product & Category.',
      'Full English, Persian and Russian support with complete RTL layout.',
      'Reusable UI components: hero slider with Swiper and GSAP, navigation preloader, accordions and a shared SEO module.',
      'Persian (Jalali) calendar support.'
    ],
    tech: ['Next.js 13', 'TypeScript', 'Swiper', 'GSAP', 'i18n', 'RTL', 'SEO']
  },
  'p-zar': {
    title: 'Zargroup', sub: 'Corporate website · Lo Agency', when: 'NEXT.JS · TYPESCRIPT · REST/GRAPHQL · STRAPI',
    intro: 'Corporate website built in a team of 10+ engineers, with 60+ of my commits. Live at <a href="https://zargroup.ir/fa" target="_blank" rel="noopener">zargroup.ir</a>.',
    points: [
      'Developed 7+ CMS-backed pages using Next.js, TypeScript, REST/GraphQL and a Strapi backend.',
      'Full Persian and English bilingual support (i18n and RTL).',
      'Rebuilt the homepage into dynamic, CMS-driven sections with responsive interactive components: modals, carousels and parallax.'
    ],
    tech: ['Next.js', 'TypeScript', 'Strapi', 'REST', 'GraphQL', 'i18n', 'RTL']
  }
};

Object.assign(DETAILS, {
  'p-workout': {
    title: 'Workout Tracker', sub: 'Internship project · Lo Agency', when: 'NODE.JS · EXPRESS · TWIG.JS · ALPINE.JS · SQLITE',
    intro: 'A simple workout tracker built by a team of three interns at Lo Agency in 2023. Source: <a href="https://github.com/samikia/workout" target="_blank" rel="noopener">github.com/samikia/workout</a>.',
    points: [
      'Login and registration, with personal workout plans that have a due date for completion.',
      'Daily and weekly statistics of your workouts, plus a way to catch up with other users’ plans and other gyms.',
      'Server-rendered pages with the Twig.js template engine on an Express server, with better-sqlite3 for storage.',
      'Alpine.js for lightweight client-side behaviour and Axios for requests to other APIs; styled with HTML, CSS and Bootstrap.'
    ],
    tech: ['Node.js', 'Express', 'Twig.js', 'Alpine.js', 'better-sqlite3', 'Axios', 'Bootstrap']
  },
  'p-kerio': {
    title: 'Kerio', sub: 'Internship project · Lo Agency', when: 'REACT · TYPESCRIPT · TAILWIND · NESTJS · POSTGRESQL',
    intro: 'A full-stack web application built as a team during the Lo Agency internship. Source: <a href="https://github.com/samikia/Kerio" target="_blank" rel="noopener">github.com/samikia/Kerio</a>.',
    points: [
      'Frontend in React 18 and TypeScript with React Router, styled with Tailwind CSS; pages include a dashboard and a contact page.',
      'Forms built with Formik and validated with Yup; data fetched with Axios.',
      'Backend in NestJS with TypeORM and PostgreSQL, organised into controllers, services and entities; includes an email invitation flow.',
      'Team workflow with pull requests and a PR template, ESLint and Prettier for code quality, and Jest/Testing Library set up for tests.'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Formik', 'Yup', 'NestJS', 'TypeORM', 'PostgreSQL']
  }
});
