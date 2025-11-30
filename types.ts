export interface ToolData {
  name: string;
  slug: string;
  type: string;
  description: string;
  calisma_mantigi: string;
  faq_summary: string; // From Master TSV
  longtails: string;
  long_description?: string; // From Content TSV
  faq_content?: string; // From Content TSV
  faq_json: FAQItem[]; // Structured FAQ data
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum CalculatorType {
  LOAN = 'loan',
  PERCENTAGE = 'percentage',
  DATE = 'date',
  BMI = 'bmi',
  UNIT = 'unit',
  TAX = 'tax',
  GENERIC = 'generic'
}