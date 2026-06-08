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
      skipToContent: 'Skip to main content',
      home: 'Home',
      test: 'Test',
      result: 'Result',
      about: 'About',
      homeAria: 'Discover Your MBTI Personality Type home',
    },
    home: {
      eyebrow: 'MBTI self-reflection test',
      subtitle:
        'Explore how you tend to gain energy, process information, make decisions, and organize daily life.',
      description:
        'Answer {{count}} short Likert-style statements and receive a reflective four-letter personality type result.',
      summaryLabel: 'Test summary',
      questionCountLabel: 'Questions',
      formatLabel: 'Format',
      formatValue: 'Five-point agreement scale',
      languageLabel: 'Languages',
      languageValue: 'English and Chinese',
      dimensionsEyebrow: 'Four dimensions',
      dimensionsTitle: 'What the test looks at',
      dimensionsIntro:
        'MBTI-style results combine one preference from each dimension to form a four-letter type.',
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
      interpretationTitle: 'Detailed interpretation',
      breakdownIntro:
        'Scores show the total agreement points assigned to each pole in every dimension.',
      shareTitle: 'Shareable result',
      shareDescription:
        'Use this copy-ready text when you want to share your result.',
      shareText:
        'My result on {{appTitle}} is {{typeCode}} — {{title}}.\n\n{{summary}}',
    },
    about: {
      eyebrow: 'About / Disclaimer',
      title: 'About / Disclaimer',
      description:
        'This test is an informal self-reflection tool designed to make personality-language easier to explore.',
      informalTitle: 'Informal self-reflection',
      informalBody:
        'The questions and results are meant to support personal reflection, conversation, and entertainment. They should not be treated as a fixed label or a complete description of any person.',
      notOfficialTitle: 'Not an official Myers-Briggs assessment',
      notOfficialBody:
        'This experience is not affiliated with, endorsed by, or a substitute for any official Myers-Briggs assessment, certified practitioner, clinical evaluation, hiring process, or diagnostic tool.',
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
