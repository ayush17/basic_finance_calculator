export interface Quote {
  id: string;
  quoteName: string;
  cost: number;
  profit: number;
  sellingPrice: number;
  term: number;
  rate: number;
  taxRate: number;
  outOfPocket: number;
  taxes: number;
  baseLoanAmount: number;
  interest: number;
  totalLoanAmount: number;
  monthlyPayment: number;
}
