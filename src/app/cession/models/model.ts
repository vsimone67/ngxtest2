declare module models {
  export interface RetentionLimit {
    BaseNAAR: number;
    BaseReinsured: number;
    IssueAge: number;
    Duration: number;
    MaxGradedRetentionLimit: number;
    TableNumber: number;
    TableName: string;
    IsExcludedFromRetention: boolean;
    IsEligibleForRecapture: boolean;
    JointType: string;
  }

  export interface Pool {
    PoolName: string;
    PoolType: string;
    PlanName: string;
    BindingType: string;
    CountryRatingGroup: string;
  }

  export interface Stack {
    StackName: string;
    ReinsuranceType: string;
    RetainedRatio: number;
    NAARToAllocate: number;
    CededToAllocate: number;
  }

  export interface Splits {
    Header: string;
    RowData: string[];
  }

  export interface Priors {
    RetainedNAAR: number;
    RetainedCeded: number;
    AffiliateNAAR: number;
    AffiliateCeded: number;
  }

  export interface Posts {
    RetainedNAAR: number;
    RetainedCeded: number;
  }

  export interface PriorsPosts {
    Priors: Priors;
    Posts: Posts;
  }

  export interface History {
    EffectiveDate: string;
    CancelDate: string;
    RetentionLimit: RetentionLimit;
    Pool: Pool;
    Stack: Stack;
    Splits: Splits;
    PriorsPosts: PriorsPosts;
    Verbose: string;
  }

  export interface Cession {
    Number: number;
    Sequence: number;
    CedingCompany: string;
    LegalEntity: string;
    Histories: History[];
  }

  export interface RootObject {
    Name: string;
    DOB: string;
    Gender: string;
    Residence: string;
    NumberOfCessions: number;
    Cessions: Cession[];
  }
}
