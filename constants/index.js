export const contactIntents = [
  { id: 'health-check', label: 'AI Operations Health Check' },
  { id: 'ai-care', label: 'Quote for AI Care' },
  { id: 'managed-ai-ops', label: 'Quote for Managed AI Ops' },
  { id: 'ai-ops-plus', label: 'Quote for AI Ops Plus' },
];

export const contactIntentUrl = (intent) => `/?intent=${encodeURIComponent(intent)}#contact`;

export const resolveIntent = (intent) => (
  contactIntents.some((item) => item.id === intent) ? intent : 'health-check'
);

export const discoveryCallUrl = contactIntentUrl('health-check');

export const navLinks = [
  { id: 'solutions', title: 'Services' },
  { id: 'use-cases', title: 'Support' },
  { id: 'process', title: 'How We Work' },
  { id: 'plans', title: 'Plans' },
  { id: 'about', title: 'About' },
  { id: 'faq', title: 'FAQ' },
  { id: 'contact', title: 'Contact' },
];

export const challenges = [
  {
    title: 'Silent workflow failures',
    text: 'An agent or automation stops, and the team only finds out when a colleague or customer is already affected.',
  },
  {
    title: 'Broken integrations',
    text: 'A tool update, expired access, or changed field stops information moving between the systems you already use.',
  },
  {
    title: 'Unpredictable performance and costs',
    text: 'Quality, speed, and usage costs shift, with no steady view of what changed or why.',
  },
  {
    title: 'No clear technical support owner',
    text: 'The person who set the system up has moved on, and no one is accountable when it breaks.',
  },
];

export const solutions = [
  {
    id: 'service-watch',
    imgUrl: '/tai-forge-website-images/tai-forge-service-watch.svg',
    alt: 'Circular monitoring display with a signal trace on a dark operations panel',
    label: 'AI Watch',
    description: 'Monitoring and failure detection',
  },
  {
    id: 'service-resolve',
    imgUrl: '/tai-forge-website-images/tai-forge-service-resolve.svg',
    alt: 'Shield with a check mark, illustrating a repaired workflow',
    label: 'AI Resolve',
    description: 'Troubleshooting and approved repairs',
  },
  {
    id: 'service-maintain',
    imgUrl: '/tai-forge-website-images/tai-forge-service-maintain.svg',
    alt: 'Stacked maintenance list beside a clock, illustrating ongoing care',
    label: 'AI Maintain',
    description: 'Ongoing maintenance and documentation',
  },
  {
    id: 'service-optimize',
    imgUrl: '/tai-forge-website-images/tai-forge-service-optimize.svg',
    alt: 'Rising bar chart with an upward trend, illustrating a performance improvement',
    label: 'AI Optimize',
    description: 'Performance, cost and reliability improvements',
  },
];

export const processSteps = [
  {
    id: 'assess',
    title: 'Assess',
    text: 'An AI Operations Health Check reviews the agents, automations, and integrations already in place, how your team uses them, and where they need attention.',
  },
  {
    id: 'onboard',
    title: 'Onboard',
    text: 'We confirm access, agree what to watch, and document how changes are approved before support begins.',
  },
  {
    id: 'monitor',
    title: 'Monitor & Resolve',
    text: 'We watch for failed runs, broken connections, and outputs that drift, then trace the issue and work on a fix for the current setup.',
  },
  {
    id: 'improve',
    title: 'Improve',
    text: 'We refine instructions, steps, and connections as your tools, data, and processes change.',
  },
];

export const differentiators = [
  {
    imgUrl: '/icon-target.svg',
    title: 'Existing systems first',
    subtitle: 'We start with the agents, automations, and integrations your business already uses.',
  },
  {
    imgUrl: '/icon-check.svg',
    title: 'Technical support when it breaks',
    subtitle: 'When a run fails or a connection drops, we investigate and help restore the current setup.',
  },
  {
    imgUrl: '/icon-layers.svg',
    title: 'Maintenance, not one-off patches',
    subtitle: 'Documentation, exception handling, and routine care sit alongside troubleshooting.',
  },
  {
    imgUrl: '/icon-growth.svg',
    title: 'Improvement on what you have',
    subtitle: 'We look for practical refinements to the systems already in use as your work changes.',
  },
];

export const useCases = [
  {
    id: 'crm',
    title: 'Failed CRM synchronization',
    subtitle: 'Customer records stop matching between a CRM and a connected system, so people work from two versions of the same account.',
  },
  {
    id: 'credentials',
    title: 'Expired API credentials',
    subtitle: 'A key, token, or login reaches its end date, and the connected work that depended on it starts to fail.',
  },
  {
    id: 'schedule',
    title: 'Broken scheduled automations',
    subtitle: 'A job set to run on a schedule misses its window or stops partway through, and the expected result never arrives.',
  },
  {
    id: 'assistant',
    title: 'Inconsistent AI assistant responses',
    subtitle: 'The same kind of question starts producing different answers, or replies drift from the guidance the team approved.',
  },
  {
    id: 'cost',
    title: 'Unexpected AI usage costs',
    subtitle: 'Usage or spend climbs without a matching change in the work, and the reason is not obvious from day to day.',
  },
  {
    id: 'third-party',
    title: 'Maintenance of third-party automations',
    subtitle: 'A workflow built in another tool still needs care after the person who set it up is no longer available.',
  },
];

export const healthCheck = {
  eyebrow: 'Introductory assessment',
  title: 'AI Operations Health Check',
  summary: 'Before a support plan, we review the agents, automations, and integrations you already run: what they do, where they fail, and what kind of care would help. The health check is how a new engagement starts.',
  includes: [
    'An inventory of the workflows your team relies on',
    'Where failures, drift, or unclear ownership show up',
    'What monitoring, maintenance, and troubleshooting would involve',
    'A recommendation on which support plan fits, if ongoing care is useful',
  ],
};

export const supportPlans = [
  {
    id: 'ai-care',
    name: 'AI Care',
    audience: 'Small AI workflow environments',
    summary: 'For a team that depends on a small number of agents, automations, or integrations and wants them looked after.',
    includes: [
      'Monitoring for an agreed, limited set of workflows',
      'Troubleshooting when a run or connection fails',
      'Routine maintenance of the current setup',
      'Notes your team can use when something changes',
    ],
  },
  {
    id: 'managed-ai-ops',
    name: 'Managed AI Ops',
    audience: 'Growing businesses with multiple workflows',
    summary: 'For a business that relies on several agents, automations, and connected systems, and needs them cared for together.',
    includes: [
      'Monitoring across multiple workflows and connections',
      'Troubleshooting that follows an issue between systems',
      'Maintenance and operating notes kept current',
      'Coordination with the people who administer those systems',
    ],
  },
  {
    id: 'ai-ops-plus',
    name: 'AI Ops Plus',
    audience: 'Complex AI operations',
    summary: 'For organizations where many workflows, teams, and platforms have to keep working together.',
    includes: [
      'Support across a complex set of existing AI operations',
      'Troubleshooting that spans several teams and platforms',
      'Maintenance of documentation, exceptions, and change notes',
      'Work on reliability, performance, and usage for systems already in use',
    ],
  },
];

export const faqs = [
  {
    question: 'What does TAI Forge support?',
    answer: 'We help businesses monitor, maintain, troubleshoot, and optimize existing AI agents, automations, and integrations. A first conversation is for understanding what you already run and where support would help.',
  },
  {
    question: 'Do you build new AI systems from scratch?',
    answer: 'Our work is centered on systems that are already in use. Troubleshooting and maintenance can include fixes and adjustments to those systems. A new build is not the starting point.',
  },
  {
    question: 'Which tools can you work with?',
    answer: 'That depends on the agents, automations, and business software you already use, and on the access available for monitoring and changes. We confirm what is practical before support begins.',
  },
  {
    question: 'Do we need to replace our current systems?',
    answer: 'No. Support is there to look after what you have. If a change to an existing workflow would help, we will explain why.',
  },
  {
    question: 'How does support begin?',
    answer: 'It begins with an AI Operations Health Check. We look at the AI agents, automations, and integrations you rely on and the issues your team is seeing. If ongoing care makes sense, we quote a support plan for that environment.',
  },
  {
    question: 'Will our team stay involved?',
    answer: 'Yes. You keep ownership of business decisions and approvals. We work with the people who use and administer the systems.',
  },
  {
    question: 'What can ongoing support include?',
    answer: 'Depending on the scope you choose, support can include monitoring, troubleshooting, documentation, routine maintenance, and optimization of existing workflows.',
  },
];
