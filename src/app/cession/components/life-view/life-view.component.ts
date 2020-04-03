import { Component, OnInit } from "@angular/core";
import * as shape from "d3-shape";
import { Edge, Node, Layout } from "@swimlane/ngx-graph";
import { Subject } from "rxjs";
import { CessionService } from "../../services/cession.service";
import { Person } from "../../models/cession.model";
import { DagreNodesOnlyLayout } from "./customLayout";
@Component({
  selector: "life-view",
  templateUrl: "./life-view.component.html",
  styleUrls: ["./life-view.component.css"]
})
export class LifeViewComponent implements OnInit {
  constructor(private _cessionService: CessionService) {}

  //layout: String = "dagre";
  layout: Layout = new DagreNodesOnlyLayout();
  //layout: String = "d3ForceDirected";
  curve: any = shape.curveLinear;
  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;
  autoZoom: boolean = false;
  autoCenter: boolean = false;
  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  cessionNodes: Node[] = [];
  cessionLinks: Edge[] = [];

  layoutSettings = {
    orientation: "TB"
  };
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

  centerGraph() {
    this.zoomToFit$.next(true);
  }
  fitGraph() {
    this.center$.next(true);
  }

  updateGraph() {
    this.update$.next(true);
  }
  ConvertCessionToGraph(person: Person) {
    this.cessionNodes.push({
      id: this.personId,
      label: person.Name,
      data: person
    });

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
    this.cessionNodes.push({
      id: this.cessionId + currentCession.toString(),
      label: "Cession: " + cession.Number.toString(),
      data: cession
    });

    this.cessionLinks.push({
      id: this.cessionLinkId + currentCession.toString(),
      source: this.personId,
      target: this.cessionId + currentCession.toString()
    });

    // Add Cession History
    let currentCessionHistory = 1;
    cession.CessionHistory.forEach(cessionHistory =>
      this.addCessionHistory(cessionHistory, currentCession)
    );

    // Add Cession Transaction
    let currentCessionTransaction = 1;
    cession.CessionTransactions.forEach(cessionTransaction =>
      this.addCessionTransaction(
        cessionTransaction,

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
    this.cessionNodes.push({
      id: this.cessionOverrideId,
      label: cessionOverride.Name,
      data: cessionOverride
    });
    this.cessionLinks.push({
      id: this.cessionOverrideLinkId,
      source: this.personId,
      target: this.cessionOverrideId
    });
  }
  addSplit(split, currentSplit) {
    this.cessionNodes.push({
      id: this.splitId + currentSplit.toString(),
      label: split.Header,
      data: split
    });
    this.cessionLinks.push({
      id: this.splitLinkId + currentSplit.toString(),
      source: this.personId,
      target: this.splitId + currentSplit.toString()
    });
  }

  addCessionHistory(cessionHistory, currentCession) {
    this.cessionNodes.push({
      id: this.cessionHistoryId + currentCession.toString(),
      label: cessionHistory.Number,
      data: cessionHistory
    });
    this.cessionLinks.push({
      id: this.cessionHistoryLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.cessionHistoryId + currentCession.toString()
    });
  }

  addCessionTransaction(cessionTransaction, currentCession) {
    this.cessionNodes.push({
      id: this.cessionTransactionId + currentCession.toString(),
      label: cessionTransaction.Number,
      data: cessionTransaction
    });
    this.cessionLinks.push({
      id: this.cessionTransactionLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.cessionTransactionId + currentCession.toString()
    });
  }
  addPool(cession, currentCession) {
    this.cessionNodes.push({
      id: this.poolId + currentCession.toString(),
      label: "Pool: " + cession.Pool.PoolName,
      data: cession.Pool
    });
    this.cessionLinks.push({
      id: this.poolLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.poolId + currentCession.toString()
    });
  }

  addStack(cession, currentCession) {
    this.cessionNodes.push({
      id: this.stackId + currentCession.toString(),
      label: "Stack: " + cession.Stack.StackName,
      data: cession.Stack
    });
    this.cessionLinks.push({
      id: this.stackLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.stackId + currentCession.toString()
    });
  }

  addRetroCession(cession, currentCession) {
    this.cessionNodes.push({
      id: this.cessionRetroCessionId + currentCession.toString(),
      label: "Retro Cession",
      data: cession.RetroCession
    });
    this.cessionLinks.push({
      id: this.cessionRetroCessionLinkId + currentCession.toString(),
      source: this.cessionId + currentCession.toString(),
      target: this.cessionRetroCessionId + currentCession.toString()
    });
  }

  select($event) {
    console.info($event);
    alert("NODE SELECTED");
  }
}
