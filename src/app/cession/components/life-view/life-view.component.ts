import { Component, OnInit } from "@angular/core";
import * as shape from "d3-shape";
import { Edge, Node, ClusterNode } from "@swimlane/ngx-graph";
import { nodes, links } from "../../services/data1";
import { Subject, onErrorResumeNext } from "rxjs";
import { CessionService } from "../../services/cession.service";
import { Person } from "../../models/cession.model";
@Component({
  selector: "life-view",
  templateUrl: "./life-view.component.html",
  styleUrls: ["./life-view.component.css"]
})
export class LifeViewComponent implements OnInit {
  constructor(private _cessionService: CessionService) {}

  // graph info
  nodes: Node[] = nodes;
  links: Edge[] = links;
  layout: String = "dagre";
  //layout: String = "d3ForceDirected";
  curve: any = shape.curveLinear;
  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = false;
  autoZoom: boolean = false;
  autoCenter: boolean = true;
  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  nodes1: Node[] = [];
  links1: Edge[] = [];
  // cession info
  cessonsForLife: Person;

  // node id's
  personId: string = "person";
  cessionId: string = "cession";
  cessionLinkId: string = "cessionLink";
  splitId: string = "split";
  splitLinkId: string = "splitLink";
  poolId: string = "pool";
  poolLinkId: string = "poolLink";
  stackId: string = "stack";
  stackLinkId: string = "stackLink";
  cessionOverrideId: string = "cessionOveride";
  cessionOverrideLinkId: string = "cessionOverrideLink";
  cessionHistoryId: string = "cessionHistory";
  cessionHistoryLinkId: string = "cessionHistoryLink";
  cessionTransactionId: string = "cessionTransaction";
  cessionTransactionLinkId: string = "cessionTransactionLink";
  cessionRetroCessionId: string = "retroCession";
  cessionRetroCessionLinkId: string = "retroCessionLink";

  async ngOnInit() {
    this.cessonsForLife = await this._cessionService.getCessionInfo(123);
    this.ConvertCessionToGraph(this.cessonsForLife);
  }

  ConvertCessionToGraph(person: Person) {
    this.nodes1.push({ id: this.personId, label: person.Name, data: person });

    // Add Cessions to Person Node
    let currentCession = 1;
    person.Cessions.forEach(cession =>
      this.addCession(cession, currentCession++)
    );

    // Add Splits to Person Node
    let currentSplit = 1;
    person.Splits.forEach(split => this.addSplit(split, currentSplit++));

    // Add Cession Overide
    this.addCessionOverride(person.CessionOverride);
  }

  addCession(cession, currentCession) {
    this.nodes1.push({
      id: this.cessionId + currentCession.toString(),
      label: cession.Number.toString(),
      data: cession
    });

    this.links1.push({
      id: this.cessionLinkId + currentCession.toString(),
      source: this.personId,
      target: this.cessionId + currentCession.toString()
    });

    // Add Cession History
    let currentCessionHistory = 1;
    cession.CessionHistory.forEach(cessionHistory =>
      this.addCessionHistory(
        cessionHistory,
        currentCessionHistory++,
        currentCession
      )
    );

    // Add Cession Transaction
    let currentCessionTransaction = 1;
    cession.CessionTransactions.forEach(cessionTransaction =>
      this.addCessionTransaction(
        cessionTransaction,
        currentCessionTransaction++,
        currentCession
      )
    );

    // Add Retro Cessions
    this.addRetroCession(cession, currentCession);
    // Add Pool
    this.addPool(cession, currentCession);

    // Add Stack
    this.addStack(cession, currentCession);
  }

  addCessionOverride(cessionOverride) {
    this.nodes1.push({
      id: this.cessionOverrideId,
      label: cessionOverride.Name,
      data: cessionOverride
    });
    this.links1.push({
      id: this.cessionOverrideLinkId,
      source: this.personId,
      target: this.cessionOverrideId
    });
  }
  addSplit(split, currentSplit) {
    this.nodes1.push({
      id: this.splitId + currentSplit.toString(),
      label: split.Header,
      data: split
    });
    this.links1.push({
      id: this.splitLinkId + currentSplit.toString(),
      source: this.personId,
      target: this.splitId + currentSplit.toString()
    });
  }

  addCessionHistory(cessionHistory, currentCessionHistory, currentCession) {
    this.nodes1.push({
      id: this.cessionHistoryId + currentCessionHistory.toString(),
      label: cessionHistory.Number,
      data: cessionHistory
    });
    this.links1.push({
      id: this.cessionHistoryLinkId + currentCessionHistory.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.cessionHistoryId + currentCessionHistory.toString()
    });
  }

  addCessionTransaction(
    cessionTransaction,
    currentCessionTransaction,
    currentCession
  ) {
    this.nodes1.push({
      id: this.cessionTransactionId + currentCessionTransaction.toString(),
      label: cessionTransaction.Number,
      data: cessionTransaction
    });
    this.links1.push({
      id: this.cessionTransactionLinkId + currentCessionTransaction.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.cessionTransactionId + currentCessionTransaction.toString()
    });
  }
  addPool(cession, currentCession) {
    this.nodes1.push({
      id: this.poolId + currentCession.toString(),
      label: "Pool: " + cession.Pool.PoolName,
      data: cession.Pool
    });
    this.links1.push({
      id: this.poolLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.poolId + currentCession.toString()
    });
  }

  addStack(cession, currentCession) {
    this.nodes1.push({
      id: this.stackId + currentCession.toString(),
      label: "Stack: " + cession.Stack.StackName,
      data: cession.Stack
    });
    this.links1.push({
      id: this.stackLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.stackId + currentCession.toString()
    });
  }

  addRetroCession(cession, currentCession) {
    this.nodes1.push({
      id: this.cessionRetroCessionId + currentCession.toString(),
      label: "Retro Cession",
      data: cession.RetroCession
    });
    this.links1.push({
      id: this.cessionRetroCessionLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.cessionRetroCessionId + currentCession.toString()
    });
  }

  select($event) {
    console.info($event);
    alert("NODE SELECTED1");
  }
}
