export interface Person {
  Id: string;
  Name: string;
  DOB: string;
  Gender: string;
  Residence: string;
  NumberOfCessions: number;
  Cessions: Cession[];
  Splits: Splits[];
  CessionOverride: CessionOverride;
}

export interface Cession {
  Id: string;
  Number: number;
  Sequence: number;
  Pool: Pool;
  Stack: Stack;
  CessionHistory: CessionHistory[];
  CessionTransactions: CessionTranaction[];
  RetroCession: RetroCessions[];
}

export interface Pool {
  Id: string;
  PoolName: string;
  PoolType: string;
  PlanName: string;
  BindingType: string;
  CountryRatingGroup: string;
}

export interface Stack {
  Id: string;
  StackName: string;
  ReinsuranceType: string;
  RetainedRatio: number;
  NAARToAllocate: number;
  CededToAllocate: number;
}

export interface CessionHistory {
  Id: string;
  Number: number;
  Sequence: number;
  Pool: Pool;
  Stack: Stack;
}

export interface CessionTranaction {
  Id: string;
  Number: number;
  Sequence: number;
  Pool: Pool;
  Stack: Stack;
}

export interface CessionOverride {
  Name: string;
}

export interface Splits {
  Id: string;
  Header: string;
  RowData: string[];
}

export interface RetroCessions {
  Id: string;
  RetroTransactions: RetroTransaction[];
  RetroTransactionStaging: RetroTransactionStaging[];
}
export interface RetroTransaction {
  Id: string;
  RetroAllocations: RetroAllocation[];
}

export interface RetroAllocation {
  Id: string;
}

export interface RetroTransactionStaging {
  Id: string;
  RetroAllocations: RetroAllocationStaging[];
}

export interface RetroAllocationStaging {
  Id: string;
}
