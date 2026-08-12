export interface Feature {
  title: string;
  desc: string;
  iconType?: string; // We'll use a generic icon rendering in the component based on index or type
}

export interface SolutionData {
  id: string;
  tag: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  subtitle: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  brandColor: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: Feature[];
  bottomTitle: string;
  bottomDesc: string;
  bottomChecklist: string[];
}

export const solutionsData: Record<string, SolutionData> = {
  startups: {
    id: 'startups',
    tag: 'TalentOps for Startups',
    titlePart1: 'Scale Your Team, ',
    titleHighlight: 'Not Your HR Overhead',
    subtitle: 'When you\'re growing fast, you don\'t have time for manual HR tasks. TalentOps automates onboarding, payroll, and compliance so you can focus on building your product.',
    primaryCtaText: 'Start Free Trial',
    secondaryCtaText: 'View Startup Pricing',
    brandColor: '#f59e0b', // Yellow
    featuresTitle: 'Built for Speed and Agility',
    featuresSubtitle: 'Replace a messy combination of spreadsheets and disconnected tools with one platform that grows as fast as you do.',
    features: [
      {
        title: 'Lightning-Fast Onboarding',
        desc: 'Automated welcome emails, collect documents digitally, and provision IT equipment before Day 1.',
        iconType: 'Rocket'
      },
      {
        title: 'Compliance on Autopilot',
        desc: 'Stay compliant across all 50 states automatically. We handle the changing regulations so you don\'t have to hire a legal team yet.',
        iconType: 'Shield'
      },
      {
        title: 'Contractor Management',
        desc: 'Manage full-time employees and freelancers side-by-side. Generate 1099s instantly at the end of the year.',
        iconType: 'Users'
      },
      {
        title: 'Instant Payroll',
        desc: 'Payroll in 3 clicks. Taxes are calculated and filed automatically, and employees get paid accurately on time.',
        iconType: 'Zap'
      },
      {
        title: 'Time Off & Tracking',
        desc: 'Give employees a self-service portal to request PTO. Managers can approve requests directly from Slack or email.',
        iconType: 'Clock'
      },
      {
        title: 'Goal Alignment (OKRs)',
        desc: 'Keep your growing team aligned on the same north star. Track company OKRs and individual contributions transparently.',
        iconType: 'TrendingUp'
      }
    ],
    bottomTitle: 'From 10 to 100 employees without breaking a sweat.',
    bottomDesc: 'Scaling a startup means your processes will break constantly. TalentOps provides the resilient infrastructure you need to handle rapid hiring spurts without hiring a massive HR team.',
    bottomChecklist: [
      'Self-service portals save founders hours every week.',
      'Integrates seamlessly with your existing tech stack.',
      'Affordable pricing designed for early-stage companies.',
      'Enterprise-grade security to pass vendor assessments.'
    ]
  },
  agencies: {
    id: 'agencies',
    tag: 'TalentOps for Agencies',
    titlePart1: 'Manage Your Talent Pool ',
    titleHighlight: 'With Precision',
    subtitle: 'Designed specifically for staffing, creative, and consulting agencies. Track billable hours, manage contractor contracts, and dispatch talent efficiently.',
    primaryCtaText: 'Book Agency Demo',
    secondaryCtaText: 'Explore Features',
    brandColor: '#8b5cf6', // Purple
    featuresTitle: 'Purpose-Built for Client Work',
    featuresSubtitle: 'Handling a mix of full-time employees, freelancers, and clients requires specialized tools. We\'ve got you covered.',
    features: [
      {
        title: 'Unified Talent Roster',
        desc: 'Keep an organized database of all your contractors and employees. Tag them by skills, availability, and hourly rates.',
        iconType: 'Users'
      },
      {
        title: 'Billable Time Tracking',
        desc: 'Track exact log hours directly against specific client projects. Approvals are routed instantly to project managers.',
        iconType: 'Clock'
      },
      {
        title: 'Contract Management',
        desc: 'Generate SOWs and NDAs automatically. Collect e-signatures and store them securely in the talent\'s profile.',
        iconType: 'FileText'
      },
      {
        title: 'Project Profitability',
        desc: 'Track contractor costs against client bill rates in real-time to ensure every project remains profitable.',
        iconType: 'Briefcase'
      },
      {
        title: 'Client Approvals',
        desc: 'Give clients limited access to approve contractor timesheets before invoices are generated.',
        iconType: 'CheckCircle2'
      },
      {
        title: 'Resource Allocation',
        desc: 'Visual timelines show who is booked, who is available, and who is taking time off next week.',
        iconType: 'PieChart'
      }
    ],
    bottomTitle: 'Connect time tracking directly to billing.',
    bottomDesc: 'Agencies lose thousands of dollars a month to untracked billable hours. TalentOps ensures every hour worked is an hour billed.',
    bottomChecklist: [
      'Eliminate manual invoice creation for contractors.',
      'Real-time margins on every active project.',
      'Integrations with QuickBooks, Xero, and Freshbooks.',
      'Automated reminders for missing timesheets.'
    ]
  },
  'mid-market': {
    id: 'mid-market',
    tag: 'TalentOps for Mid-Market',
    titlePart1: 'Enterprise Power, ',
    titleHighlight: 'Without the Enterprise Bulk',
    subtitle: 'For organizations scaling past 100 employees. Get advanced permissions, robust compliance reporting, and custom integrations — without a 6-month implementation process.',
    primaryCtaText: 'Request a Custom Demo',
    secondaryCtaText: 'View Security Specs',
    brandColor: '#06b6d4', // Teal
    featuresTitle: 'Built for Complexity',
    featuresSubtitle: 'Multiple locations, intricate reporting lines, and strict compliance requirements? TalentOps handles it with ease.',
    features: [
      {
        title: 'Multi-Entity Management',
        desc: 'Manage different subsidiaries, office locations, and tax jurisdictions all from a single centralized dashboard.',
        iconType: 'Network'
      },
      {
        title: 'Granular Permissions',
        desc: 'Custom Role-Based Access Control (RBAC) ensures managers only see compensation data for their direct reports.',
        iconType: 'Lock'
      },
      {
        title: 'Audit Trails & Logs',
        desc: 'Every action taken in the platform is logged. Easily generate compliance reports for SOC2 or GDPR audits.',
        iconType: 'ShieldCheck'
      },
      {
        title: 'Custom Integrations',
        desc: 'Connect TalentOps to your proprietary systems using our robust OpenAPI-spec REST API and webhooks.',
        iconType: 'Database'
      },
      {
        title: 'Advanced Org Charts',
        desc: 'Visualize complex matrix organizations, dotted-line reporting, and cross-functional teams dynamically.',
        iconType: 'Building2'
      },
      {
        title: 'Workforce Analytics',
        desc: 'Generate custom reports on employee churn, diversity metrics, and compensation parity across the entire company.',
        iconType: 'LineChart'
      }
    ],
    bottomTitle: 'Insights to drive strategic decisions.',
    bottomDesc: 'As your company scales, intuition is no longer enough. TalentOps aggregates data across recruitment, performance, and payroll to give executives actionable insights into organizational health.',
    bottomChecklist: [
      'Export directly to BI tools via automated webhooks.',
      'Automate reports to be emailed to stakeholders weekly.',
      'Identify flight risks before they hand in notice.',
      'Benchmark compensation against industry standards.'
    ]
  }
};
