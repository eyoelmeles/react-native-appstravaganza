export interface Transaction {
  sender: {
    name: string;
    email: string;
  };
  receiver: {
    name: string;
    email: string;
  };
  amount: number;
  date: Date;
  transactionId: string;
  referenceId: string;
}
