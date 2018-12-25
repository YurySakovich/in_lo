import {Component, OnInit, Input} from '@angular/core';
import {CardList} from './card-list.enum'

@Component({
  selector: 'app-sub-pages-wrapper',
  templateUrl: './sub-pages-wrapper.component.html',
  styleUrls: ['./sub-pages-wrapper.component.scss']
})
export class SubPagesWrapperComponent implements OnInit {
  @Input() cardType: string;

  public cardListEnum = CardList;

  constructor() { }

  ngOnInit() {
    console.log(this.cardType)
  }

}
