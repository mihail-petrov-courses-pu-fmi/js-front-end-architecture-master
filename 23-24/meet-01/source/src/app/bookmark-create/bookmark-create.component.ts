import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'bookmark-create',
    templateUrl: './bookmark-create.component.html',
    styleUrl: './bookmark-create.component.html',
    standalone: true,
})
export class BookmarkCreateComponent {

    @Output()
    public onLinkSaved = new EventEmitter();

  private bookmarkIndex = 0;

  public bookmarkCollection = [
    {url: 'Link 1', title: null, description: null, category: null},
    {url: 'Link 2', title: null, description: null, category: null},
    {url: 'Link 3', title: null, description: null, category: null}
  ];

  public processedBookmarkCollection: any[] = [];

  public processableBookmark = this.bookmarkCollection[0].url;

  public processNextBookmark() {

    this.bookmarkIndex++;
    if(this.bookmarkIndex >= this.bookmarkCollection.length) {
      this.bookmarkIndex = 0;
    }

    // сигнал за промяна на HTML темплейта
    // this.processableBookmark = this.bookmarkCollection[this.bookmarkIndex];
  }

  public getProcessableBookmark() {
    return this.bookmarkCollection[this.bookmarkIndex];
  }

  public processBookmarkTitle(inputEvent: any) {
    this.bookmarkCollection[this.bookmarkIndex].title = inputEvent.target.value; 
  }

  public processBookmarkDescription($event: any) {
    this.bookmarkCollection[this.bookmarkIndex].description = $event.target.value;
  }

  public processBookmarkCategory($event: any) {
    this.bookmarkCollection[this.bookmarkIndex].category = $event.target.value;
  }

  public isProcessable(): boolean {

    const bookmark =  this.bookmarkCollection[this.bookmarkIndex];

      return (bookmark.title        != null) && 
             (bookmark.description  != null) && 
             (bookmark.category     != null);   
  }

  public saveBookmark() {

    this.processedBookmarkCollection.push(
      this.bookmarkCollection[this.bookmarkIndex]
    ); 

    this.bookmarkCollection.splice(this.bookmarkIndex, 1);    

    // ИЗПРАЩАМ масива с елементи, които напълних до момента
    this.onLinkSaved.emit(this.processedBookmarkCollection);
  }
}