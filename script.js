/* ============================================
   Portfolio — Interactions JS + i18n
   ============================================ */

(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const translations = {
    fr: {
      'meta.title': 'Vernens Charles | Portfolio',
      'meta.description': 'Portfolio de Vernens Charles — Développeur web junior, à la recherche d\'un stage en informatique pour l\'hiver 2027.',
      'nav.about': 'À propos',
      'nav.experience': 'Expérience',
      'nav.projects': 'Projets',
      'nav.skills': 'Compétences',
      'nav.certifications': 'Certifications',
      'nav.contact': 'Me contacter',
      'nav.menuOpen': 'Ouvrir le menu',
      'nav.langSwitch': 'Passer en anglais',
      'nav.themeDark': 'Activer le mode sombre',
      'nav.themeLight': 'Activer le mode clair',
      'hero.eyebrow': '<span class="eyebrow-dot" aria-hidden="true"></span><span class="eyebrow-copy">Étudiant en informatique · <strong>Université de Sherbrooke</strong></span>',
      'hero.title': '<span class="accent">Vernens Charles</span>',
      'hero.lead': 'Étudiant en informatique passionné par l\'innovation et les nouvelles technologies, je conçois des solutions numériques modernes pour transformer les idées en projets concrets. Curieux, créatif et motivé, j\'aime relever de nouveaux défis et apprendre continuellement.',
      'hero.btnProjects': 'Voir mes projets',
      'hero.btnContact': 'Me contacter →',
      'hero.metaProjects': 'projet mis en avant',
      'hero.metaTech': 'technologies maîtrisées',
      'hero.metaYear': 'année en cours',
      'hero.badge': 'Promotion UdeS 2027',
      'hero.scroll': 'Faire défiler',
      'hero.photoAlt': 'Photo de profil de Vernens Charles',
      'about.title': 'Centre d\'aide en informatique',
      'about.sub': 'Mon rôle à l\'Université de Sherbrooke.',
      'about.p1': 'Je suis le coordonnateur du centre d\'aide en informatique de l\'Université de Sherbrooke et j\'accompagne l\'équipe des tuteurs et veille à ce que chaque étudiant reçoive le soutien dont il a besoin.',
      'about.photoAlt': 'Vernens Charles avec l\'équipe du centre d\'aide en informatique',
      'experience.title': 'Expérience et Parcours',
      'experience.sub': 'Mes études, stages et engagements.',
      'exp1.date': 'En cours',
      'exp1.title': 'Baccalauréat en informatique',
      'exp1.org': 'Université de Sherbrooke, Québec',
      'exp1.desc': 'Spécialisation en développement web. Cours principaux : programmation orientée objet, structures de données et algorithmes, bases de données.',
      'exp2.date': 'Mai — Août 2026',
      'exp2.title': 'Stage — Automatisation Microsoft',
      'exp2.org': 'Strateginc Groupe Financier, Saint-Bruno-de-Montarville',
      'exp2.desc': 'Automatisation des processus métier de l\'entreprise via l\'écosystème Microsoft. Analyse des flux existants, conception de solutions d\'automatisation et amélioration de l\'efficacité opérationnelle.',
      'exp3.date': 'Janv. — Avr. 2026 · Sept. — Déc. 2026',
      'exp3.title': 'Tuteur — Centre d\'aide en informatique',
      'exp3.org': 'Centre d\'entraide à l\'étude en informatique · Université de Sherbrooke',
      'exp3.desc': 'Accompagnement d\'étudiants en programmation et concepts informatiques. Première session de janvier à avril 2026 (formation institutionnelle et attestation), puis reprise du poste de septembre à décembre 2026.',
      'exp3.cert': 'Voir l\'attestation →',
      'exp4.date': 'Sept. — Déc. 2025',
      'exp4.title': 'Stage — Amélioration UX web',
      'exp4.org': 'Fundación Biosfera',
      'exp4.desc': 'Amélioration de l\'expérience utilisateur (UX) du site web : audit de l\'interface, analyse des parcours utilisateurs et recommandations concrètes pour moderniser le site et faciliter les collaborations internationales.',
      'projects.title': 'Projets',
      'projects.sub': 'Quelques réalisations qui illustrent ce que je sais faire.',
      'proj1.tag': 'Personnel · Mars 2026',
      'proj1.desc': 'Tracker d\'habitudes minimaliste pour rester constant et discipliné. Design épuré, suivi quotidien et gamification (streaks, points, roue de récompenses). Version démo publiée sur GitHub — version finale en cours de développement.',
      'proj1.alt': 'Capture d\'écran de l\'application Habit Tracker',
      'proj2.tag': 'Personnel · Avril 2026',
      'proj2.desc': 'Application mobile fitness développée avec .NET MAUI. Calcul et structuration de séances selon des objectifs précis — force, hypertrophie ou endurance — avec timer de séance et plans d\'entraînement détaillés. Version démo publiée sur GitHub — version finale en cours de développement.',
      'proj2.alt': 'Capture d\'écran de l\'application Workout Calculator',
      'proj3.title': 'AI Career',
      'proj3.desc': 'Plateforme web destinée aux étudiants pour optimiser leurs candidatures de stage. Elle permet d\'analyser et d\'adapter un CV selon une offre, de générer des lettres de motivation ciblées, et de suivre les indicateurs clés (score ATS, taux de correspondance).',
      'proj3.alt': 'Capture d\'écran du tableau de bord AI Career',
      'proj3.githubAria': 'Voir le projet AI Career sur GitHub',
      'skills.title': 'Compétences',
      'skills.sub': 'Outils et technologies que j\'utilise au quotidien.',
      'certifications.title': 'Certifications',
      'certifications.sub': 'Badges vérifiables que j\'ai obtenus en formation.',
      'cert.label': 'Certification',
      'cert.verify': 'Vérifier le badge',
      'cert.labelLearn': 'Accomplissement',
      'cert.verifyLearn': 'Vérifier l\'accomplissement',
      'cert1.title': 'Introduction to Cybersecurity',
      'cert1.issuer': 'Cisco Networking Academy',
      'cert1.badgeAlt': 'Badge Cisco — Introduction to Cybersecurity',
      'cert2.title': 'Get started building with Power BI',
      'cert2.issuer': 'Microsoft',
      'cert2.badgeAlt': 'Badge Microsoft Learn — Power BI',
      'cert3.title': 'Create a multi-platform app with .NET MAUI',
      'cert3.issuer': 'Microsoft',
      'cert3.badgeAlt': 'Badge Microsoft Learn — .NET MAUI',
      'contact.title': 'Me contacter',
      'contact.sub': 'Une question, un projet ou une opportunité ? Écrivez-moi — je vous réponds dès que possible.',
      'contact.nameLabel': 'Votre nom',
      'contact.emailLabel': 'Votre e-mail',
      'contact.messageLabel': 'Votre message',
      'contact.namePlaceholder': 'Comment vous appelez-vous ?',
      'contact.emailPlaceholder': 'Quelle est votre adresse e-mail ?',
      'contact.messagePlaceholder': 'Que souhaitez-vous me dire ?',
      'contact.submit': 'Envoyer',
      'contact.success': 'Merci. Votre client mail va s\'ouvrir pour envoyer le message.',
      'contact.errorRequired': 'Veuillez remplir tous les champs.',
      'contact.errorEmail': 'Veuillez entrer une adresse e-mail valide.',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      'footer.rights': 'Tous droits réservés.',
      'footer.top': 'Retour en haut ↑',
    },
    en: {
      'meta.title': 'Vernens Charles | Portfolio',
      'meta.description': 'Portfolio of Vernens Charles — Junior Web Developer seeking a computer science internship for Winter 2027.',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.certifications': 'Certifications',
      'nav.contact': 'Contact me',
      'nav.menuOpen': 'Open menu',
      'nav.langSwitch': 'Switch to French',
      'nav.themeDark': 'Enable dark mode',
      'nav.themeLight': 'Enable light mode',
      'hero.eyebrow': '<span class="eyebrow-dot" aria-hidden="true"></span><span class="eyebrow-copy">Computer science student · <strong>Université de Sherbrooke</strong></span>',
      'hero.title': '<span class="accent">Vernens Charles</span>',
      'hero.lead': 'As a computer science student passionate about innovation and new technologies, I design modern digital solutions that turn ideas into real projects. Curious, creative, and driven, I enjoy new challenges and continuous learning.',
      'hero.btnProjects': 'View my projects',
      'hero.btnContact': 'Contact me →',
      'hero.metaProjects': 'featured project',
      'hero.metaTech': 'technologies mastered',
      'hero.metaYear': 'current year',
      'hero.badge': 'Promotion UdeS 2027',
      'hero.scroll': 'Scroll down',
      'hero.photoAlt': 'Profile photo of Vernens Charles',
      'about.title': 'Computer Science Help Center',
      'about.sub': 'My role at the Université de Sherbrooke.',
      'about.p1': 'I am the coordinator of the Université de Sherbrooke computer science help center. I support the tutor team and work to ensure every student gets the support they need.',
      'about.photoAlt': 'Vernens Charles with the computer science help center team',
      'experience.title': 'Experience and Background',
      'experience.sub': 'My studies, internships, and engagements.',
      'exp1.date': 'In progress',
      'exp1.title': 'Bachelor\'s in Computer Science',
      'exp1.org': 'Université de Sherbrooke, Quebec',
      'exp1.desc': 'Specialization in web development. Core courses: object-oriented programming, data structures and algorithms, databases.',
      'exp2.date': 'May — Aug. 2026',
      'exp2.title': 'Internship — Microsoft Automation',
      'exp2.org': 'Strateginc Groupe Financier, Saint-Bruno-de-Montarville',
      'exp2.desc': 'Business process automation using the Microsoft ecosystem. Analysis of existing workflows, design of automation solutions, and improved operational efficiency.',
      'exp3.date': 'Jan. — Apr. 2026 · Sep. — Dec. 2026',
      'exp3.title': 'Tutor — Computer Science Help Center',
      'exp3.org': 'Computer Science Study Help Center · Université de Sherbrooke',
      'exp3.desc': 'Supported students with programming and computer science concepts. First session from January to April 2026 (institutional training and certificate), then returned to the same role from September to December 2026.',
      'exp3.cert': 'View certificate →',
      'exp4.date': 'Sep. — Dec. 2025',
      'exp4.title': 'Internship — Web UX Improvement',
      'exp4.org': 'Fundación Biosfera',
      'exp4.desc': 'Improved the website user experience (UX): interface audit, user journey analysis, and concrete recommendations to modernize the site and support international partnerships.',
      'projects.title': 'Projects',
      'projects.sub': 'A few projects that showcase what I can do.',
      'proj1.tag': 'Personal · Mar. 2026',
      'proj1.desc': 'Minimalist habit tracker to stay consistent and disciplined. Clean design, daily tracking, and gamification (streaks, points, reward wheel). Demo published on GitHub — final version in development.',
      'proj1.alt': 'Screenshot of the Habit Tracker application',
      'proj2.tag': 'Personal · Apr. 2026',
      'proj2.desc': 'Fitness mobile app built with .NET MAUI. Calculates and structures workouts based on specific goals — strength, hypertrophy, or endurance — with a session timer and detailed training plans. Demo published on GitHub — final version in development.',
      'proj2.alt': 'Screenshot of the Workout Calculator application',
      'proj3.title': 'AI Career',
      'proj3.desc': 'Web platform designed for students to strengthen internship applications. It analyzes and adapts a résumé to a job posting, generates targeted cover letters, and tracks key metrics such as ATS score and match rate.',
      'proj3.alt': 'Screenshot of the AI Career dashboard',
      'proj3.githubAria': 'View the AI Career project on GitHub',
      'skills.title': 'Skills',
      'skills.sub': 'Tools and technologies I use day to day.',
      'certifications.title': 'Certifications',
      'certifications.sub': 'Verifiable badges earned through training.',
      'cert.label': 'Certification',
      'cert.verify': 'Verify badge',
      'cert.labelLearn': 'Achievement',
      'cert.verifyLearn': 'View achievement',
      'cert1.title': 'Introduction to Cybersecurity',
      'cert1.issuer': 'Cisco Networking Academy',
      'cert1.badgeAlt': 'Cisco badge — Introduction to Cybersecurity',
      'cert2.title': 'Get started building with Power BI',
      'cert2.issuer': 'Microsoft',
      'cert2.badgeAlt': 'Microsoft Learn badge — Power BI',
      'cert3.title': 'Create a multi-platform app with .NET MAUI',
      'cert3.issuer': 'Microsoft',
      'cert3.badgeAlt': 'Microsoft Learn badge — .NET MAUI',
      'contact.title': 'Contact me',
      'contact.sub': 'Have a question, a project, or an opportunity? Send me an email — I will get back to you as soon as I can.',
      'contact.nameLabel': 'Your name',
      'contact.emailLabel': 'Your email',
      'contact.messageLabel': 'Your message',
      'contact.namePlaceholder': 'What is your name?',
      'contact.emailPlaceholder': 'What is your email address?',
      'contact.messagePlaceholder': 'What would you like to tell me?',
      'contact.submit': 'Send',
      'contact.success': 'Thanks! Your email client will open to send the message.',
      'contact.errorRequired': 'Please fill in all fields.',
      'contact.errorEmail': 'Please enter a valid email address.',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      'footer.rights': 'All rights reserved.',
      'footer.top': 'Back to top ↑',
    },
  };

  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');
  const portrait = document.getElementById('portrait');
  const metaDescription = document.querySelector('meta[name="description"]');

  let currentLang = localStorage.getItem('lang') || 'fr';
  let currentTheme = localStorage.getItem('theme') || 'light';

  const t = (key) => translations[currentLang][key] || translations.fr[key] || key;

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('alt', translations[lang][key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('aria-label', translations[lang][key]);
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    document.title = t('meta.title');
    if (metaDescription) metaDescription.setAttribute('content', t('meta.description'));

    if (langToggle) {
      langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
      langToggle.setAttribute('aria-label', t('nav.langSwitch'));
    }

    if (menuToggle) {
      menuToggle.setAttribute('aria-label', t('nav.menuOpen'));
    }

    updateThemeToggleLabel();
  };

  const updateThemeToggleLabel = () => {
    if (!themeToggle) return;
    const key = currentTheme === 'dark' ? 'nav.themeLight' : 'nav.themeDark';
    themeToggle.setAttribute('aria-label', t(key));
    themeToggle.setAttribute('data-i18n-aria', key);
  };

  const setTheme = (theme) => {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    updateThemeToggleLabel();
  };

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 8) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuToggle && navLinks) {
    const setMenu = (open) => {
      navLinks.classList.toggle('open', open);
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => {
      setMenu(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setMenu(false));
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  setTheme(currentTheme);
  setLanguage(currentLang);

  // Reveal au scroll
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
  );

  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in-view'));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  }

  // Icônes de compétences : lumières au clic
  const spawnSkillSparks = (badge) => {
    if (prefersReducedMotion) return;
    const rect = badge.getBoundingClientRect();
    const count = 10;
    for (let i = 0; i < count; i += 1) {
      const spark = document.createElement('span');
      spark.className = 'skill-spark';
      const angle = (Math.PI * 2 * i) / count;
      const dist = 28 + Math.random() * 26;
      spark.style.left = `${rect.width / 2 - 3}px`;
      spark.style.top = `${rect.height / 2 - 3}px`;
      spark.style.setProperty('--sx', `${Math.cos(angle) * dist}px`);
      spark.style.setProperty('--sy', `${Math.sin(angle) * dist}px`);
      badge.appendChild(spark);
      spark.addEventListener('animationend', () => spark.remove());
    }
  };

  document.querySelectorAll('.skill-badge').forEach((badge) => {
    badge.addEventListener('click', () => {
      badge.classList.remove('is-lit');
      void badge.offsetWidth;
      badge.classList.add('is-lit');
      spawnSkillSparks(badge);
      window.setTimeout(() => badge.classList.remove('is-lit'), 700);
    });
  });

  // Parallaxe portrait
  if (portrait && !prefersReducedMotion) {
    const visual = portrait.closest('.hero-visual');
    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animatePortrait = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      portrait.style.transform = `rotateY(${currentX * 0.035}deg) rotateX(${-currentY * 0.025}deg) translate3d(${currentX * 0.015}px, ${currentY * 0.015}px, 0)`;
      rafId = requestAnimationFrame(animatePortrait);
    };

    const onMove = (e) => {
      const rect = (visual || portrait).getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = e.clientX - cx;
      targetY = e.clientY - cy;
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    if (visual) visual.addEventListener('mouseleave', onLeave);
    rafId = requestAnimationFrame(animatePortrait);

    window.addEventListener('beforeunload', () => {
      if (rafId) cancelAnimationFrame(rafId);
    });
  }

  // Lien de navigation actif
  const sections = [...document.querySelectorAll('main section[id]')];
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];

  if (sections.length && navAnchors.length) {
    const setActive = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0]?.id;
      for (const section of sections) {
        if (section.offsetTop <= y) current = section.id;
      }
      navAnchors.forEach((a) => {
        const match = a.getAttribute('href') === `#${current}`;
        a.classList.toggle('is-active', match && !a.classList.contains('nav-cta'));
      });
    };
    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
  }

  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const EMAIL_TO = 'chav1301@usherbrooke.ca';

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const message = document.getElementById('contactMessage');
      const fields = [name, email, message];
      fields.forEach((el) => el.classList.remove('is-invalid'));

      const showStatus = (key, isError) => {
        if (!formStatus) return;
        formStatus.hidden = false;
        formStatus.textContent = t(key);
        formStatus.style.color = isError ? '#ef4444' : 'var(--success)';
      };

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        fields.forEach((el) => {
          if (!el.value.trim()) el.classList.add('is-invalid');
        });
        showStatus('contact.errorRequired', true);
        return;
      }

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) {
        email.classList.add('is-invalid');
        showStatus('contact.errorEmail', true);
        return;
      }

      const subject = encodeURIComponent(`Portfolio — ${name.value.trim()}`);
      const body = encodeURIComponent(
        `${message.value.trim()}\n\n— ${name.value.trim()}\n${email.value.trim()}`
      );
      window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
      showStatus('contact.success', false);
    });
  }

  const initContactGlobe = () => {
    const canvas = document.getElementById('globeCanvas');
    const stage = canvas && canvas.parentElement;
    if (!canvas) return;

    if (typeof THREE === 'undefined') return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true,
      });
      renderer.setClearColor(0x000000, 0);
      if ('outputEncoding' in renderer && THREE.sRGBEncoding) {
        renderer.outputEncoding = THREE.sRGBEncoding;
      }
    } catch (err) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 20);
    camera.position.z = 3.35;

    const setSize = () => {
      const w = (stage && stage.clientWidth) || 480;
      const h = (stage && stage.clientHeight) || 480;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    setSize();

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    scene.add(new THREE.AmbientLight(0x6b8cff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.05);
    key.position.set(3.2, 2.2, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8ab4ff, 0.45);
    rim.position.set(-3, -1, -2);
    scene.add(rim);
    const pink = new THREE.PointLight(0xffc4dc, 0.7, 8);
    pink.position.set(-1.6, 1.4, 2.2);
    scene.add(pink);

    const sphereGeo = new THREE.SphereGeometry(1, 64, 64);
    const earthMat = new THREE.MeshPhongMaterial({
      color: 0x1b4f8a,
      emissive: 0x041018,
      shininess: 18,
      specular: 0x335577,
    });
    const earth = new THREE.Mesh(sphereGeo, earthMat);
    globeGroup.add(earth);

    const loader = new THREE.TextureLoader();
    loader.load(
      'assets/earth.jpg',
      (tex) => {
        tex.minFilter = THREE.LinearFilter;
        earthMat.map = tex;
        earthMat.color.set(0xffffff);
        earthMat.needsUpdate = true;
      },
      undefined,
      () => {}
    );

    const atmos = new THREE.Mesh(
      new THREE.SphereGeometry(1.06, 48, 48),
      new THREE.MeshBasicMaterial({
        color: 0x6eb6ff,
        transparent: true,
        opacity: 0.12,
        side: THREE.BackSide,
      })
    );
    globeGroup.add(atmos);

    class SphericalHelix extends THREE.Curve {
      constructor(radius, turns, phase) {
        super();
        this.radius = radius;
        this.turns = turns;
        this.phase = phase;
      }
      getPoint(t, optionalTarget = new THREE.Vector3()) {
        const a = t * Math.PI * 2 * this.turns + this.phase;
        const y = (t - 0.5) * 2 * this.radius * 0.92;
        const r = Math.sqrt(Math.max(0.0001, this.radius * this.radius - y * y));
        return optionalTarget.set(Math.cos(a) * r, y, Math.sin(a) * r);
      }
    }

    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xf6d0de,
      roughness: 0.32,
      metalness: 0.12,
      emissive: 0x3a1020,
      emissiveIntensity: 0.12,
    });

    [
      { turns: 2.6, phase: 0.35, radius: 1.16, tube: 0.062 },
      { turns: 2.1, phase: 2.1, radius: 1.24, tube: 0.08 },
      { turns: 3.05, phase: 4.0, radius: 1.12, tube: 0.048 },
    ].forEach((cfg) => {
      const geo = new THREE.TubeGeometry(
        new SphericalHelix(cfg.radius, cfg.turns, cfg.phase),
        180,
        cfg.tube,
        12,
        false
      );
      globeGroup.add(new THREE.Mesh(geo, ribbonMat));
    });

    if (stage) stage.classList.add('has-webgl');
    canvas.classList.add('is-ready');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visible = true;
    const clock = new THREE.Clock();

    const tick = () => {
      requestAnimationFrame(tick);
      if (!visible) return;
      const dt = Math.min(clock.getDelta(), 0.05);
      if (!reduceMotion) {
        globeGroup.rotation.y += dt * 0.32;
        globeGroup.rotation.x = Math.sin(clock.elapsedTime * 0.18) * 0.1;
      }
      renderer.render(scene, camera);
    };
    renderer.render(scene, camera);
    tick();

    window.addEventListener('resize', setSize);
    if ('IntersectionObserver' in window && stage) {
      const io = new IntersectionObserver((entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
      }, { threshold: 0.05 });
      io.observe(stage);
    }
  };

  initContactGlobe();

})();
