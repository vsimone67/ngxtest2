import { Edge, Node, ClusterNode } from "@swimlane/ngx-graph";

export const nodes: Node[] = [
  {
    id: "Root",
    label: "12345",
    data: { tooltip: "Cession 12345 / 5" }
  },
  {
    id: "First",
    label: "12/10/2012 - 12/10/2013",
    data: { tooltip: "Cession History 1" }
  },
  {
    id: "Second",
    label: "06/25/2008 - 12/12/2009",
    data: { tooltip: "Cession History 2" }
  },
  {
    id: "Third",
    label: "04/30/2006 - 04/30/2007",
    data: { tooltip: "Cession History 3" }
  },
  {
    id: "Fourth",
    label: "10/12/2010 - 10/12/2011",
    data: { tooltip: "Cession History 4" }
  },

  {
    id: "LimitFirst",
    label: "Retention Limit",
    data: {
      tooltip:
        "<div> Form with the fields Base NAAR, Base Reinsured, Issue Age / Duration, Retention Limit, Table numbre / name, RetentionExclusion, Recapture, JointType</div>"
    }
  },
  {
    id: "StackFirst",
    label: "Stack capacity",
    data: {
      tooltip:
        '<div> <form><div class="form-group row"><label for="stackName" class="col-sm-2 col-form-label">Name</label>' +
        '<div class="col-sm-10"><input type="text" readonly class="form-control-plaintext" id="stackName" value="FlowD1.1">' +
        "</div></div></form></div>"
    }
  },
  {
    id: "PoolFirst",
    label: "Pool Capacity",
    data: {
      tooltip:
        "<div> Form with the fields Pool Name, QuotePlan, Pool type, Binding Type, CountryRatingGroup</div>"
    }
  },
  {
    id: "SplitsFirst",
    label: "Splits",
    data: {
      tooltip:
        "<div> Splits data grid with Company name, Split Category, Split Amount, Ceded Amount</div>"
    }
  },
  {
    id: "PriorsPostsFirst",
    label: "Priors/Posts",
    data: {
      tooltip:
        "<div> Form with the fields Priors Retained NAAR, Priors Retained Ceded, Priors Affiliate NAAR, Priors Affiliate Ceded, Posts Retained NAAR, Posts Retained Ceded</div>"
    }
  },
  {
    id: "VerboseFirst",
    label: "Verbose",
    data: {
      tooltip:
        "<div> Gap period between 07/01/2018 and 08/01/2018 was found and mocked</div>" +
        '<div> Stack participant "SCOR Global Life Americas Reinsurance Company" gets 25.0000% of Naar: $9,000.00, Ceded: $9,000.00 which is Naar: $2,250.00, Ceded: $2,250.00. </div>' +
        "<div> Retention capacity was Naar: $79,228,162.00, Ceded: $79,228,162.00. </div>" +
        "<div> Found 95 split and removed 45 because of black-out period</div>" +
        "<div> Remaining allocation amount was Naar: $9,000.00, Ceded: $9,000.00.</div>" +
        '<div> Pool Player "Pacific Life Reinsurance Company" gets 75.0000% of Naar: $9,000.00, Ceded: $9,000.00 which is Naar: $6,750.00, Ceded: $6,750.00. </div>' +
        "<div> Remaining allocation amount was Naar: $6,750.00, Ceded: $6,750.00.</div>"
    }
  },

  {
    id: "LimitSecond",
    label: "Retention Limit",
    data: { tooltip: "First testdata" }
  },
  {
    id: "StackSecond",
    label: "Stack capacity",
    data: { tooltip: "First testdata" }
  },
  {
    id: "PoolSecond",
    label: "Pool Capacity",
    data: { tooltip: "First testdata" }
  },
  {
    id: "SplitsSecond",
    label: "Splits",
    data: { tooltip: "First testdata" }
  },
  {
    id: "PriorsPostsSecond",
    label: "Priors/Posts",
    data: { tooltip: "First testdata" }
  },
  {
    id: "VerboseSecond",
    label: "Verbose",
    data: { tooltip: "First testdata" }
  },

  {
    id: "LimitThird",
    label: "Retention Limit",
    data: { tooltip: "First testdata" }
  },
  {
    id: "StackThird",
    label: "Stack capacity",
    data: { tooltip: "First testdata" }
  },
  {
    id: "PoolThird",
    label: "Pool Capacity",
    data: { tooltip: "First testdata" }
  },
  {
    id: "SplitsThird",
    label: "Splits",
    data: { tooltip: "First testdata" }
  },
  {
    id: "PriorsPostsThird",
    label: "Priors/Posts",
    data: { tooltip: "First testdata" }
  },
  {
    id: "VerboseThird",
    label: "Verbose",
    data: { tooltip: "First testdata" }
  },

  {
    id: "LimitFourth",
    label: "Retention Limit",
    data: { tooltip: "First testdata" }
  },
  {
    id: "StackFourth",
    label: "Stack capacity",
    data: { tooltip: "First testdata" }
  },
  {
    id: "PoolFourth",
    label: "Pool Capacity",
    data: { tooltip: "First testdata" }
  },
  {
    id: "SplitsFourth",
    label: "Splits",
    data: { tooltip: "First testdata" }
  },
  {
    id: "PriorsPostsFourth",
    label: "Priors/Posts",
    data: { tooltip: "First testdata" }
  },
  {
    id: "VerboseFourth",
    label: "Verbose",
    data: { tooltip: "First testdata" }
  }
];

export const links: Edge[] = [
  {
    id: "a",
    source: "Root",
    target: "First"
  },
  {
    id: "b",
    source: "Root",
    target: "Second"
  },
  {
    id: "c",
    source: "Root",
    target: "Third"
  },
  {
    id: "d",
    source: "Root",
    target: "Fourth"
  },

  {
    id: "aa",
    source: "First",
    target: "LimitFirst"
  },
  {
    id: "ab",
    source: "First",
    target: "StackFirst"
  },
  {
    id: "ac",
    source: "First",
    target: "PoolFirst"
  },
  {
    id: "ad",
    source: "First",
    target: "SplitsFirst"
  },
  {
    id: "ae",
    source: "First",
    target: "PriorsPostsFirst"
  },
  {
    id: "af",
    source: "First",
    target: "VerboseFirst"
  },
  {
    id: "ba",
    source: "Second",
    target: "LimitSecond"
  },
  {
    id: "bb",
    source: "Second",
    target: "StackSecond"
  },
  {
    id: "bc",
    source: "Second",
    target: "PoolSecond"
  },
  {
    id: "bd",
    source: "Second",
    target: "SplitsSecond"
  },
  {
    id: "be",
    source: "Second",
    target: "PriorsPostsSecond"
  },
  {
    id: "bf",
    source: "Second",
    target: "VerboseSecond"
  },
  {
    id: "ca",
    source: "Third",
    target: "LimitThird"
  },
  {
    id: "cb",
    source: "Third",
    target: "StackThird"
  },
  {
    id: "cc",
    source: "Third",
    target: "PoolThird"
  },
  {
    id: "cd",
    source: "Third",
    target: "SplitsThird"
  },
  {
    id: "ce",
    source: "Third",
    target: "PriorsPostsThird"
  },
  {
    id: "cf",
    source: "Third",
    target: "VerboseThird"
  },
  {
    id: "da",
    source: "Fourth",
    target: "LimitFourth"
  },
  {
    id: "db",
    source: "Fourth",
    target: "StackFourth"
  },
  {
    id: "dc",
    source: "Fourth",
    target: "PoolFourth"
  },
  {
    id: "dd",
    source: "Fourth",
    target: "SplitsFourth"
  },
  {
    id: "de",
    source: "Fourth",
    target: "PriorsPostsFourth"
  },
  {
    id: "df",
    source: "Fourth",
    target: "VerboseFourth"
  }
];

export const clusters: ClusterNode[] = [
  {
    id: "cluster0",
    label: "Cluster node",
    childNodeIds: ["2", "3"]
  }
];
