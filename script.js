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
      'nav.recommendations': 'Recommandations',
      'nav.contact': 'Me contacter',
      'nav.menuOpen': 'Ouvrir le menu',
      'nav.langSwitch': 'Passer en anglais',
      'nav.themeDark': 'Activer le mode sombre',
      'nav.themeLight': 'Activer le mode clair',
      'hero.eyebrow': 'À la recherche d\'un stage · Hiver 2027',
      'hero.title': 'Bonjour, je suis <span class="accent">Vernens Charles</span>.<br />Développeur web junior<span class="accent-dot">.</span>',
      'hero.lead': 'Étudiant en <strong>développement web</strong> à l\'<strong>Université de Sherbrooke</strong> (Québec). Mon stage chez <strong>Strateginc Groupe Financier</strong> s\'est terminé en août 2026. Je suis maintenant à la recherche d\'un <strong>stage pour l\'hiver 2027</strong>.',
      'hero.btnProjects': 'Voir mes projets',
      'hero.btnContact': 'Contacter un employeur →',
      'hero.metaProjects': 'projets réalisés',
      'hero.metaTech': 'technologies maîtrisées',
      'hero.metaYear': 'année en cours',
      'hero.badge': 'Ouvert aux opportunités',
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
      'contact.title': 'Recrutez-moi pour l\'hiver 2027.',
      'contact.sub': 'Je recherche un stage en informatique pour l\'hiver 2027 — développement, automatisation, analyse, ou tout autre rôle en TI. Employeurs : utilisez le formulaire ci-contre, je vous réponds rapidement.',
      'contact.openForm': 'Accéder au formulaire',
      'contact.formKicker': 'Formulaire employeur',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      'contact.nameLabel': 'Nom',
      'contact.companyLabel': 'Entreprise',
      'contact.emailLabel': 'Email',
      'contact.messageLabel': 'Message',
      'contact.namePlaceholder': 'Votre nom',
      'contact.companyPlaceholder': 'Nom de l\'entreprise',
      'contact.emailPlaceholder': 'votre.email@exemple.com',
      'contact.messagePlaceholder': 'Parlez-moi du stage hiver 2027...',
      'contact.submit': 'Envoyer le message',
      'contact.success': 'Merci ! Votre client mail va s\'ouvrir pour envoyer le message.',
      'contact.errorRequired': 'Veuillez remplir tous les champs obligatoires.',
      'contact.errorEmail': 'Veuillez entrer une adresse email valide.',
      'rec.title': 'Recommandations',
      'rec.sub': 'Témoignages de superviseurs et collègues — publiés après validation.',
      'rec.empty': 'Aucune recommandation publiée pour le moment.',
      'rec.formKicker': 'Espace superviseur',
      'rec.formTitle': 'Laisser une recommandation',
      'rec.formNote': 'La recommandation est envoyée à chav1301@usherbrooke.ca. Elle n\'apparaîtra sur le portfolio qu\'après mon approbation.',
      'rec.nameLabel': 'Votre nom',
      'rec.placeLabel': 'Où avons-nous travaillé ensemble ?',
      'rec.messageLabel': 'Votre recommandation',
      'rec.namePlaceholder': 'Prénom et nom',
      'rec.placePlaceholder': 'Entreprise, équipe ou projet',
      'rec.messagePlaceholder': 'Quelques lignes sur notre collaboration...',
      'rec.submit': 'Envoyer pour validation',
      'rec.success': 'Merci. Votre recommandation a été envoyée à chav1301@usherbrooke.ca. Elle sera publiée seulement après ma validation.',
      'rec.errorRequired': 'Veuillez remplir les trois champs.',
      'rec.errorSend': 'L\'envoi a échoué. Réessayez, ou écrivez directement à chav1301@usherbrooke.ca.',
      'rec.workedAt': 'Collaboration',
      'admin.open': 'Modération',
      'admin.title': 'Modération des recommandations',
      'admin.pinHint': 'Entrez votre code pour approuver ou refuser les demandes.',
      'admin.pinLabel': 'Code d\'approbation',
      'admin.unlock': 'Déverrouiller',
      'admin.pinError': 'Code incorrect.',
      'admin.help': 'Les nouvelles demandes arrivent aussi par email. Vous pouvez les ajouter ici, puis les publier.',
      'admin.pendingTitle': 'En attente',
      'admin.none': 'Aucune demande en attente sur cet appareil.',
      'admin.approve': 'Approuver',
      'admin.reject': 'Refuser',
      'admin.manualTitle': 'Ajouter une recommandation reçue',
      'admin.publish': 'Publier sur le portfolio',
      'admin.published': 'Recommandation publiée.',
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
      'nav.recommendations': 'Recommendations',
      'nav.contact': 'Contact me',
      'nav.menuOpen': 'Open menu',
      'nav.langSwitch': 'Switch to French',
      'nav.themeDark': 'Enable dark mode',
      'nav.themeLight': 'Enable light mode',
      'hero.eyebrow': 'Seeking an internship · Winter 2027',
      'hero.title': 'Hi, I\'m <span class="accent">Vernens Charles</span>.<br />Junior Web Developer<span class="accent-dot">.</span>',
      'hero.lead': 'Web development student at the <strong>Université de Sherbrooke</strong> (Quebec). My internship at <strong>Strateginc Groupe Financier</strong> ended in August 2026. I am now looking for a <strong>Winter 2027 internship</strong>.',
      'hero.btnProjects': 'View my projects',
      'hero.btnContact': 'Employer contact →',
      'hero.metaProjects': 'projects completed',
      'hero.metaTech': 'technologies mastered',
      'hero.metaYear': 'current year',
      'hero.badge': 'Open to opportunities',
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
      'contact.title': 'Hire me for Winter 2027.',
      'contact.sub': 'I am looking for a computer science internship for Winter 2027 — development, automation, analysis, or any other IT role. Employers: use the form on the right and I will get back to you quickly.',
      'contact.openForm': 'Open the form',
      'contact.formKicker': 'Employer form',
      'contact.linkedin': 'LinkedIn',
      'contact.github': 'GitHub',
      'contact.nameLabel': 'Name',
      'contact.companyLabel': 'Company',
      'contact.emailLabel': 'Email',
      'contact.messageLabel': 'Message',
      'contact.namePlaceholder': 'Your name',
      'contact.companyPlaceholder': 'Company name',
      'contact.emailPlaceholder': 'your.email@example.com',
      'contact.messagePlaceholder': 'Tell me about the Winter 2027 internship...',
      'contact.submit': 'Send message',
      'contact.success': 'Thanks! Your email client will open to send the message.',
      'contact.errorRequired': 'Please fill in all required fields.',
      'contact.errorEmail': 'Please enter a valid email address.',
      'rec.title': 'Recommendations',
      'rec.sub': 'Testimonials from supervisors and colleagues — published after validation.',
      'rec.empty': 'No published recommendations yet.',
      'rec.formKicker': 'Supervisor space',
      'rec.formTitle': 'Leave a recommendation',
      'rec.formNote': 'The recommendation is sent to chav1301@usherbrooke.ca. It will appear on the portfolio only after I approve it.',
      'rec.nameLabel': 'Your name',
      'rec.placeLabel': 'Where did we work together?',
      'rec.messageLabel': 'Your recommendation',
      'rec.namePlaceholder': 'First and last name',
      'rec.placePlaceholder': 'Company, team, or project',
      'rec.messagePlaceholder': 'A few lines about our collaboration...',
      'rec.submit': 'Send for review',
      'rec.success': 'Thank you. Your recommendation was sent to chav1301@usherbrooke.ca. It will be published only after I approve it.',
      'rec.errorRequired': 'Please fill in all three fields.',
      'rec.errorSend': 'Sending failed. Please try again, or email chav1301@usherbrooke.ca directly.',
      'rec.workedAt': 'Worked together at',
      'admin.open': 'Moderation',
      'admin.title': 'Recommendation moderation',
      'admin.pinHint': 'Enter your code to approve or reject requests.',
      'admin.pinLabel': 'Approval code',
      'admin.unlock': 'Unlock',
      'admin.pinError': 'Incorrect code.',
      'admin.help': 'New requests also arrive by email. You can add them here, then publish them.',
      'admin.pendingTitle': 'Pending',
      'admin.none': 'No pending requests on this device.',
      'admin.approve': 'Approve',
      'admin.reject': 'Reject',
      'admin.manualTitle': 'Add a recommendation received by email',
      'admin.publish': 'Publish on the portfolio',
      'admin.published': 'Recommendation published.',
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
    if (typeof renderApprovedRecs === 'function') renderApprovedRecs();
    if (typeof renderAdminPending === 'function') renderAdminPending();
  };

  let renderApprovedRecs = () => {};
  let renderAdminPending = () => {};

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
    const companyInput = document.getElementById('contactCompany');
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
      const company = companyInput?.value.trim() || '';
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
          ? `Winter 2027 internship — ${name}${company ? ` (${company})` : ''}`
          : `Stage hiver 2027 — ${name}${company ? ` (${company})` : ''}`
      );
      const body = encodeURIComponent(
        currentLang === 'en'
          ? `Name: ${name}\nCompany: ${company || '—'}\nEmail: ${email}\n\nMessage:\n${message}`
          : `Nom : ${name}\nEntreprise : ${company || '—'}\nEmail : ${email}\n\nMessage :\n${message}`
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

  // Recommandations + modération
  const REC_PENDING_KEY = 'portfolio_rec_pending';
  const REC_APPROVED_KEY = 'portfolio_rec_approved';
  const ADMIN_PIN = 'VC-hiver-2027';
  const recApprovedEl = document.getElementById('recApproved');
  const recForm = document.getElementById('recForm');
  const recStatus = document.getElementById('recStatus');
  const adminModal = document.getElementById('adminModal');
  const adminOpen = document.getElementById('adminOpen');
  const adminClose = document.getElementById('adminClose');
  const adminPinForm = document.getElementById('adminPinForm');
  const adminPin = document.getElementById('adminPin');
  const adminPinStatus = document.getElementById('adminPinStatus');
  const adminBody = document.getElementById('adminBody');
  const adminPending = document.getElementById('adminPending');
  const adminManualForm = document.getElementById('adminManualForm');
  let publishedSeed = [];
  let adminUnlocked = false;

  const readList = (key) => {
    try {
      const raw = localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  const writeList = (key, list) => {
    localStorage.setItem(key, JSON.stringify(list));
  };

  const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const mergedApproved = () => {
    const local = readList(REC_APPROVED_KEY);
    const map = new Map();
    [...publishedSeed, ...local].forEach((item) => {
      if (item && item.id) map.set(item.id, item);
    });
    return [...map.values()];
  };

  renderApprovedRecs = () => {
    if (!recApprovedEl) return;
    const items = mergedApproved();
    recApprovedEl.querySelectorAll('.rec-card').forEach((card) => card.remove());
    items.forEach((item) => {
      const article = document.createElement('article');
      article.className = 'rec-card';
      article.innerHTML = `
        <p class="rec-quote">${escapeHtml(item.message)}</p>
        <div class="rec-meta">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(t('rec.workedAt'))} ${escapeHtml(item.workplace)}</span>
        </div>
      `;
      recApprovedEl.appendChild(article);
    });
  };

  renderAdminPending = () => {
    if (!adminPending) return;
    const pending = readList(REC_PENDING_KEY);
    if (!pending.length) {
      adminPending.innerHTML = `<p class="admin-none">${t('admin.none')}</p>`;
      return;
    }
    adminPending.innerHTML = `<h3>${t('admin.pendingTitle')}</h3>` + pending.map((item) => `
      <article class="admin-card" data-id="${escapeHtml(item.id)}">
        <p class="rec-quote">${escapeHtml(item.message)}</p>
        <p><strong>${escapeHtml(item.name)}</strong> · ${escapeHtml(item.workplace)}</p>
        <div class="admin-actions">
          <button type="button" class="btn btn-primary" data-action="approve">${t('admin.approve')}</button>
          <button type="button" class="btn btn-ghost" data-action="reject">${t('admin.reject')}</button>
        </div>
      </article>
    `).join('');
  };

  const showRecStatus = (message, type) => {
    if (!recStatus) return;
    recStatus.hidden = false;
    recStatus.textContent = message;
    recStatus.classList.remove('is-success', 'is-error');
    recStatus.classList.add(type === 'success' ? 'is-success' : 'is-error');
  };

  if (recForm) {
    recForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('recName')?.value.trim() || '';
      const workplace = document.getElementById('recWorkplace')?.value.trim() || '';
      const message = document.getElementById('recMessage')?.value.trim() || '';
      const submitBtn = recForm.querySelector('button[type="submit"]');
      const fields = ['recName', 'recWorkplace', 'recMessage']
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      fields.forEach((field) => field.classList.remove('is-invalid'));

      if (!name || !workplace || !message) {
        fields.forEach((field) => {
          if (!field.value.trim()) field.classList.add('is-invalid');
        });
        showRecStatus(t('rec.errorRequired'), 'error');
        return;
      }

      const rec = { id: uid(), name, workplace, message, createdAt: new Date().toISOString() };
      writeList(REC_PENDING_KEY, [...readList(REC_PENDING_KEY), rec]);

      const subject = currentLang === 'en'
        ? `Recommendation to approve — ${name}`
        : `Recommandation à valider — ${name}`;

      if (submitBtn) submitBtn.disabled = true;

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            workplace,
            message,
            _subject: subject,
            _template: 'table',
            _captcha: 'false',
          }),
        });
        if (!response.ok) throw new Error('send-failed');
        const data = await response.json().catch(() => ({}));
        if (data.success === false) throw new Error('send-failed');
        showRecStatus(t('rec.success'), 'success');
        recForm.reset();
      } catch {
        showRecStatus(t('rec.errorSend'), 'error');
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  const setAdminOpen = (open) => {
    if (!adminModal) return;
    adminModal.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) {
      adminUnlocked = false;
      if (adminBody) adminBody.hidden = true;
      if (adminPinForm) adminPinForm.hidden = false;
      if (adminPin) adminPin.value = '';
      if (adminPinStatus) adminPinStatus.hidden = true;
    }
  };

  adminOpen?.addEventListener('click', () => setAdminOpen(true));
  adminClose?.addEventListener('click', () => setAdminOpen(false));
  adminModal?.addEventListener('click', (e) => {
    if (e.target === adminModal) setAdminOpen(false);
  });

  adminPinForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((adminPin?.value || '') !== ADMIN_PIN) {
      if (adminPinStatus) {
        adminPinStatus.hidden = false;
        adminPinStatus.textContent = t('admin.pinError');
        adminPinStatus.classList.add('is-error');
        adminPinStatus.classList.remove('is-success');
      }
      return;
    }
    adminUnlocked = true;
    if (adminPinForm) adminPinForm.hidden = true;
    if (adminBody) adminBody.hidden = false;
    renderAdminPending();
  });

  adminPending?.addEventListener('click', (e) => {
    const button = e.target.closest('button[data-action]');
    const card = e.target.closest('.admin-card');
    if (!button || !card || !adminUnlocked) return;
    const id = card.getAttribute('data-id');
    const pending = readList(REC_PENDING_KEY);
    const rec = pending.find((item) => item.id === id);
    if (!rec) return;
    const nextPending = pending.filter((item) => item.id !== id);
    writeList(REC_PENDING_KEY, nextPending);
    if (button.getAttribute('data-action') === 'approve') {
      writeList(REC_APPROVED_KEY, [...readList(REC_APPROVED_KEY), rec]);
      renderApprovedRecs();
    }
    renderAdminPending();
  });

  adminManualForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!adminUnlocked) return;
    const name = document.getElementById('adminName')?.value.trim() || '';
    const workplace = document.getElementById('adminPlace')?.value.trim() || '';
    const message = document.getElementById('adminMessage')?.value.trim() || '';
    if (!name || !workplace || !message) return;
    const rec = { id: uid(), name, workplace, message, createdAt: new Date().toISOString() };
    writeList(REC_APPROVED_KEY, [...readList(REC_APPROVED_KEY), rec]);
    adminManualForm.reset();
    renderApprovedRecs();
  });

  fetch('recommendations.json')
    .then((res) => (res.ok ? res.json() : { approved: [] }))
    .then((data) => {
      publishedSeed = Array.isArray(data?.approved) ? data.approved : [];
      renderApprovedRecs();
    })
    .catch(() => {
      renderApprovedRecs();
    });

  renderApprovedRecs();
})();
