import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxGraphModule } from "@swimlane/ngx-graph";
import { AppComponent } from "./app.component";

import {
  OverlayContainer,
  FullscreenOverlayContainer
} from "@angular/cdk/overlay";

import { LifeViewComponent } from "./cession/components/life-view/life-view.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGraphModule,
    HttpClientModule
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
