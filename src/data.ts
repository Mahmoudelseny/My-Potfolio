import { Project, ExperienceItem, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: 'Mahmoud Sayed Abosarie',
  title: 'Software Engineer & Web Developer',
  tagline: 'Building Scalable, User-Centric Web & Mobile Solutions with Clean Architecture',
  email: 'mahmoudabosarie@gmail.com',
  phone: '01116635824',
  location: 'Northern Extensions, 6th of October City, Giza, Egypt',
  github: 'https://github.com/Mahmoudelseny',
  linkedin: 'https://www.linkedin.com/in/mahmoud-abosarie',
  bio: 'I am a passionate Software Engineer with a Bachelor’s Degree in Computers and Artificial Intelligence, specializing in Software Engineering. I have a strong foundation in web and mobile application development using technologies such as React, Flutter, Java EE, Node.js, and modern programming frameworks. I have rich experience building scalable, user-friendly, and high-performance solutions across various industries, including e-commerce and business applications, with a focus on clean code, performance optimization, and modern software development practices.',
  education: {
    institution: 'Cairo University',
    degree: 'Bachelor’s Degree in Computers and Artificial Intelligence',
    department: 'Software Engineering Department',
    gradYear: '2025',
    logo: '🎓'
  },
  languages: [
    { name: 'Arabic', level: 100, label: 'Native' },
    { name: 'English', level: 50, label: 'Intermediate' }
  ],
  skills: [
    { name: 'TypeScript', category: 'languages', rating: 90 },
    { name: 'JavaScript', category: 'languages', rating: 95 },
    { name: 'Python', category: 'languages', rating: 80 },
    { name: 'Java', category: 'languages', rating: 85 },
    { name: 'C++', category: 'languages', rating: 75 },
    { name: 'SQL', category: 'languages', rating: 85 },
    { name: 'PHP', category: 'languages', rating: 80 },
    { name: 'Dart', category: 'languages', rating: 85 },
    { name: 'C#', category: 'languages', rating: 70 },
    
    { name: 'React.js', category: 'frameworks', rating: 95 },
    { name: 'Flutter', category: 'frameworks', rating: 85 },
    { name: 'Java EE', category: 'frameworks', rating: 75 },
    { name: 'Node.js & Express', category: 'frameworks', rating: 85 },
    { name: 'Tailwind CSS', category: 'frameworks', rating: 95 },
    { name: 'Next.js', category: 'frameworks', rating: 80 },
    
    { name: 'Git & GitHub', category: 'tools', rating: 90 },
    { name: 'Firebase', category: 'tools', rating: 85 },
    { name: 'Clean Architecture', category: 'tools', rating: 90 },
    { name: 'REST APIs', category: 'tools', rating: 95 },
    { name: 'Responsive UI/UX Design', category: 'tools', rating: 95 },
    { name: 'SEO & Performance Optimization', category: 'tools', rating: 90 }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'innovation-holding',
    title: 'Innovation Details Holding Corporate Portal',
    company: 'Innovation Details HOLDING',
    link: 'https://inovation-holding.app',
    date: 'May 2026',
    category: 'web',
    isFeatured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Node.js'],
    description: 'A modern, high-performance corporate portal built to showcase the holding company’s vision, diverse services, and multi-sector portfolio with advanced interactive layouts.',
    bulletPoints: [
      'Developed and maintained a modern corporate website with a highly professional user experience and rich micro-interactions.',
      'Built scalable, accessible, and fluid web interfaces focused on clean design, smooth content navigation, and search engine optimization.',
      'Achieved a near-perfect performance rating using efficient asset bundling and lazy loading strategies.'
    ]
  },
  {
    id: 'rubiks',
    title: 'Rubiks Agency Platform',
    company: 'Rubiks',
    link: 'https://imrubiks.com/',
    date: 'April 2026',
    category: 'web',
    isFeatured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    description: 'A responsive agency website showcasing design services, client case studies, and modern project portfolios with smooth transitions and layouts.',
    bulletPoints: [
      'Developed imrubiks.com, a fully responsive digital agency website showcasing custom agency services and creative deliverables.',
      'Delivered fluid UI/UX with hand-crafted motion graphics, optimized performance, and flawless cross-device compatibility.',
      'Implemented an intuitive project filtering system and interactive call-to-actions to maximize visitor retention.'
    ]
  },
  {
    id: 'mas-elite',
    title: 'M.A.S Elite Accounting Portal',
    company: 'M.A.S Elite',
    link: 'https://www.masellite.com/',
    date: 'April 2026',
    category: 'web',
    isFeatured: false,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express'],
    description: 'A secure, business-oriented website designed for premium accounting and tax services, focusing on trust, clear calculations, and contact interfaces.',
    bulletPoints: [
      'Designed and developed a modern accounting and tax services website focusing on responsive UI/UX and professional business-oriented solutions.',
      'Implemented secure web components, scalable inquiry features, and optimized performance to boost client inquiries and engagement.',
      'Crafted a cohesive, formal design language reinforcing client trust and clean information hierarchy.'
    ]
  },
  {
    id: 'taha-desouky',
    title: 'Taha Desouky Professional Portfolio',
    company: 'Taha Desouky',
    link: 'https://taha-desouky.com/',
    date: 'March 2026',
    category: 'web',
    isFeatured: false,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite', 'Motion'],
    description: 'A bespoke responsive portfolio website presenting professional achievements, skills, and interactive contact points with high-end aesthetic execution.',
    bulletPoints: [
      'Developed and deployed taha-desouky.com, showcasing comprehensive skills, services, and dynamic work history.',
      'Optimized page loads, SEO metadata, and cross-browser performance, resulting in a 40% increase in mobile page speeds.',
      'Built a custom, responsive navigation system and a beautiful, validated client contact interface.'
    ]
  },
  {
    id: 'rivo-shop',
    title: 'Rivo Premium E-Commerce',
    company: 'Rivo Shop',
    link: 'https://rivo-eg.shop/',
    date: 'February 2025',
    category: 'web',
    isFeatured: true,
    technologies: ['React', 'Node.js', 'Tailwind CSS', 'SQL', 'State Management'],
    description: 'An elegant, high-end fashion accessories e-commerce website centering premium product presentation, filtering, and modern shopping carts.',
    bulletPoints: [
      'Created a premium-looking e-commerce interface for modern-style fashion accessories emphasizing comfort, luxury, and durability.',
      'Built high-performance client state controllers for active shopping carts, wishlist caching, and multi-criteria product filters.',
      'Optimized the media gallery with progressive loading to maintain high frames-per-second scrolling.'
    ]
  },
  {
    id: 'genova',
    title: 'Genova Real Estate Mobile App',
    company: 'Genova',
    link: '#', // internal mobile app
    date: 'January 2025',
    category: 'mobile',
    isFeatured: true,
    technologies: ['Flutter', 'Dart', 'Firebase', 'State Management', 'REST API'],
    description: 'A mobile application and backend admin panel designed for real estate consultants to manage property portfolios, clients, and leads in real time.',
    bulletPoints: [
      'Engineered a complete mobile application for real estate property consultants integrated with a robust dashboard.',
      'Utilized Flutter and Dart for high-framerate mobile performance on both Android and iOS devices.',
      'Configured secure Firebase backend connectors, real-time client status updates, and interactive property search tools.'
    ]
  },
  {
    id: 'markit-prof',
    title: 'Markit Prof Business Platform',
    company: 'Markit Prof',
    link: 'https://markitprof.com/',
    date: 'August 2024',
    category: 'web',
    isFeatured: false,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    description: 'A marketing and business strategy web portal dedicated to helping companies achieve scalability with custom marketing guides and interactive services.',
    bulletPoints: [
      'Developed and deployed the web presence for MarkitProf, enabling businesses to source specialized digital marketing packages.',
      'Created interactive marketing calculators and custom intake forms with responsive visual feedback.',
      'Delivered clean, readable grids and informational hierarchies optimized for organic search discovery.'
    ]
  },
  {
    id: 'shutterfly',
    title: 'ShutterFly Media Production Portal',
    company: 'ShutterFly',
    link: 'https://portfolio-shutter-fly.vercel.app/',
    date: 'April 2024',
    category: 'web',
    isFeatured: false,
    technologies: ['React', 'Tailwind CSS', 'Vite', 'Image Optimization'],
    description: 'A premium portfolio showcase for a leading media production company, specializing in corporate events and high-fidelity photography grids.',
    bulletPoints: [
      'Developed a modern media showcase website specializing in high-resolution photography and video playback streams.',
      'Engineered progressive loading grids and lazy-loaded image carousels preventing layout shifts.',
      'Received excellent user feedback on the aesthetic balance of the fullscreen photo showcases.'
    ]
  }
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    id: 'exp-innovation',
    role: 'Web Developer',
    company: 'Innovation Details HOLDING',
    companyUrl: 'https://inovation-holding.app',
    date: '05/2026',
    description: 'Holding & innovation-driven business group.',
    bulletPoints: [
      'Developed and maintained a modern corporate website for Innovation Details Holding, showcasing the company’s vision, services, and business portfolio with a responsive and professional user experience.',
      'Built scalable and high-performance web interfaces focused on modern design, smooth navigation, and optimized digital presence.'
    ]
  },
  {
    id: 'exp-rubiks',
    role: 'Web Developer',
    company: 'Rubiks',
    companyUrl: 'https://imrubiks.com/',
    date: '04/2026',
    description: 'Creative digital agency and development workshop.',
    bulletPoints: [
      'Developed imrubiks.com, a responsive website showcasing agency services and projects.',
      'Delivered modern UI/UX with optimized performance and seamless cross-device experience.'
    ]
  },
  {
    id: 'exp-mas',
    role: 'Web Developer',
    company: 'M.A.S Elite',
    companyUrl: 'https://www.masellite.com/',
    date: '04/2026',
    description: 'Accounting, tax consulting, and business solutions provider.',
    bulletPoints: [
      'Designed and developed a modern accounting and tax services website, focusing on responsive UI/UX and business-oriented solutions.',
      'Implemented scalable web features and optimized performance to enhance client engagement and digital presence.'
    ]
  },
  {
    id: 'exp-taha',
    role: 'Web Developer',
    company: 'Taha Desouky',
    companyUrl: 'https://taha-desouky.com/',
    date: '03/2026',
    description: 'High-end responsive portfolio deployment.',
    bulletPoints: [
      'Developed and deployed taha-desouky.com, a responsive portfolio website showcasing projects, skills, and professional experience with a clean UI/UX and smooth navigation.',
      'Optimized for performance, SEO, and cross-device compatibility, featuring interactive project sections and a user-friendly contact interface.'
    ]
  },
  {
    id: 'exp-rivo',
    role: 'Web Developer',
    company: 'Rivo Shop',
    companyUrl: 'https://rivo-eg.shop/',
    date: '02/2025',
    description: 'E-commerce fashion accessories store.',
    bulletPoints: [
      'Rivo provides modern style fashion accessories combined with comfort and durability.',
      'Created a premium-looking e-commerce website for fashion accessories.'
    ]
  },
  {
    id: 'exp-genova',
    role: 'Mobile Application Developer',
    company: 'Genova',
    date: '01/2025',
    description: 'Real estate investment and asset consultancy.',
    bulletPoints: [
      'Genova Investment focuses on real estate consultancy.',
      'Developed a mobile application for property consultants with an admin dashboard.'
    ]
  },
  {
    id: 'exp-markit',
    role: 'Web Developer',
    company: 'Markit Prof',
    companyUrl: 'https://markitprof.com/',
    date: '08/2024',
    description: 'Digital marketing and branding agency.',
    bulletPoints: [
      'MarkitProf specializes in helping businesses reach their potential through marketing.',
      'Provided effective and innovative marketing strategies and creative marketing solutions for businesses.'
    ]
  },
  {
    id: 'exp-shutterfly',
    role: 'Web Developer',
    company: 'ShutterFly',
    companyUrl: 'https://portfolio-shutter-fly.vercel.app/',
    date: '04/2024',
    description: 'Premier media production company.',
    bulletPoints: [
      'ShutterFly is a premier media production company.',
      'Developed a website for a media production company specializing in photography and videography for corporate events.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-clean-architecture',
    title: 'The Power of Clean Architecture in React & Flutter Applications',
    excerpt: 'How applying clean separation of concerns and robust design patterns can keep your codebase scalable, easily testable, and highly maintainable.',
    category: 'Architecture',
    readTime: '6 min read',
    date: 'June 18, 2026',
    author: 'Mahmoud Sayed Abosarie',
    content: `
When building applications, developers often face a classic dilemma: speed vs. quality. While cutting corners might yield a faster initial launch, it inevitably builds "technical debt" that slows down future features to a crawl.

This is where **Clean Architecture** becomes a developer's superpower. Initially formalized by Robert C. Martin ("Uncle Bob"), its core principle is simple: **Separation of Concerns**. The architecture is structured in concentric layers where dependencies only point inwards.

### The Concentric Layers
For web and mobile applications (React/Flutter), we can adapt this into three fundamental layers:

1. **Domain Layer (Core Business Logic)**
   This layer contains the absolute source of truth: Entities, Business Rules, and Use Cases. It is completely independent of external packages, databases, and UI frameworks. In a Flutter app, these are plain Dart classes. In React, these are pure TypeScript functions and state definitions.

2. **Data Layer (Infrastructure & Repositories)**
   Responsible for retrieving and saving data. This is where API requests (via Axios or Http), Local Storage (SQLite, SharedPreferences, or LocalStorage), and Firebase services live. It implements interfaces defined by the Domain layer, meaning you can swap Firebase for a PostgreSQL API without touching your business logic!

3. **Presentation Layer (User Interface)**
   This contains your UI components (React components or Flutter widgets) and state management controllers (React Context, Redux, or Flutter Bloc/Provider). It receives user inputs, calls Use Cases from the Domain layer, and displays the state updates.

### Why This Matters for Web and Mobile Developers
In my work building real estate portals (like *Genova*) and corporate systems (like *Innovation Details Holding*), implementing Clean Architecture has delivered massive benefits:
* **Framework Independence**: The UI can be redesigned or swapped completely without rewriting core calculations.
* **Flawless Testability**: Since the business logic is isolated, you can write pure Unit Tests without mocking complex UI states.
* **Parallel Development**: Developers can work on the UI layer while others refine database hooks or backend APIs, using mock repositories.

Investing a few extra hours in structuring your project around Clean Architecture on Day One will save hundreds of debugging hours down the line. Keep your code clean, keep your dependencies unidirectional!
`
  },
  {
    id: 'blog-web-performance',
    title: 'Optimizing Web Performance: Lessons Learned from Real-world Projects',
    excerpt: 'A comprehensive guide to boosting page speeds, resolving layout shifts, and achieving outstanding SEO rankings based on production deployments.',
    category: 'Performance',
    readTime: '5 min read',
    date: 'May 12, 2026',
    author: 'Mahmoud Sayed Abosarie',
    content: `
Performance is the single most critical factor in user retention. Statistics show that websites loading in over 3 seconds lose nearly 40% of their traffic immediately. Additionally, Google's algorithms directly prioritize fast, responsive sites in search results through Core Web Vitals.

In my recent projects (such as *Rivo Shop* and *Rubiks*), I was tasked with taking heavy media portals and transforming them into lightning-fast, progressive web applications. Here are the core tactics that yielded the greatest performance breakthroughs:

### 1. Progressive Image Optimization
Images are almost always the biggest bundle culprit. 
* **Next-gen formats**: Swap legacy PNG/JPG files for modern \`.webp\` or \`.avif\` formats which offer up to 70% compression without losing visual clarity.
* **Lazy loading**: Always set \`loading="lazy"\` on off-screen images.
* **Explicit dimensions**: Set explicit width and height attributes on images. This prevents Cumulative Layout Shift (CLS), where elements jump around as high-res images load, frustrating users.

### 2. Code Splitting & Dynamic Imports
By default, compilers bundle all your JavaScript into a single, massive file. Users shouldn't have to download code for the "Contact Us" or "Admin Admin Panel" page just to view the home hero header!
* Using Vite or Next, use React's \`React.lazy()\` and \`Suspense\` to split components. Only load heavy packages (like charts, calendars, or heavy calculators) when they are actually rendered on screen.

### 3. Server-authoritative caching & CDN Offloading
* Host static assets on Global Content Delivery Networks (CDNs) to reduce the latency of long-distance server handshakes.
* Enable robust cache-control headers (\`Cache-Control: public, max-age=31536000\`) for immutable assets like logos, fonts, and core scripts.

By tracking these metrics diligently, we were able to increase mobile Lighthouse scores by over 30 points, driving higher customer acquisition and search visibility. High-performance isn't a feature; it's the foundation.
`
  },
  {
    id: 'blog-flutter-firebase',
    title: 'Building Seamless Mobile Dashboards with Flutter and Firebase',
    excerpt: 'Unveiling the synergy between real-time data streaming and cross-platform mobile frameworks for dynamic property management and business tracking.',
    category: 'Mobile',
    readTime: '4 min read',
    date: 'March 29, 2026',
    author: 'Mahmoud Sayed Abosarie',
    content: `
When building client-facing business applications, offline availability, secure real-time sync, and rapid development are paramount. The combination of Google’s Flutter for UI rendering and Firebase for serverless database infrastructure represents one of the most robust stacks available today.

During my development of the *Genova* mobile application for property consultants, we faced the challenge of providing agent rosters with instant notification sync of premium leads. Here is how we created a zero-latency sync:

### Real-Time Firestore Synchronization
Instead of querying the database every few seconds (polling), Firebase Firestore utilizes WebSockets to stream changes immediately.
* By binding Flutter's \`StreamBuilder\` widgets directly to Firestore collections, any database modification (e.g., a lead update or a new listing) updates the consultant’s mobile screen in under 150 milliseconds.

### Graceful Offline Support
Consultants are frequently on-site or in buildings with poor reception. 
* Firebase’s offline persistence caches local changes automatically. When offline, the app operates seamlessly, querying the local cache.
* Once connection is re-established, Firebase runs a conflict-resolution handshake and synchronizes all pending edits safely in the background.

### Firebase Cloud Messaging (FCM)
Keep users engaged with custom push alerts. We designed a serverless Node.js trigger that listens to database changes and launches targeted push alerts to mobile phones via FCM instantly.

Developing with this stack allows single developers to ship enterprise-grade mobile systems with minimal infrastructure overhead, keeping operational costs low and agility high.
`
  }
];
