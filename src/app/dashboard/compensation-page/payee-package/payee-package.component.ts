import {Component, OnInit, Input} from '@angular/core';
import * as moment from 'moment';

export interface PayeeDataElement {
  name: string;
  effectiveDate: number;
  description: number;
  source: string;
  detail: string;
}

@Component({
  selector: 'app-payee-package',
  templateUrl: './payee-package.component.html',
  styleUrls: ['./payee-package.component.scss'],
})
export class PayeePackageComponent implements OnInit {
  @Input() payeeData: PayeeDataElement[];
  private readonly dateFormat = 'MMM-YYYY';

  public displayedColumns: string[] = ['name', 'description', 'effectiveDate', 'source', 'detail'];

  constructor() {}

  ngOnInit() {}

  public getLabel(payeeData: any): string {
    return `${this.formatDate(payeeData.effectiveDate)} - ${this.formatDate(payeeData.expiryDate)}, ${
      payeeData.periodType.name
    }`;
  }

  private formatDate(date: Date): string {
    return date ? moment(date).format(this.dateFormat) : '... ';
  }
}
