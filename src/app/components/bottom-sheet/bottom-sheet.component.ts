import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  @Input('totalValue') public totalValue: string = '10000.00';

  constructor() { }

  ngOnInit(): void {}

}
