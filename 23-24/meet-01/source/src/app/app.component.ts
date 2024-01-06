// JS
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BookmarkCreateComponent } from "./bookmark-create/bookmark-create.component";

@Component({
  selector    : 'application',
  templateUrl : './app.component.html',
  styleUrl    : './app.component.scss',
  imports     : [CommonModule, BookmarkCreateComponent],
  standalone  : true
})
export class AppComponent {

  public processedBookmarkCollection: any[] = [];

  public processLinkSaved($event: any) {
    this.processedBookmarkCollection = $event;
  }
}