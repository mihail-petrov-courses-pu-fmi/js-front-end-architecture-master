// JS
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BookmarkCreateComponent } from "./bookmark-create/bookmark-create.component";
import { BookmarkListComponent } from "./bookmark-list/bookmark-list.component";
import { TrafficLightComponent } from "./traffic-light/traffic-light.component";

@Component({
  selector    : 'application',
  templateUrl : './app.component.html',
  styleUrl    : './app.component.scss',
  imports     : [
    CommonModule, 
    BookmarkCreateComponent, 
    BookmarkListComponent,
    TrafficLightComponent
  ],
  standalone  : true
})
export class AppComponent {

  public processedBookmarkCollection: any[] = [];

  public trafficLightState: any;

  public processLinkSaved($event: any) {
    this.processedBookmarkCollection = $event;
  }

  public processTrafficLight($event: any) {
    this.trafficLightState = $event;
    console.log(this.trafficLightState);
  }
}