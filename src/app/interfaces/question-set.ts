export interface QuestionSet {
  context: string;
  question: string;
  responses: {
    1?: string
    2?: string
    3?: string
    4?: string
  };

  correct: number;
  reason: string;
  image?: string;
}
