import { Feature } from '../solutions/solutionsData';

export interface ProductData {
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
  bottomBgType: 'light' | 'dark';
}

export const productsData: Record<string, ProductData> = {
  'core-hr': {
    id: 'core-hr',
    tag: 'TalentOps Core HR',
    titlePart1: 'The Single Source of Truth for ',
    titleHighlight: 'Your People Data',
    subtitle: 'Ditch the spreadsheets and scattered files. Centralize employee records, automate time-off requests, and streamline every HR operation in one secure, compliant platform.',
    primaryCtaText: 'Book a Demo',
    secondaryCtaText: 'Explore Pricing',
    brandColor: '#2563eb', // Blue
    featuresTitle: 'Everything You Need to Manage Your Workforce',
    featuresSubtitle: 'A comprehensive suite of tools designed to handle every aspect of core HR operations, from day one to departure.',
    features: [
      {
        title: 'Employee Directory',
        desc: 'A rich, searchable database of all employee profiles, personal details, contact info, and job history.',
        iconType: 'Users'
      },
      {
        title: 'Document Vault',
        desc: 'Securely store contracts, NDAs, identification, and tax forms with role-based access control.',
        iconType: 'FileText'
      },
      {
        title: 'Leave & PTO',
        desc: 'Automated accruals, customizable policies, and a self-service portal for easy time-off requests.',
        iconType: 'Calendar'
      },
      {
        title: 'Time & Attendance',
        desc: 'Clock in/out functionality, timesheet approvals, and seamless integration directly into payroll.',
        iconType: 'Clock'
      },
      {
        title: 'Org Charts',
        desc: 'Auto-generated organizational charts that update in real-time as your company grows and shifts.',
        iconType: 'Network'
      },
      {
        title: 'Asset Management',
        desc: 'Track laptops, monitors, software licenses, and access keys assigned to every employee.',
        iconType: 'Laptop'
      },
      {
        title: 'Compliance & Audits',
        desc: 'Ensure regional compliance with automated alerts for expiring visas, certifications, or mandatory training.',
        iconType: 'ShieldCheck'
      },
      {
        title: 'On/Offboarding',
        desc: 'Customizable task checklists to ensure new hires are set up instantly and departures are handled securely.',
        iconType: 'CheckCircle2'
      }
    ],
    bottomTitle: 'Empower Teams with Employee Self-Service',
    bottomDesc: 'Stop acting as the middleman for basic data updates. TalentOps gives every employee a secure portal to manage their own information, freeing up HR to focus on strategy.',
    bottomChecklist: [
      'Update personal details, address, and emergency contacts.',
      'View and download payslips and tax documents directly.',
      'Request time off and view real-time leave balances.',
      'Submit expense reports and track approval status.'
    ],
    bottomBgType: 'dark'
  },
  'payroll': {
    id: 'payroll',
    tag: 'TalentOps Payroll',
    titlePart1: 'Flawless Payroll Processing, ',
    titleHighlight: 'Every Single Time',
    subtitle: 'Run payroll in minutes with absolute accuracy. We handle the taxes, compliance, and deductions so you can ensure your team gets paid on time, without the headache.',
    primaryCtaText: 'See a Demo',
    secondaryCtaText: 'Pricing Details',
    brandColor: '#10b981', // Green
    featuresTitle: 'Powerful Payroll for Modern Teams',
    featuresSubtitle: 'Built for speed and compliance, TalentOps Payroll integrates directly with your HR data to eliminate manual data entry.',
    features: [
      {
        title: 'One-Click Payroll Runs',
        desc: 'Sync automatically with timesheets, time off, and salary adjustments. Run payroll for your entire organization with a single click.',
        iconType: 'DollarSign'
      },
      {
        title: 'Tax & Compliance',
        desc: 'Automatic calculation of federal, state, and local taxes. We stay up-to-date with changing tax laws so you stay compliant automatically.',
        iconType: 'ShieldCheck'
      },
      {
        title: 'Expenses & Reimbursements',
        desc: 'Employees can submit expenses via the mobile app. Managers approve them, and they are automatically added to the next payroll run.',
        iconType: 'CreditCard'
      },
      {
        title: 'Global Multi-Currency',
        desc: 'Paying international contractors? Process payments in over 50 currencies with automated exchange rate calculations.',
        iconType: 'Globe'
      },
      {
        title: 'Automated Payslips',
        desc: 'Generate and distribute secure digital payslips automatically. Employees are notified via email as soon as payday hits.',
        iconType: 'FileText'
      },
      {
        title: 'Financial Reporting',
        desc: 'Export general ledgers to Xero, QuickBooks, or NetSuite. Dive deep into payroll costs by department, location, or project.',
        iconType: 'PieChart'
      }
    ],
    bottomTitle: 'No more double data entry.',
    bottomDesc: 'Because TalentOps handles Core HR and Time Tracking in the same system, your payroll is always perfectly synced. When someone takes unpaid leave, gets a bonus, or clocks overtime, payroll knows instantly.',
    bottomChecklist: [
      'Prorated calculations for new joiners and departures.',
      'Automatic sync with approved timesheets and overtime.',
      'Built-in compliance checks before every run.',
      'Direct deposits to employee bank accounts within 48 hours.'
    ],
    bottomBgType: 'dark'
  },
  'recruitment': {
    id: 'recruitment',
    tag: 'TalentOps Recruitment',
    titlePart1: 'Find, Track, and Hire ',
    titleHighlight: 'Top Talent Faster',
    subtitle: 'A complete Applicant Tracking System (ATS) built right into your HR platform. From publishing jobs to signing offer letters, manage your entire hiring pipeline in one place.',
    primaryCtaText: 'Start Hiring Today',
    secondaryCtaText: 'Watch Walkthrough',
    brandColor: '#6366f1', // Indigo/Purple
    featuresTitle: 'An ATS that Hiring Managers Actually Love',
    featuresSubtitle: 'TalentOps provides the tools you need to streamline candidate sourcing, accelerate interviews, and close offers quickly.',
    features: [
      {
        title: 'Custom Career Pages',
        desc: 'Build a branded, mobile-responsive careers page in minutes without coding. Attract candidates right from your own website.',
        iconType: 'Building2'
      },
      {
        title: 'Visual Hiring Pipeline',
        desc: 'Drag-and-drop Kanban boards for every job opening. Instantly see where candidates are in the hiring process.',
        iconType: 'Filter'
      },
      {
        title: 'AI Resume Parsing',
        desc: 'Automatically extract skills, experience, and contact info from uploaded PDFs. Say goodbye to manual data entry.',
        iconType: 'Search'
      },
      {
        title: 'Interview Scheduling',
        desc: 'Sync with Google Workspace and Office 365. Send candidates a booking link that only shows available times across the interview panel.',
        iconType: 'Calendar'
      },
      {
        title: 'Collaborative Hiring',
        desc: 'Leave private notes, mention team members, and use standardized scorecards to ensure unbiased hiring decisions.',
        iconType: 'Users'
      },
      {
        title: 'Offer Letters & E-signatures',
        desc: 'Generate offer letters from templates automatically. Send them directly for binding digital signatures via the platform.',
        iconType: 'Mail'
      }
    ],
    bottomTitle: 'From \'Candidate\' to \'Employee\' in One Click',
    bottomDesc: 'When a candidate accepts an offer, the real magic happens. TalentOps instantly converts their profile into a new employee record.',
    bottomChecklist: [
      'No duplicate data entry across ATS and HRIS.',
      'Automatically trigger Day 1 onboarding task lists.',
      'Pre-fill tax and payroll forms with candidate data.',
      'Notify IT to provision laptops and software licenses.'
    ],
    bottomBgType: 'dark'
  },
  'performance': {
    id: 'performance',
    tag: 'TalentOps Performance',
    titlePart1: 'Build a High-Performing ',
    titleHighlight: 'Company Culture',
    subtitle: 'Ditch the once-a-year review. Enable continuous feedback, align goals with company objectives, and recognize achievements in real-time.',
    primaryCtaText: 'Discover Features',
    secondaryCtaText: 'Book a Tour',
    brandColor: '#ef4444', // Red
    featuresTitle: 'Tools to Develop Your Top Talent',
    featuresSubtitle: 'Everything managers and employees need to align on expectations, track progress, and grow their careers.',
    features: [
      {
        title: 'Goal Setting & OKRs',
        desc: 'Set individual, team, and company-wide goals. Visually track progress and see exactly how day-to-day work impacts the big picture.',
        iconType: 'Target'
      },
      {
        title: 'Continuous Feedback',
        desc: 'Request and provide real-time feedback anytime. Break down silos by encouraging cross-departmental praise and constructive input.',
        iconType: 'MessageSquare'
      },
      {
        title: 'Performance Reviews',
        desc: 'Run automated review cycles (annual, quarterly, or project-based). Fully customizable questionnaires and workflows.',
        iconType: 'TrendingUp'
      },
      {
        title: '1-on-1 Check-ins',
        desc: 'Collaborative agendas for manager-employee meetings. Document discussion points, blockers, and action items in one place.',
        iconType: 'Users'
      },
      {
        title: '360-Degree Reviews',
        desc: 'Gather anonymous feedback from peers, direct reports, and managers to get a holistic view of employee performance.',
        iconType: 'RefreshCw'
      },
      {
        title: 'Skills Matrix',
        desc: 'Map out the competencies needed for every role. Identify skill gaps across teams and tailor training programs effectively.',
        iconType: 'BarChart'
      }
    ],
    bottomTitle: 'Tie Performance Directly to Compensation',
    bottomDesc: 'When performance review cycles end, compensation planning begins. TalentOps automatically links review scores and goal completions directly to payroll bonuses and salary band recommendations.',
    bottomChecklist: [
      'Data-driven salary adjustment suggestions.',
      'Automated bonus calculations based on goal attainment.',
      'Transparent career progression pathing.',
      'Historical performance data securely stored in one place.'
    ],
    bottomBgType: 'dark'
  }
};
