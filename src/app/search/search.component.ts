import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';
  changeSearchValue(eventData: Event) {
    //console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  OnSearchTextChanged() {
    this.searchTextChanged.emit(this.searchValue);
    console.log(this.searchValue);
  }
}
