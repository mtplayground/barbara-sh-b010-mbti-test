export const en = {
  translation: {
    app: {
      title: 'Discover Your MBTI Personality Type',
    },
    header: {
      subtitle: 'Self-reflection test',
    },
    actions: {
      startTest: 'Start Test',
      continueTest: 'Continue Test',
      previous: 'Previous',
      next: 'Next',
      submit: 'Submit',
      viewResult: 'View Result',
      restart: 'Restart',
      share: 'Share',
      copy: 'Copy',
      copied: 'Copied',
      backHome: 'Back Home',
      learnMore: 'Learn More',
    },
    languageToggle: {
      label: 'Language',
      en: 'English',
      zhCN: 'Chinese',
    },
    labels: {
      question: 'Question',
      questionCount: 'Question {{current}} of {{total}}',
      progress: 'Progress',
      completed: 'Completed',
      unanswered: 'Unanswered',
      selectedAnswer: 'Selected answer',
      scoreBreakdown: 'Score breakdown',
      personalityType: 'Personality type',
      strengths: 'Strengths',
      challenges: 'Potential challenges',
      workStyle: 'Ideal work environment',
      communicationTips: 'Communication and relationship tips',
    },
    likert: {
      stronglyDisagree: 'Strongly disagree',
      disagree: 'Disagree',
      neutral: 'Neutral',
      agree: 'Agree',
      stronglyAgree: 'Strongly agree',
    },
    nav: {
      primary: 'Primary navigation',
      home: 'Home',
      test: 'Test',
      result: 'Result',
      about: 'About',
      homeAria: 'Discover Your MBTI Personality Type home',
    },
    home: {
      eyebrow: 'MBTI self-reflection test',
      description:
        'A calm, bilingual personality test experience is taking shape on a reusable React, TypeScript, Vite, and Tailwind foundation.',
      designDirection: 'Design direction',
      visualToneLabel: 'Visual tone',
      visualToneValue: 'Calm, modern, professional',
      layoutLabel: 'Layout',
      layoutValue: 'Mobile-first with readable spacing',
      accentsLabel: 'Accents',
      accentsValue: 'Soft purple and blue gradients',
    },
    test: {
      eyebrow: 'Test',
      title: 'Test',
      description:
        'The routed test page is ready for the question flow that will be added in a later issue.',
    },
    result: {
      eyebrow: 'Result',
      title: 'Result',
      description:
        'The routed result page is ready to display a completed personality type once scoring and answer submission are implemented.',
    },
    about: {
      eyebrow: 'About / Disclaimer',
      title: 'About / Disclaimer',
      description:
        'This route is reserved for the project context and disclaimer content that will be expanded in a later issue.',
    },
    validation: {
      answerRequired: 'Select an answer before continuing.',
      allQuestionsRequired: 'Please answer all questions before submitting.',
      missingAnswers: 'Some questions still need answers.',
      resultUnavailable: 'Complete the test before viewing your result.',
      shareUnavailable: 'A result is needed before share text can be created.',
    },
    status: {
      loading: 'Loading',
      saving: 'Saving',
      saved: 'Saved',
      ready: 'Ready',
    },
    disclaimer: {
      title: 'Disclaimer',
      full: 'This test is for self-reflection and entertainment only. It is not a clinical, psychological, hiring, or diagnostic assessment.',
    },
  },
} as const;
