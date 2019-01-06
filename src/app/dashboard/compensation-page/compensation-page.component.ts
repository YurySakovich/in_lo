import {Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild} from '@angular/core';

import {PayeeService} from '@core/services/payee.service';

@Component({
  selector: 'app-compensation-page',
  templateUrl: './compensation-page.component.html',
  styleUrls: ['./compensation-page.component.scss'],
})
export class CompensationPageComponent implements OnInit, AfterViewInit {
  @ViewChild('tabGroup') tabGroup;
  private teamPayeeData;

  constructor(private payeeService: PayeeService) {}

  ngOnInit() {
    this.payeeService.getPortalTeamPayee(141).subscribe((data) => {
      this.teamPayeeData = data;
      console.log('payee', data);
    });
  }

  ngAfterViewInit() {
    console.log(this.tabGroup);
  }
}
