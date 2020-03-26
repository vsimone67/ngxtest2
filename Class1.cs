public class RetentionLimit
{
    public double BaseNAAR { get; set; }
    public double BaseReinsured { get; set; }
    public int IssueAge { get; set; }
    public int Duration { get; set; }
    public double MaxGradedRetentionLimit { get; set; }
    public int TableNumber { get; set; }
    public string TableName { get; set; }
    public bool IsExcludedFromRetention { get; set; }
    public bool IsEligibleForRecapture { get; set; }
    public string JointType { get; set; }
}

public class Pool
{
    public string PoolName { get; set; }
    public string PoolType { get; set; }
    public string PlanName { get; set; }
    public string BindingType { get; set; }
    public string CountryRatingGroup { get; set; }
}

public class Stack
{
    public string StackName { get; set; }
    public string ReinsuranceType { get; set; }
    public double RetainedRatio { get; set; }
    public double NAARToAllocate { get; set; }
    public double CededToAllocate { get; set; }
}

public class Splits
{
    public string Header { get; set; }
    public List<string> RowData { get; set; }
}

public class Priors
{
    public double RetainedNAAR { get; set; }
    public double RetainedCeded { get; set; }
    public double AffiliateNAAR { get; set; }
    public double AffiliateCeded { get; set; }
}

public class Posts
{
    public double RetainedNAAR { get; set; }
    public double RetainedCeded { get; set; }
}

public class PriorsPosts
{
    public Priors Priors { get; set; }
    public Posts Posts { get; set; }
}

public class History
{
    public string EffectiveDate { get; set; }
    public string CancelDate { get; set; }
    public RetentionLimit RetentionLimit { get; set; }
    public Pool Pool { get; set; }
    public Stack Stack { get; set; }
    public Splits Splits { get; set; }
    public PriorsPosts PriorsPosts { get; set; }
    public string Verbose { get; set; }
}

public class Cession
{
    public int Number { get; set; }
    public int Sequence { get; set; }
    public string CedingCompany { get; set; }
    public string LegalEntity { get; set; }
    public List<History> Histories { get; set; }
}

public class Life
{
    public string Name { get; set; }
    public string DOB { get; set; }
    public string Gender { get; set; }
    public string Residence { get; set; }
    public int NumberOfCessions { get; set; }
    public List<Cession> Cessions { get; set; }
}
