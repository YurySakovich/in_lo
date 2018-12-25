import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compensation-page',
  templateUrl: './compensation-page.component.html',
  styleUrls: ['./compensation-page.component.scss'],
})
export class CompensationPageComponent implements OnInit, AfterViewInit {
  isActive=true;
  @ViewChild('tabGroup') tabGroup;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    console.log(this.tabGroup);
    // setTimeout(() => {
    //   this.tabGroup.selectedTabChange(1);
    // }, 0);

  }

}
