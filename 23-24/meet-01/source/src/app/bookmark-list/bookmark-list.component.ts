import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector    : 'bookmark-list',
    templateUrl : './bookmark-list.component.html',
    standalone  : true,
    imports     : [CommonModule]
})
export class BookmarkListComponent {

    @Input()
    public inputBookmark: any[] = [];
}