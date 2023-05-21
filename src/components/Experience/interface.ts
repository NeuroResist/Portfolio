export interface IExperience {
  descriptions: string[];
  position: string;
  site: string;
  city: string;
  companyName: string;
  isEnd: boolean;
  to: { startDate?: string; endTime?: string };
  from: { startDate: string; startTime: string };
  period: string;
}
