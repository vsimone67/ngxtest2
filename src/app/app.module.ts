import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxGraphModule } from "@swimlane/ngx-graph";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/material-module";
import {
  OverlayContainer,
  FullscreenOverlayContainer
} from "@angular/cdk/overlay";
import { MdePopoverModule } from "@material-extended/mde";
import { LifeViewComponent } from "./cession/components/life-view/life-view.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxGraphModule,
    MdePopoverModule
  ],
  providers: [
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer
    }
  ],
  declarations: [AppComponent, LifeViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
