import type { Language } from '../i18n';
import type { LocalizedText } from './questions';

export const mbtiTypeCodes = [
  'ISTJ',
  'ISFJ',
  'INFJ',
  'INTJ',
  'ISTP',
  'ISFP',
  'INFP',
  'INTP',
  'ESTP',
  'ESFP',
  'ENFP',
  'ENTP',
  'ESTJ',
  'ESFJ',
  'ENFJ',
  'ENTJ',
] as const;

export type MbtiTypeCode = (typeof mbtiTypeCodes)[number];

export interface TypeProfile {
  code: MbtiTypeCode;
  title: LocalizedText;
  summary: LocalizedText;
  strengths: Record<Language, readonly string[]>;
  challenges: Record<Language, readonly string[]>;
  workStyle: LocalizedText;
  communicationTips: Record<Language, readonly string[]>;
}

export const typeProfiles = [
  {
    code: 'ISTJ',
    title: { en: 'The Inspector', 'zh-CN': '检查者' },
    summary: {
      en: 'Practical, dependable, and detail-minded, ISTJs prefer clear responsibilities and steady follow-through.',
      'zh-CN': 'ISTJ 务实、可靠、注重细节，偏好明确职责和稳定推进。',
    },
    strengths: {
      en: ['Reliable execution', 'Careful attention to facts'],
      'zh-CN': ['执行可靠', '重视事实与细节'],
    },
    challenges: {
      en: ['May resist sudden change', 'Can seem overly strict about rules'],
      'zh-CN': ['可能抗拒突然变化', '有时显得过于坚持规则'],
    },
    workStyle: {
      en: 'Works best in structured settings with clear standards, practical goals, and room to build expertise.',
      'zh-CN': '最适合标准清晰、目标务实、能持续积累专业能力的结构化环境。',
    },
    communicationTips: {
      en: ['Be specific and prepared', 'Respect commitments and timelines'],
      'zh-CN': ['表达具体并提前准备', '尊重承诺和时间安排'],
    },
  },
  {
    code: 'ISFJ',
    title: { en: 'The Protector', 'zh-CN': '守护者' },
    summary: {
      en: 'Warm, conscientious, and service-oriented, ISFJs notice practical needs and support people steadily.',
      'zh-CN': 'ISFJ 温和、认真、乐于服务，能察觉实际需求并稳定支持他人。',
    },
    strengths: {
      en: ['Thoughtful support', 'Consistent follow-through'],
      'zh-CN': ['体贴支持', '持续可靠地跟进'],
    },
    challenges: {
      en: ['May overextend for others', 'Can avoid needed conflict'],
      'zh-CN': ['可能为他人付出过度', '有时回避必要冲突'],
    },
    workStyle: {
      en: 'Thrives in cooperative environments where care, accuracy, and dependable routines matter.',
      'zh-CN': '适合重视关怀、准确性和稳定流程的合作型环境。',
    },
    communicationTips: {
      en: ['Acknowledge their effort', 'Raise concerns kindly and concretely'],
      'zh-CN': ['认可他们的付出', '以温和且具体的方式提出顾虑'],
    },
  },
  {
    code: 'INFJ',
    title: { en: 'The Advocate', 'zh-CN': '倡导者' },
    summary: {
      en: 'Insightful, values-driven, and future-focused, INFJs look for meaning and long-range positive impact.',
      'zh-CN':
        'INFJ 富有洞察、受价值观驱动并关注未来，追求意义和长期正向影响。',
    },
    strengths: {
      en: ['Deep empathy', 'Strategic vision for people-centered goals'],
      'zh-CN': ['深层同理心', '面向人的长期愿景'],
    },
    challenges: {
      en: [
        'May carry too much privately',
        'Can become perfectionistic about ideals',
      ],
      'zh-CN': ['可能独自承担过多', '有时对理想过于追求完美'],
    },
    workStyle: {
      en: 'Prefers mission-oriented work with autonomy, depth, and a clear human benefit.',
      'zh-CN': '偏好有使命感、具自主性和深度，并能帮助他人的工作。',
    },
    communicationTips: {
      en: ['Discuss purpose as well as details', 'Allow time for reflection'],
      'zh-CN': ['同时讨论目的与细节', '给予思考和整理的时间'],
    },
  },
  {
    code: 'INTJ',
    title: { en: 'The Architect', 'zh-CN': '建筑师' },
    summary: {
      en: 'Independent, analytical, and systems-minded, INTJs enjoy designing long-term strategies that improve outcomes.',
      'zh-CN': 'INTJ 独立、理性、重视系统思维，喜欢设计能改善结果的长期策略。',
    },
    strengths: {
      en: ['Long-range planning', 'Clear analysis of complex systems'],
      'zh-CN': ['长期规划能力', '分析复杂系统的清晰度'],
    },
    challenges: {
      en: [
        'May under-explain their reasoning',
        'Can overlook emotional context',
      ],
      'zh-CN': ['可能解释不足', '有时忽略情绪背景'],
    },
    workStyle: {
      en: 'Excels in independent, high-expectation environments that reward strategy, competence, and improvement.',
      'zh-CN': '适合重视策略、能力和持续改进，并给予独立空间的高标准环境。',
    },
    communicationTips: {
      en: ['Bring concise evidence', 'Be direct about goals and constraints'],
      'zh-CN': ['提供简洁证据', '直接说明目标和限制'],
    },
  },
  {
    code: 'ISTP',
    title: { en: 'The Craftsperson', 'zh-CN': '工匠' },
    summary: {
      en: 'Observant, adaptable, and hands-on, ISTPs like understanding how things work and solving immediate problems.',
      'zh-CN':
        'ISTP 观察敏锐、适应力强、偏好动手实践，喜欢理解事物运作并解决眼前问题。',
    },
    strengths: {
      en: ['Practical troubleshooting', 'Calm response under pressure'],
      'zh-CN': ['务实排障', '压力下保持冷静'],
    },
    challenges: {
      en: [
        'May lose interest in routine follow-up',
        'Can seem detached during emotional discussions',
      ],
      'zh-CN': ['可能对常规跟进失去兴趣', '情绪讨论中可能显得疏离'],
    },
    workStyle: {
      en: 'Works best with autonomy, practical tools, visible results, and space to respond flexibly.',
      'zh-CN': '适合有自主权、实用工具、可见成果，并能灵活响应的环境。',
    },
    communicationTips: {
      en: [
        'Keep explanations practical',
        'Give room for independent problem-solving',
      ],
      'zh-CN': ['保持说明务实', '给予独立解决问题的空间'],
    },
  },
  {
    code: 'ISFP',
    title: { en: 'The Adventurer', 'zh-CN': '探索者' },
    summary: {
      en: 'Gentle, observant, and values-led, ISFPs express care through action and prefer authentic experiences.',
      'zh-CN':
        'ISFP 温和、敏锐、受价值观引导，常通过行动表达关心，并偏好真实体验。',
    },
    strengths: {
      en: ['Attentive presence', 'Flexible creativity'],
      'zh-CN': ['专注而体贴的陪伴', '灵活的创造力'],
    },
    challenges: {
      en: [
        'May avoid rigid commitments',
        'Can struggle to voice personal needs',
      ],
      'zh-CN': ['可能回避僵硬承诺', '有时难以表达个人需求'],
    },
    workStyle: {
      en: 'Thrives in supportive settings that allow personal expression, practical contribution, and flexibility.',
      'zh-CN': '适合支持性强、允许个人表达、实践贡献和灵活安排的环境。',
    },
    communicationTips: {
      en: [
        'Be sincere and low-pressure',
        'Invite preferences without forcing quick answers',
      ],
      'zh-CN': ['真诚且减少压力', '邀请表达偏好但不催促回答'],
    },
  },
  {
    code: 'INFP',
    title: { en: 'The Mediator', 'zh-CN': '调停者' },
    summary: {
      en: 'Idealistic, imaginative, and deeply personal, INFPs seek work and relationships aligned with their values.',
      'zh-CN':
        'INFP 理想主义、富有想象力且重视内在感受，追求与价值观一致的工作和关系。',
    },
    strengths: {
      en: ['Authentic empathy', 'Creative meaning-making'],
      'zh-CN': ['真诚同理', '创造性地赋予意义'],
    },
    challenges: {
      en: ['May delay practical decisions', 'Can take criticism personally'],
      'zh-CN': ['可能推迟现实决策', '容易把批评个人化'],
    },
    workStyle: {
      en: 'Prefers purpose-driven, flexible work where creativity and personal conviction are respected.',
      'zh-CN': '偏好目标有意义、安排灵活，并尊重创造力和个人信念的工作。',
    },
    communicationTips: {
      en: [
        'Connect feedback to shared values',
        'Use a thoughtful and respectful tone',
      ],
      'zh-CN': ['将反馈连接到共同价值', '使用体贴且尊重的语气'],
    },
  },
  {
    code: 'INTP',
    title: { en: 'The Thinker', 'zh-CN': '思考者' },
    summary: {
      en: 'Curious, analytical, and independent, INTPs enjoy exploring concepts and refining elegant explanations.',
      'zh-CN': 'INTP 好奇、善于分析且独立，喜欢探索概念并打磨清晰优雅的解释。',
    },
    strengths: {
      en: ['Conceptual analysis', 'Original problem framing'],
      'zh-CN': ['概念分析能力', '原创的问题建构'],
    },
    challenges: {
      en: ['May postpone execution', 'Can appear skeptical or distant'],
      'zh-CN': ['可能推迟执行', '有时显得怀疑或疏离'],
    },
    workStyle: {
      en: 'Excels in autonomous environments that value inquiry, precision, and complex problem-solving.',
      'zh-CN': '适合重视探索、精确和复杂问题解决的自主环境。',
    },
    communicationTips: {
      en: [
        'Discuss the logic behind decisions',
        'Leave space for questions and refinement',
      ],
      'zh-CN': ['讨论决定背后的逻辑', '留出提问和完善的空间'],
    },
  },
  {
    code: 'ESTP',
    title: { en: 'The Dynamo', 'zh-CN': '行动家' },
    summary: {
      en: 'Energetic, pragmatic, and action-oriented, ESTPs read the moment quickly and move toward tangible results.',
      'zh-CN': 'ESTP 精力充沛、务实且重视行动，能快速判断当下并推动具体结果。',
    },
    strengths: {
      en: ['Fast practical action', 'Confidence in dynamic situations'],
      'zh-CN': ['快速务实行动', '动态情境中的自信'],
    },
    challenges: {
      en: [
        'May skip long-term implications',
        'Can become impatient with abstract discussion',
      ],
      'zh-CN': ['可能忽略长期影响', '对抽象讨论可能缺乏耐心'],
    },
    workStyle: {
      en: 'Thrives in fast-moving roles with visible stakes, direct feedback, and room to improvise.',
      'zh-CN': '适合节奏快、结果可见、反馈直接并允许即兴应变的角色。',
    },
    communicationTips: {
      en: ['Get to the point quickly', 'Pair ideas with concrete next steps'],
      'zh-CN': ['快速切入重点', '把想法配上具体下一步'],
    },
  },
  {
    code: 'ESFP',
    title: { en: 'The Performer', 'zh-CN': '表演者' },
    summary: {
      en: 'Expressive, warm, and experience-driven, ESFPs bring energy to people and respond well to real-time needs.',
      'zh-CN':
        'ESFP 表达力强、热情、重视体验，能为群体带来能量并回应即时需求。',
    },
    strengths: {
      en: ['Engaging presence', 'Practical awareness of people'],
      'zh-CN': ['有感染力的存在感', '对人的实际需求敏锐'],
    },
    challenges: {
      en: [
        'May avoid tedious planning',
        'Can overfocus on immediate enjoyment',
      ],
      'zh-CN': ['可能回避繁琐规划', '有时过度关注即时愉悦'],
    },
    workStyle: {
      en: 'Works best in lively, people-facing settings where practical help and adaptability are valued.',
      'zh-CN': '适合活跃、面向人的环境，并重视实际帮助与适应力。',
    },
    communicationTips: {
      en: [
        'Keep the tone friendly and concrete',
        'Recognize their contribution to group energy',
      ],
      'zh-CN': ['保持友好且具体', '认可他们为团队气氛带来的贡献'],
    },
  },
  {
    code: 'ENFP',
    title: { en: 'The Campaigner', 'zh-CN': '激励者' },
    summary: {
      en: 'Enthusiastic, imaginative, and people-centered, ENFPs connect possibilities with personal meaning.',
      'zh-CN':
        'ENFP 热情、富有想象力且以人为中心，善于把可能性与个人意义连接起来。',
    },
    strengths: {
      en: ['Inspiring ideas', 'Strong interpersonal curiosity'],
      'zh-CN': ['富有感染力的想法', '强烈的人际好奇心'],
    },
    challenges: {
      en: [
        'May struggle with routine closure',
        'Can scatter energy across too many options',
      ],
      'zh-CN': ['可能不擅长常规收尾', '容易把精力分散到过多选项'],
    },
    workStyle: {
      en: 'Prefers flexible, collaborative work where creativity, growth, and human impact are visible.',
      'zh-CN': '偏好灵活协作、能看见创造力、成长和人本影响的工作。',
    },
    communicationTips: {
      en: [
        'Invite possibilities before narrowing choices',
        'Balance encouragement with clear priorities',
      ],
      'zh-CN': ['先邀请可能性再收敛选择', '在鼓励中明确优先级'],
    },
  },
  {
    code: 'ENTP',
    title: { en: 'The Debater', 'zh-CN': '辩思者' },
    summary: {
      en: 'Inventive, quick-minded, and challenge-seeking, ENTPs enjoy testing ideas and finding fresh angles.',
      'zh-CN': 'ENTP 有创造力、反应快、喜欢挑战，享受检验想法并寻找新角度。',
    },
    strengths: {
      en: ['Original thinking', 'Comfort with debate and experimentation'],
      'zh-CN': ['原创思维', '适应辩论和实验'],
    },
    challenges: {
      en: [
        'May debate past the useful point',
        'Can lose interest in implementation details',
      ],
      'zh-CN': ['可能辩论过头', '容易对执行细节失去兴趣'],
    },
    workStyle: {
      en: 'Excels in innovative environments that welcome debate, iteration, and strategic experimentation.',
      'zh-CN': '适合欢迎辩论、迭代和策略实验的创新环境。',
    },
    communicationTips: {
      en: [
        'Frame disagreement as exploration',
        'Clarify decisions after brainstorming',
      ],
      'zh-CN': ['把分歧视为探索', '头脑风暴后明确决定'],
    },
  },
  {
    code: 'ESTJ',
    title: { en: 'The Executive', 'zh-CN': '执行官' },
    summary: {
      en: 'Organized, direct, and results-focused, ESTJs bring structure to groups and move plans toward completion.',
      'zh-CN': 'ESTJ 有组织、直接、重视结果，能为团队建立结构并推动计划完成。',
    },
    strengths: {
      en: ['Clear organization', 'Decisive accountability'],
      'zh-CN': ['清晰组织能力', '果断且负责'],
    },
    challenges: {
      en: [
        'May overlook softer concerns',
        'Can become impatient with ambiguity',
      ],
      'zh-CN': ['可能忽略较细腻的感受', '面对模糊性可能缺乏耐心'],
    },
    workStyle: {
      en: 'Thrives where expectations, authority, metrics, and execution paths are clear.',
      'zh-CN': '适合期待、权限、指标和执行路径都清晰的环境。',
    },
    communicationTips: {
      en: [
        'State the decision and rationale clearly',
        'Bring practical timelines and responsibilities',
      ],
      'zh-CN': ['清楚说明决定和理由', '带上实际时间线和责任分工'],
    },
  },
  {
    code: 'ESFJ',
    title: { en: 'The Consul', 'zh-CN': '协调者' },
    summary: {
      en: 'Friendly, responsible, and community-minded, ESFJs create belonging through practical care and coordination.',
      'zh-CN': 'ESFJ 友善、负责、重视群体，通过实际关怀和协调营造归属感。',
    },
    strengths: {
      en: ['Community building', 'Attentive practical care'],
      'zh-CN': ['建立群体连接', '细致的实际关怀'],
    },
    challenges: {
      en: ['May take disagreement personally', 'Can over-prioritize approval'],
      'zh-CN': ['可能把分歧个人化', '有时过度重视认可'],
    },
    workStyle: {
      en: 'Works best in collaborative settings where service, reliability, and shared expectations are valued.',
      'zh-CN': '适合重视服务、可靠性和共同期待的协作环境。',
    },
    communicationTips: {
      en: [
        'Show appreciation openly',
        'Address conflict with warmth and clarity',
      ],
      'zh-CN': ['公开表达感谢', '以温暖且清晰的方式处理冲突'],
    },
  },
  {
    code: 'ENFJ',
    title: { en: 'The Protagonist', 'zh-CN': '引导者' },
    summary: {
      en: 'Charismatic, empathetic, and growth-oriented, ENFJs help people align around shared purpose.',
      'zh-CN':
        'ENFJ 有号召力、富有同理心、关注成长，善于帮助人们围绕共同目标凝聚。',
    },
    strengths: {
      en: ['Motivating others', 'Reading group dynamics'],
      'zh-CN': ['激励他人', '理解群体动态'],
    },
    challenges: {
      en: [
        'May absorb others’ stress',
        'Can over-direct in the name of helping',
      ],
      'zh-CN': ['可能吸收他人的压力', '有时以帮助之名过度引导'],
    },
    workStyle: {
      en: 'Thrives in people-focused leadership, coaching, education, or mission-driven collaboration.',
      'zh-CN': '适合以人为中心的领导、辅导、教育或使命驱动型协作。',
    },
    communicationTips: {
      en: [
        'Connect tasks to people and purpose',
        'Be honest while affirming shared intent',
      ],
      'zh-CN': ['把任务连接到人和目的', '诚实表达并确认共同意图'],
    },
  },
  {
    code: 'ENTJ',
    title: { en: 'The Commander', 'zh-CN': '指挥官' },
    summary: {
      en: 'Strategic, decisive, and ambitious, ENTJs organize people and resources toward bold objectives.',
      'zh-CN': 'ENTJ 有战略性、果断且有抱负，善于组织人与资源实现大胆目标。',
    },
    strengths: {
      en: ['Strategic leadership', 'High standards for execution'],
      'zh-CN': ['战略领导力', '对执行有高标准'],
    },
    challenges: {
      en: [
        'May move faster than others can process',
        'Can undervalue emotional buy-in',
      ],
      'zh-CN': ['推进速度可能快过他人消化节奏', '有时低估情感认同的重要性'],
    },
    workStyle: {
      en: 'Excels in high-impact environments that reward vision, decisiveness, accountability, and scale.',
      'zh-CN': '适合重视愿景、决断、责任和规模化影响的高影响力环境。',
    },
    communicationTips: {
      en: [
        'Be direct and outcome-focused',
        'Discuss risks, ownership, and measurable progress',
      ],
      'zh-CN': ['直接且聚焦结果', '讨论风险、责任归属和可衡量进展'],
    },
  },
] as const satisfies readonly TypeProfile[];

function createTypeProfileMap(profiles: readonly TypeProfile[]) {
  const map = {} as Record<MbtiTypeCode, TypeProfile>;

  for (const profile of profiles) {
    map[profile.code] = profile;
  }

  return map;
}

export const typeProfileMap = createTypeProfileMap(typeProfiles);
