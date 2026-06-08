import type { Language } from '../i18n';

export const questionDimensions = ['EI', 'SN', 'TF', 'JP'] as const;
export const questionPoles = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'] as const;

export type QuestionDimension = (typeof questionDimensions)[number];
export type QuestionPole = (typeof questionPoles)[number];
export type LocalizedText = Record<Language, string>;

export interface Question {
  id: string;
  dimension: QuestionDimension;
  pole: QuestionPole;
  text: LocalizedText;
}

export interface DimensionDefinition {
  dimension: QuestionDimension;
  poles: readonly [QuestionPole, QuestionPole];
  label: LocalizedText;
  description: LocalizedText;
}

export const dimensionDefinitions = [
  {
    dimension: 'EI',
    poles: ['E', 'I'],
    label: {
      en: 'Energy source and social preference',
      'zh-CN': '能量来源与社交偏好',
    },
    description: {
      en: 'How you gain energy and prefer to engage with people and ideas.',
      'zh-CN': '你如何获得能量，以及偏好如何与人和想法互动。',
    },
  },
  {
    dimension: 'SN',
    poles: ['S', 'N'],
    label: {
      en: 'Information processing style',
      'zh-CN': '信息处理方式',
    },
    description: {
      en: 'How you notice, interpret, and trust information.',
      'zh-CN': '你如何观察、理解并信任信息。',
    },
  },
  {
    dimension: 'TF',
    poles: ['T', 'F'],
    label: {
      en: 'Decision-making style',
      'zh-CN': '决策方式',
    },
    description: {
      en: 'What you tend to prioritize when evaluating choices.',
      'zh-CN': '你在评估选择时通常优先考虑什么。',
    },
  },
  {
    dimension: 'JP',
    poles: ['J', 'P'],
    label: {
      en: 'Planning and lifestyle preference',
      'zh-CN': '规划与生活方式偏好',
    },
    description: {
      en: 'How you prefer to organize work, plans, and change.',
      'zh-CN': '你偏好如何组织工作、计划与变化。',
    },
  },
] as const satisfies readonly DimensionDefinition[];

export const questionBank = [
  {
    id: 'ei-e-1',
    dimension: 'EI',
    pole: 'E',
    text: {
      en: 'I feel energized after spending time with groups of people.',
      'zh-CN': '和一群人相处后，我会感到更有活力。',
    },
  },
  {
    id: 'ei-e-2',
    dimension: 'EI',
    pole: 'E',
    text: {
      en: 'I often think out loud when working through ideas.',
      'zh-CN': '梳理想法时，我常常会边说边想。',
    },
  },
  {
    id: 'ei-e-3',
    dimension: 'EI',
    pole: 'E',
    text: {
      en: 'I enjoy being part of lively conversations.',
      'zh-CN': '我喜欢参与热烈的谈话。',
    },
  },
  {
    id: 'ei-e-4',
    dimension: 'EI',
    pole: 'E',
    text: {
      en: 'I seek out social settings when I want momentum.',
      'zh-CN': '当我想获得动力时，会主动寻找社交场合。',
    },
  },
  {
    id: 'ei-i-1',
    dimension: 'EI',
    pole: 'I',
    text: {
      en: 'I prefer quiet time to recharge after a busy day.',
      'zh-CN': '忙碌一天后，我更喜欢用安静的时间恢复精力。',
    },
  },
  {
    id: 'ei-i-2',
    dimension: 'EI',
    pole: 'I',
    text: {
      en: 'I like to reflect on ideas before sharing them.',
      'zh-CN': '分享想法前，我喜欢先独自思考。',
    },
  },
  {
    id: 'ei-i-3',
    dimension: 'EI',
    pole: 'I',
    text: {
      en: 'I feel most focused when I have uninterrupted time alone.',
      'zh-CN': '当我有不被打扰的独处时间时，最容易集中注意力。',
    },
  },
  {
    id: 'ei-i-4',
    dimension: 'EI',
    pole: 'I',
    text: {
      en: 'I choose a few deep conversations over many casual interactions.',
      'zh-CN': '相比许多轻松闲聊，我更喜欢少数深入交流。',
    },
  },
  {
    id: 'sn-s-1',
    dimension: 'SN',
    pole: 'S',
    text: {
      en: 'I trust information that is concrete and directly observable.',
      'zh-CN': '我更信任具体且能直接观察到的信息。',
    },
  },
  {
    id: 'sn-s-2',
    dimension: 'SN',
    pole: 'S',
    text: {
      en: 'I prefer step-by-step instructions when learning something new.',
      'zh-CN': '学习新事物时，我更喜欢一步一步的说明。',
    },
  },
  {
    id: 'sn-s-3',
    dimension: 'SN',
    pole: 'S',
    text: {
      en: 'I notice practical details that help a plan work in real life.',
      'zh-CN': '我会注意能让计划真正落地的实际细节。',
    },
  },
  {
    id: 'sn-s-4',
    dimension: 'SN',
    pole: 'S',
    text: {
      en: 'I value proven methods and past experience when solving problems.',
      'zh-CN': '解决问题时，我重视经过验证的方法和过往经验。',
    },
  },
  {
    id: 'sn-n-1',
    dimension: 'SN',
    pole: 'N',
    text: {
      en: 'I enjoy exploring patterns and possibilities behind the facts.',
      'zh-CN': '我喜欢探索事实背后的模式和可能性。',
    },
  },
  {
    id: 'sn-n-2',
    dimension: 'SN',
    pole: 'N',
    text: {
      en: 'I am drawn to abstract ideas and future potential.',
      'zh-CN': '我容易被抽象想法和未来潜力吸引。',
    },
  },
  {
    id: 'sn-n-3',
    dimension: 'SN',
    pole: 'N',
    text: {
      en: 'I often imagine different ways a situation could unfold.',
      'zh-CN': '我常常想象一种情况可能如何以不同方式发展。',
    },
  },
  {
    id: 'sn-n-4',
    dimension: 'SN',
    pole: 'N',
    text: {
      en: 'I like to experiment with new approaches even when old ones work.',
      'zh-CN': '即使旧方法有效，我也喜欢尝试新的做法。',
    },
  },
  {
    id: 'tf-t-1',
    dimension: 'TF',
    pole: 'T',
    text: {
      en: 'I prioritize logical consistency when making decisions.',
      'zh-CN': '做决定时，我会优先考虑逻辑一致性。',
    },
  },
  {
    id: 'tf-t-2',
    dimension: 'TF',
    pole: 'T',
    text: {
      en: 'I can give direct feedback when it helps solve a problem.',
      'zh-CN': '如果有助于解决问题，我可以直接给出反馈。',
    },
  },
  {
    id: 'tf-t-3',
    dimension: 'TF',
    pole: 'T',
    text: {
      en: 'I prefer to evaluate choices with objective criteria.',
      'zh-CN': '我更喜欢用客观标准来评估选择。',
    },
  },
  {
    id: 'tf-t-4',
    dimension: 'TF',
    pole: 'T',
    text: {
      en: 'I try to keep emotions separate from important decisions.',
      'zh-CN': '做重要决定时，我会尽量把情绪和判断分开。',
    },
  },
  {
    id: 'tf-f-1',
    dimension: 'TF',
    pole: 'F',
    text: {
      en: "I consider how decisions will affect people's feelings.",
      'zh-CN': '我会考虑决定会如何影响他人的感受。',
    },
  },
  {
    id: 'tf-f-2',
    dimension: 'TF',
    pole: 'F',
    text: {
      en: 'I look for choices that preserve harmony in a group.',
      'zh-CN': '我会寻找能维护群体和谐的选择。',
    },
  },
  {
    id: 'tf-f-3',
    dimension: 'TF',
    pole: 'F',
    text: {
      en: 'I value empathy as much as efficiency when resolving problems.',
      'zh-CN': '解决问题时，我认为同理心和效率同样重要。',
    },
  },
  {
    id: 'tf-f-4',
    dimension: 'TF',
    pole: 'F',
    text: {
      en: 'I am motivated by decisions that align with personal values.',
      'zh-CN': '符合个人价值观的决定会更能激励我。',
    },
  },
  {
    id: 'jp-j-1',
    dimension: 'JP',
    pole: 'J',
    text: {
      en: 'I like having plans settled before I start.',
      'zh-CN': '开始之前，我喜欢先把计划确定下来。',
    },
  },
  {
    id: 'jp-j-2',
    dimension: 'JP',
    pole: 'J',
    text: {
      en: 'I feel comfortable when deadlines and expectations are clear.',
      'zh-CN': '当截止时间和期待都很明确时，我会感到更安心。',
    },
  },
  {
    id: 'jp-j-3',
    dimension: 'JP',
    pole: 'J',
    text: {
      en: 'I prefer finishing tasks before moving to new options.',
      'zh-CN': '在转向新选择前，我更喜欢先完成当前任务。',
    },
  },
  {
    id: 'jp-j-4',
    dimension: 'JP',
    pole: 'J',
    text: {
      en: 'I keep lists or schedules to stay organized.',
      'zh-CN': '我会用清单或日程来保持条理。',
    },
  },
  {
    id: 'jp-p-1',
    dimension: 'JP',
    pole: 'P',
    text: {
      en: 'I like keeping plans flexible in case better options appear.',
      'zh-CN': '我喜欢让计划保持弹性，以便出现更好选择时调整。',
    },
  },
  {
    id: 'jp-p-2',
    dimension: 'JP',
    pole: 'P',
    text: {
      en: 'I feel energized by adapting in the moment.',
      'zh-CN': '根据当下情况灵活调整会让我更有活力。',
    },
  },
  {
    id: 'jp-p-3',
    dimension: 'JP',
    pole: 'P',
    text: {
      en: 'I often start exploring before deciding on a final plan.',
      'zh-CN': '在确定最终计划前，我常常会先开始探索。',
    },
  },
  {
    id: 'jp-p-4',
    dimension: 'JP',
    pole: 'P',
    text: {
      en: 'I work well when I can respond to new information as it arrives.',
      'zh-CN': '当我能随着新信息出现而调整时，通常表现更好。',
    },
  },
] as const satisfies readonly Question[];

export const totalQuestionCount = questionBank.length;
