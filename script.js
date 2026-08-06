/* ============================================
   Portfolio — Interactions JS + i18n
   ============================================ */

(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const translations = {
    fr: {
      'meta.title': 'Portfolio — Vernens Charles',
      'meta.description': 'Portfolio de Vernens Charles — Développeur web junior en stage.',
      'nav.about': 'À propos',
      'nav.experience': 'Expérience',
      'nav.projects': 'Projets',
      'nav.skills': 'Compétences',
      'nav.contact': 'Me contacter',
      'nav.menuOpen': 'Ouvrir le menu',
      'nav.langSwitch': 'Passer en anglais',
      'nav.themeDark': 'Activer le mode sombre',
      'nav.themeLight': 'Activer le mode clair',
      'hero.eyebrow': 'Stage · Strateginc Groupe Financier',
      'hero.title': 'Bonjour, je suis <span class="accent">Vernens Charles</span>.<br />Développeur web junior<span class="accent-dot">.</span>',
      'hero.lead': 'Étudiant en <strong>développement web</strong> à l\'<strong>Université de Sherbrooke</strong> (Québec). En stage chez <strong>Strateginc Groupe Financier</strong>, j\'automatise leurs processus Microsoft et je construis des projets concrets pour répondre à des problèmes réels.',
      'hero.btnProjects': 'Voir mes projets',
      'hero.btnContact': 'Me contacter →',
      'hero.metaProjects': 'projets réalisés',
      'hero.metaTech': 'technologies maîtrisées',
      'hero.metaYear': 'année en cours',
      'hero.badge': 'Stage en cours',
      'hero.scroll': 'Faire défiler',
      'hero.photoAlt': 'Photo de profil de Vernens Charles',
      'about.title': 'À propos de moi',
      'about.sub': 'Un peu de contexte sur mon parcours et ce qui m\'anime.',
      'about.p1': 'Je suis actuellement étudiant en <strong>développement web</strong> à l\'<strong>Université de Sherbrooke</strong> (Québec), où je poursuis un <strong>baccalauréat en informatique</strong>. L\'informatique, c\'est ce que j\'ai toujours voulu faire : comprendre comment les choses fonctionnent et leur donner vie à travers le code.',
      'about.p2': 'Au-delà des études, je consacre du temps à apprendre par la pratique : projets personnels, travail en équipe et résolution de problèmes concrets. Mon objectif est d\'allier théorie solide et savoir-faire opérationnel.',
      'about.p3': 'En dehors du travail et des études, je m\'intéresse particulièrement à la <strong>musculation</strong> et au <strong>basket</strong>, ce qui m\'a inspiré dans le développement de projets liés au suivi des performances sportives. Je suis également passionné par la musique, la création de contenu numérique et les projets personnels qui me permettent d\'apprendre continuellement.',
      'about.infoTitle': 'Informations',
      'about.locationLabel': 'Localisation',
      'about.locationValue': 'Sherbrooke, Québec',
      'about.emailLabel': 'Email',
      'about.studiesLabel': 'Études',
      'about.studiesValue': 'Bacc. informatique · Univ. de Sherbrooke',
      'about.languagesLabel': 'Langues',
      'about.languagesValue': 'Créole, Français, Anglais',
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
      'exp3.date': 'Janv. — Avr. 2026',
      'exp3.title': 'Tuteur — Centre d\'aide en informatique',
      'exp3.org': 'Centre d\'entraide à l\'étude en informatique · Université de Sherbrooke',
      'exp3.desc': 'Accompagnement d\'étudiants en programmation et concepts informatiques. Formation institutionnelle complétée. Attestation de participation étudiante 2026.',
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
      'proj3.tag': 'Personnel · Août 2026',
      'proj3.desc': 'Plateforme web destinée aux étudiants pour optimiser leurs candidatures de stage. Elle permet d\'analyser et d\'adapter un CV selon une offre, de générer des lettres de motivation ciblées, et de suivre les indicateurs clés (score ATS, taux de correspondance).',
      'proj3.alt': 'Capture d\'écran du tableau de bord AI Career',
      'proj.link': 'Voir sur GitHub →',
      'skills.title': 'Compétences',
      'skills.sub': 'Outils et savoir-faire que j\'utilise au quotidien.',
      'skills.technical': 'Techniques',
      'skills.tools': 'Outils',
      'skills.soft': 'Transverses et langues',
      'skills.htmlCss': 'HTML et CSS',
      'skills.csharp': 'C# et .NET MAUI',
      'skills.git': 'Git et GitHub',
      'skills.teamwork': 'Travail d\'équipe',
      'skills.communication': 'Communication',
      'contact.title': 'Travaillons ensemble.',
      'contact.sub': 'Stage, alternance, projet étudiant — n\'hésitez pas à me contacter.',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      'contact.nameLabel': 'Nom',
      'contact.emailLabel': 'Email',
      'contact.messageLabel': 'Message',
      'contact.namePlaceholder': 'Votre nom',
      'contact.emailPlaceholder': 'votre.email@exemple.com',
      'contact.messagePlaceholder': 'Votre message',
      'contact.submit': 'Envoyer le message',
      'contact.success': 'Merci ! Votre client mail va s\'ouvrir pour envoyer le message.',
      'contact.errorRequired': 'Veuillez remplir tous les champs.',
      'contact.errorEmail': 'Veuillez entrer une adresse email valide.',
      'footer.rights': 'Tous droits réservés.',
      'footer.top': 'Retour en haut ↑',
    },
    en: {
      'meta.title': 'Portfolio — Vernens Charles',
      'meta.description': 'Portfolio of Vernens Charles — Junior Web Developer currently interning.',
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact me',
      'nav.menuOpen': 'Open menu',
      'nav.langSwitch': 'Switch to French',
      'nav.themeDark': 'Enable dark mode',
      'nav.themeLight': 'Enable light mode',
      'hero.eyebrow': 'Internship · Strateginc Groupe Financier',
      'hero.title': 'Hi, I\'m <span class="accent">Vernens Charles</span>.<br />Junior Web Developer<span class="accent-dot">.</span>',
      'hero.lead': 'Web development student at the <strong>Université de Sherbrooke</strong> (Quebec). Currently interning at <strong>Strateginc Groupe Financier</strong>, where I automate Microsoft workflows and build practical projects that solve real problems.',
      'hero.btnProjects': 'View my projects',
      'hero.btnContact': 'Contact me →',
      'hero.metaProjects': 'projects completed',
      'hero.metaTech': 'technologies mastered',
      'hero.metaYear': 'current year',
      'hero.badge': 'Internship in progress',
      'hero.scroll': 'Scroll down',
      'hero.photoAlt': 'Profile photo of Vernens Charles',
      'about.title': 'About me',
      'about.sub': 'A little context about my background and what drives me.',
      'about.p1': 'I am currently a <strong>web development</strong> student at the <strong>Université de Sherbrooke</strong> (Quebec), pursuing a <strong>Bachelor\'s degree in Computer Science</strong>. Computer science is what I have always wanted to do: understand how things work and bring them to life through code.',
      'about.p2': 'Beyond coursework, I learn by doing: personal projects, teamwork, and solving concrete problems. My goal is to combine solid theory with hands-on expertise.',
      'about.p3': 'Outside of work and studies, I am especially interested in <strong>weight training</strong> and <strong>basketball</strong>, which inspired projects focused on tracking athletic performance. I am also passionate about music, digital content creation, and personal projects that help me keep learning and improving my programming skills.',
      'about.infoTitle': 'Information',
      'about.locationLabel': 'Location',
      'about.locationValue': 'Sherbrooke, Quebec',
      'about.emailLabel': 'Email',
      'about.studiesLabel': 'Education',
      'about.studiesValue': 'B.Sc. Computer Science · Univ. of Sherbrooke',
      'about.languagesLabel': 'Languages',
      'about.languagesValue': 'Creole, French, English',
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
      'exp3.date': 'Jan. — Apr. 2026',
      'exp3.title': 'Tutor — Computer Science Help Center',
      'exp3.org': 'Computer Science Study Help Center · Université de Sherbrooke',
      'exp3.desc': 'Supported students with programming and computer science concepts. Completed required institutional training. 2026 student participation certificate.',
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
      'proj3.tag': 'Personal · Aug. 2026',
      'proj3.desc': 'Web platform designed for students to strengthen internship applications. It analyzes and adapts a résumé to a job posting, generates targeted cover letters, and tracks key metrics such as ATS score and match rate.',
      'proj3.alt': 'Screenshot of the AI Career dashboard',
      'proj.link': 'View on GitHub →',
      'skills.title': 'Skills',
      'skills.sub': 'Tools and expertise I use day to day.',
      'skills.technical': 'Technical',
      'skills.tools': 'Tools',
      'skills.soft': 'Soft skills and languages',
      'skills.htmlCss': 'HTML and CSS',
      'skills.csharp': 'C# and .NET MAUI',
      'skills.git': 'Git and GitHub',
      'skills.teamwork': 'Teamwork',
      'skills.communication': 'Communication',
      'contact.title': 'Let\'s work together.',
      'contact.sub': 'Internship, work-study program, or student project — feel free to reach out.',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      'contact.nameLabel': 'Name',
      'contact.emailLabel': 'Email',
      'contact.messageLabel': 'Message',
      'contact.namePlaceholder': 'Your name',
      'contact.emailPlaceholder': 'your.email@example.com',
      'contact.messagePlaceholder': 'Your message',
      'contact.submit': 'Send message',
      'contact.success': 'Thanks! Your email client will open to send the message.',
      'contact.errorRequired': 'Please fill in all fields.',
      'contact.errorEmail': 'Please enter a valid email address.',
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
  const starsCanvas = document.getElementById('stars');
  const metaDescription = document.querySelector('meta[name="description"]');

  let currentLang = localStorage.getItem('lang') || 'fr';
  let currentTheme = localStorage.getItem('theme') || 'dark';

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
    document.documentElement.setAttribute('data-theme', theme);
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

  // Barres de compétences
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll('.skill-group').forEach((el) => skillObserver.observe(el));

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

  // Champ d'étoiles
  if (starsCanvas && !prefersReducedMotion) {
    const ctx = starsCanvas.getContext('2d');
    let stars = [];
    let width = 0;
    let height = 0;
    let animationId = null;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      starsCanvas.width = width * dpr;
      starsCanvas.height = height * dpr;
      starsCanvas.style.width = `${width}px`;
      starsCanvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((width * height) / 14000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random() * 0.7 + 0.15,
        speed: Math.random() * 0.35 + 0.08,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t) => {
      if (!visible) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = 0.55 + 0.45 * Math.sin(t * 0.0015 * s.speed + s.phase);
        ctx.beginPath();
        ctx.fillStyle = `rgba(228, 228, 231, ${s.a * twinkle})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize, { passive: true });

    document.addEventListener('visibilitychange', () => {
      visible = document.visibilityState === 'visible';
    });

    window.addEventListener('beforeunload', () => {
      if (animationId) cancelAnimationFrame(animationId);
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

  // Formulaire de contact (mailto)
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const CONTACT_EMAIL = 'chav1301@usherbrooke.ca';

  if (contactForm) {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');
    const fields = [nameInput, emailInput, messageInput].filter(Boolean);

    const showStatus = (message, type) => {
      if (!formStatus) return;
      formStatus.hidden = false;
      formStatus.textContent = message;
      formStatus.classList.remove('is-success', 'is-error');
      formStatus.classList.add(type === 'success' ? 'is-success' : 'is-error');
    };

    const clearInvalid = () => {
      fields.forEach((field) => field.classList.remove('is-invalid'));
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearInvalid();

      const name = nameInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const message = messageInput?.value.trim() || '';
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !email || !message) {
        fields.forEach((field) => {
          if (!field.value.trim()) field.classList.add('is-invalid');
        });
        showStatus(t('contact.errorRequired'), 'error');
        return;
      }

      if (!emailOk) {
        emailInput?.classList.add('is-invalid');
        showStatus(t('contact.errorEmail'), 'error');
        return;
      }

      const subject = encodeURIComponent(
        currentLang === 'en'
          ? `Portfolio contact — ${name}`
          : `Contact portfolio — ${name}`
      );
      const body = encodeURIComponent(
        currentLang === 'en'
          ? `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
          : `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      showStatus(t('contact.success'), 'success');
      contactForm.reset();
    });

    fields.forEach((field) => {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
        if (formStatus && !formStatus.hidden && formStatus.classList.contains('is-error')) {
          formStatus.hidden = true;
        }
      });
    });
  }
})();
