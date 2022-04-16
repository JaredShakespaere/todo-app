import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnChanges {
  @Input() sortByTitle: boolean = false;
  @Input() sortByDate: boolean = false;

  constructor() {}

  ngOnChanges(): void {}
  //   sortByTile(): {
  //     if(true){
  //       console.log('sort by title was clicked');
  //   }
  // }
}
