export const content = {
  pt: {
    nav: {
      download: "Entrar na lista",
      lang: "EN",
      langHref: "/en/",
    },
    hero: {
      badge: "Tutor de IA para o ENEM e vestibular",
      headline: ["IA por voz que organiza o estudo", "a partir do material real do aluno."],
      sub: "A Clari é um tutor por voz que lê sua prova, identifica onde você trava e organiza o estudo nos seus pontos mais fracos — tudo em diálogo natural.",
      cta: "Baixar grátis",
      ctaSub: "Sem cartão de crédito",
      stat1: { value: "4,24★", label: "avaliação dos alunos" },
      stat2: { value: "31", label: "matérias do currículo" },
      stat3: { value: "≤1,5s", label: "primeiro token de voz" },
    },
    problem: {
      eyebrow: "A dor que você conhece",
      headline: "Estudar sozinho é difícil",
      items: [
        {
          icon: "clock",
          title: "Travado às 23h",
          desc: "A dúvida aparece quando não tem ninguém pra ajudar — professor foi embora, grupo do WhatsApp silencioso.",
        },
        {
          icon: "zap",
          title: "Explicação rápida demais",
          desc: "O professor foi rápido, você ficou com vergonha de perguntar de novo. O conteúdo acumulou.",
        },
        {
          icon: "dollar",
          title: "Tutor humano custa R$80–150/h",
          desc: "Aula particular é inacessível pra maioria. Clari custa R$39,90/mês — e está sempre disponível.",
        },
      ],
    },
    features: {
      eyebrow: "Como a Clari funciona",
      headline: "Tudo em\ndiálogo natural.",
      items: [
        {
          tag: "01",
          title: "Tire uma foto.",
          desc: "Prova, apostila, lista ou livro. A Clari lê automaticamente e entende o contexto do seu material.",
          highlight: "Leitura visual",
        },
        {
          tag: "02",
          title: "Fale com ela.",
          desc: "Pergunte por voz. Responda por voz. Aprenda em diálogo natural, como com um tutor particular disponível 24h.",
          highlight: "Voz em tempo real",
        },
        {
          tag: "03",
          title: "Identifica onde você trava.",
          desc: "A Clari identifica onde você perde pontos e reforça automaticamente os temas mais difíceis antes que virem prejuízo na prova.",
          highlight: "Diagnóstico automático",
        },
        {
          tag: "04",
          title: "Acompanha sua evolução.",
          desc: "Com o tempo, ajusta o próximo passo com base no seu progresso real. Visível para o aluno e para os pais.",
          highlight: "Evolução adaptativa",
        },
      ],
    },
    howItWorks: {
      eyebrow: "Como funciona",
      headline: "Três passos para\nentender de vez",
      steps: [
        {
          num: "01",
          title: "Envie sua dúvida",
          desc: "Por voz, texto ou foto do exercício. A Clari entende o contexto completo.",
        },
        {
          num: "02",
          title: "A Clari guia",
          desc: "Com perguntas socráticas, a Clari ajuda você a construir o raciocínio. Nunca te deixa só.",
        },
        {
          num: "03",
          title: "Você entende — de verdade",
          desc: "Não só a resposta: o conceito por trás. Fica na memória para a prova.",
        },
      ],
    },
    social: {
      eyebrow: "O que dizem alunos e pais",
      headline: "Pesquisa de campo,\nnão marketing",
      studentCard: {
        rating: "4,24",
        label: "avaliação dos alunos",
        sub: "Pesquisa com 17 alunos BR · abril 2026",
        pct: "76%",
        pctLabel: "deram nota ≥ 4",
        quotes: [
          { text: "\"Explica passo a passo sem me dar a resposta. Aprendi mais em uma semana do que em um mês.\"", name: "Lucas, 16 anos" },
          { text: "\"Ajuda muito com Matemática e Química. É como ter um professor 24h.\"", name: "Beatriz, 15 anos" },
        ],
      },
      parentCard: {
        rating: "4,11",
        label: "avaliação dos pais",
        sub: "Pesquisa com 18 pais BR · abril 2026",
        pct: "72%",
        pctLabel: "deram nota ≥ 4",
        quotes: [
          { text: "\"Finalmente um app que ensina em vez de entregar a resposta. Meu filho está mais independente.\"", name: "Ana Paula, mãe" },
          { text: "\"Vale muito mais que o tutor humano que pagava R$120/hora.\"", name: "Roberto, pai" },
        ],
      },
    },
    pricing: {
      eyebrow: "Planos",
      headline: "Simples e\ntransparente",
      sub: "Comece grátis. Faça upgrade quando precisar.",
      plans: [
        {
          name: "Free",
          price: "R$0",
          period: "",
          highlight: false,
          features: [
            "5 interações de voz por dia",
            "Texto ilimitado",
            "31 matérias disponíveis",
            "Roteiro básico de estudos",
          ],
          cta: "Baixar grátis",
          ctaStyle: "outline",
        },
        {
          name: "Premium",
          price: "R$39,90",
          period: "/mês",
          annual: "ou R$299/ano (economize 37%)",
          highlight: true,
          features: [
            "Voz ilimitada",
            "Upload de fotos (dever, apostila)",
            "Análise de erros por matéria",
            "Flashcards automáticos",
            "Portal dos pais",
            "Suporte prioritário",
          ],
          cta: "Começar Premium",
          ctaStyle: "filled",
          badge: "Mais popular",
        },
        {
          name: "Família",
          price: "R$69,90",
          period: "/mês",
          highlight: false,
          features: [
            "Tudo do Premium",
            "Até 3 filhos",
            "Dashboard unificado",
            "Alertas de inatividade",
            "Relatório semanal",
          ],
          cta: "Começar Família",
          ctaStyle: "outline",
        },
      ],
    },
    faq: {
      eyebrow: "Dúvidas frequentes",
      headline: "Tudo que você\nprecisa saber",
      items: [
        {
          q: "O app é seguro para adolescentes?",
          a: "Sim. A Clari tem guardrails que mantêm as conversas dentro do contexto educacional. Pais podem acompanhar todas as sessões pelo portal parental. Seguimos a LGPD com consentimento parental para menores de 18 anos.",
        },
        {
          q: "O app entrega as respostas dos exercícios?",
          a: "Não — e isso é intencional. A Clari usa o método socrático: guia você até a resposta com perguntas, nunca a entrega diretamente. Alunos que testaram aprendem muito mais assim.",
        },
        {
          q: "Funciona com o material do meu colégio?",
          a: "Sim. Você pode fotografar qualquer página de livro, apostila ou caderno. A Clari analisa o conteúdo e adapta a explicação ao que está no material.",
        },
        {
          q: "Como os pais acompanham o uso?",
          a: "O plano Premium inclui um portal exclusivo para pais: histórico de sessões, matérias estudadas, frequência diária e alertas configuráveis. Tudo em tempo real.",
        },
        {
          q: "Qual é a diferença para o ChatGPT?",
          a: "O ChatGPT é um chatbot genérico que entrega respostas diretas. A Clari é especializada em K-12 brasileiro, alinhada ao ENEM, usa método socrático, e mantém o currículo do aluno em memória. São produtos completamente diferentes.",
        },
      ],
    },
    cta: {
      headline: "iOS já disponível",
      sub: "Baixe a Clari grátis no App Store. No Android, as 20 primeiras inscrições ganham 6 meses de plano Premium.",
      iosLabel: "iPhone",
      androidLabel: "Android",
      iosUrl: "https://apps.apple.com/br/app/clari/id6769223287",
      iosSubmit: "Baixar no App Store",
      emailPlaceholder: "seu@email.com",
      submit: "Quero ser avisado",
      successTitle: "Anotado!",
      successSub: "Você está na lista. As 20 primeiras vagas Android ganham 6 meses de Premium grátis.",
      note: "Android em breve — as 20 primeiras inscrições ganham 6 meses de Premium grátis.",
      errorMsg: "Algo deu errado. Tente de novo.",
    },
    footer: {
      tagline: "A mentora de IA para alunos de 13–18 anos.",
      links: [
        { label: "Termos de uso", href: "#" },
        { label: "Privacidade", href: "#" },
        { label: "Contato", href: "mailto:contato@tutorai.app" },
      ],
      copy: `© ${new Date().getFullYear()} Clari. Todos os direitos reservados.`,
    },
  },
  en: {
    nav: {
      download: "Join waitlist",
      lang: "PT",
      langHref: "/",
    },
    hero: {
      badge: "AI Tutor for Brazilian students",
      headline: ["Reads your exam.", "Finds what's missing."],
      sub: "Clari is a voice tutor that reads your exam, identifies where you get stuck, and organizes your study around your weakest points — all in natural dialogue.",
      cta: "Download Free",
      ctaSub: "No credit card required",
      stat1: { value: "4.24★", label: "student rating" },
      stat2: { value: "31", label: "curriculum subjects" },
      stat3: { value: "≤1.5s", label: "first voice token" },
    },
    problem: {
      eyebrow: "The pain you know",
      headline: "Studying alone is hard",
      items: [
        {
          icon: "clock",
          title: "Stuck at 11pm",
          desc: "The question comes when no one's around — teacher's gone, study group silent. You're on your own.",
        },
        {
          icon: "zap",
          title: "Teacher went too fast",
          desc: "You were too embarrassed to ask again. Now the gap keeps growing with every new topic.",
        },
        {
          icon: "dollar",
          title: "Human tutors cost R$80–150/h",
          desc: "Private tutoring is out of reach for most. Clari costs R$39.90/month — and is always available.",
        },
      ],
    },
    features: {
      eyebrow: "How Clari works",
      headline: "All in\nnatural dialogue.",
      items: [
        {
          tag: "01",
          title: "Take a photo.",
          desc: "Exam, worksheet, textbook. Clari reads your material automatically and understands the full context.",
          highlight: "Visual reading",
        },
        {
          tag: "02",
          title: "Talk to it.",
          desc: "Ask by voice. Reply by voice. Learn through natural dialogue, like a personal tutor available 24/7.",
          highlight: "Real-time voice",
        },
        {
          tag: "03",
          title: "Finds where you struggle.",
          desc: "Clari identifies where you lose points and automatically reinforces your hardest topics before they become exam-day mistakes.",
          highlight: "Smart diagnosis",
        },
        {
          tag: "04",
          title: "Tracks your progress.",
          desc: "Over time, Clari adjusts the next step based on your real progress. Visible to both student and parents.",
          highlight: "Adaptive progress",
        },
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      headline: "Three steps to\nactually understand",
      steps: [
        {
          num: "01",
          title: "Ask your question",
          desc: "By voice, text, or homework photo. Clari understands the full context.",
        },
        {
          num: "02",
          title: "Clari guides you",
          desc: "With Socratic questions, Clari helps you build the reasoning. Never leaves you stuck.",
        },
        {
          num: "03",
          title: "You truly understand",
          desc: "Not just the answer — the concept behind it. The kind that sticks for the exam.",
        },
      ],
    },
    social: {
      eyebrow: "What students and parents say",
      headline: "Field research,\nnot marketing",
      studentCard: {
        rating: "4.24",
        label: "student rating",
        sub: "Research with 17 Brazilian students · Apr 2026",
        pct: "76%",
        pctLabel: "rated it 4 or above",
        quotes: [
          { text: "\"Explains step by step without giving me the answer. Learned more in a week than in a month.\"", name: "Lucas, 16" },
          { text: "\"Really helps with Math and Chemistry. It's like having a teacher available 24/7.\"", name: "Beatriz, 15" },
        ],
      },
      parentCard: {
        rating: "4.11",
        label: "parent rating",
        sub: "Research with 18 Brazilian parents · Apr 2026",
        pct: "72%",
        pctLabel: "rated it 4 or above",
        quotes: [
          { text: "\"Finally an app that teaches instead of just handing over the answer. My son is much more independent now.\"", name: "Ana Paula, mother" },
          { text: "\"Way more value than the human tutor I paid R$120/hour for.\"", name: "Roberto, father" },
        ],
      },
    },
    pricing: {
      eyebrow: "Plans",
      headline: "Simple and\ntransparent",
      sub: "Start free. Upgrade when you need to.",
      plans: [
        {
          name: "Free",
          price: "R$0",
          period: "",
          highlight: false,
          features: [
            "5 voice interactions per day",
            "Unlimited text",
            "31 subjects available",
            "Basic study schedule",
          ],
          cta: "Download Free",
          ctaStyle: "outline",
        },
        {
          name: "Premium",
          price: "R$39.90",
          period: "/month",
          annual: "or R$299/year (save 37%)",
          highlight: true,
          features: [
            "Unlimited voice",
            "Photo uploads (homework, textbooks)",
            "Error analysis by subject",
            "Automatic flashcards",
            "Parent portal",
            "Priority support",
          ],
          cta: "Start Premium",
          ctaStyle: "filled",
          badge: "Most popular",
        },
        {
          name: "Family",
          price: "R$69.90",
          period: "/month",
          highlight: false,
          features: [
            "Everything in Premium",
            "Up to 3 children",
            "Unified dashboard",
            "Inactivity alerts",
            "Weekly report",
          ],
          cta: "Start Family",
          ctaStyle: "outline",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      headline: "Everything you\nneed to know",
      items: [
        {
          q: "Is the app safe for teenagers?",
          a: "Yes. Clari has guardrails that keep conversations within educational context. Parents can monitor all sessions via the parental portal. We comply with LGPD with parental consent for users under 18.",
        },
        {
          q: "Does the app give homework answers?",
          a: "No — and that's intentional. Clari uses the Socratic method: guides you to the answer with questions, never gives it directly. Students in our research learned significantly more this way.",
        },
        {
          q: "Does it work with my school's materials?",
          a: "Yes. You can photograph any textbook page, handout, or notebook. Clari analyzes the content and adapts the explanation to what's in your materials.",
        },
        {
          q: "How do parents track usage?",
          a: "Premium plan includes a dedicated parent portal: session history, subjects studied, daily frequency, and configurable alerts. All in real time.",
        },
        {
          q: "How is this different from ChatGPT?",
          a: "ChatGPT is a generic chatbot that delivers direct answers. Clari is specialized for Brazilian K-12, aligned with ENEM, uses the Socratic method, and maintains the student's curriculum in memory. Completely different products.",
        },
      ],
    },
    cta: {
      headline: "Now on iOS",
      sub: "Download Clari free on the App Store. On Android, the first 20 sign-ups get 6 months of Premium free.",
      iosLabel: "iPhone",
      androidLabel: "Android",
      iosUrl: "https://apps.apple.com/ca/app/clari-tutor/id6769223287",
      iosSubmit: "Download on the App Store",
      emailPlaceholder: "your@email.com",
      submit: "Notify me",
      successTitle: "You're in!",
      successSub: "You're on the list. The first 20 Android sign-ups get 6 months of Premium free.",
      note: "Android coming soon — first 20 sign-ups get 6 months of Premium free.",
      errorMsg: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "AI tutor for students aged 13–18.",
      links: [
        { label: "Terms of use", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Contact", href: "mailto:contact@tutorai.app" },
      ],
      copy: `© ${new Date().getFullYear()} Clari. All rights reserved.`,
    },
  },
};

export type Content = typeof content.pt;
