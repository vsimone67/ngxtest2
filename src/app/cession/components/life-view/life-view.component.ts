import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";
import * as shape from "d3-shape";
import { Edge, Node, ClusterNode, Layout } from "@swimlane/ngx-graph";
import { nodes, clusters, links } from "../../services/data1";
import { Subject } from "rxjs";
@Component({
  selector: "life-view",

  templateUrl: "./life-view.component.html",
  styleUrls: ["./life-view.component.css"]
})
export class LifeViewComponent implements OnInit {
  name = "Crone Tree Demo";

  nodes: Node[] = nodes;
  clusters: ClusterNode[] = clusters;

  links: Edge[] = links;

  layout: String | Layout = "d3ForceDirected";
  layouts: any[] = [
    {
      label: "D3 Force Directed",
      value: "d3ForceDirected"
    },
    {
      label: "D3 dagreCluster",
      value: "dagreCluster"
    },
    ,
    {
      label: "D3 dagre",
      value: "dagre"
    }
  ];

  // line interpolation
  curveType: string = "Linear";
  curve: any = shape.curveLinear;
  interpolationTypes = [
    "Bundle",
    "Cardinal",
    "Catmull Rom",
    "Linear",
    "Monotone X",
    "Monotone Y",
    "Natural",
    "Step",
    "Step After",
    "Step Before"
  ];

  draggingEnabled: boolean = false;
  panningEnabled: boolean = false;
  zoomEnabled: boolean = false;

  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;

  autoZoom: boolean = false;
  autoCenter: boolean = true;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

  ngOnInit() {
    this.setInterpolationType(this.curveType);
  }

  setInterpolationType(curveType) {
    this.curveType = curveType;
    if (curveType === "Bundle") {
      this.curve = shape.curveBundle.beta(1);
    }
    if (curveType === "Cardinal") {
      this.curve = shape.curveCardinal;
    }
    if (curveType === "Catmull Rom") {
      this.curve = shape.curveCatmullRom;
    }
    if (curveType === "Linear") {
      this.curve = shape.curveLinear;
    }
    if (curveType === "Monotone X") {
      this.curve = shape.curveMonotoneX;
    }
    if (curveType === "Monotone Y") {
      this.curve = shape.curveMonotoneY;
    }
    if (curveType === "Natural") {
      this.curve = shape.curveNatural;
    }
    if (curveType === "Step") {
      this.curve = shape.curveStep;
    }
    if (curveType === "Step After") {
      this.curve = shape.curveStepAfter;
    }
    if (curveType === "Step Before") {
      this.curve = shape.curveStepBefore;
    }
  }

  setLayout(layoutName: string): void {
    const layout = this.layouts.find(l => l.value === layoutName);
    this.layout = layoutName;
    if (!layout.isClustered) {
      this.clusters = undefined;
    } else {
      this.clusters = clusters;
    }
  }

  select($event) {
    console.info($event);
    alert("Whew SELECT");
  }
}
