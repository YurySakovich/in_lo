import {Component, OnInit} from '@angular/core';
import {DashboardService} from '@core/services';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  blocks: any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getCardDara().subscribe((blocks: any[]) => {
      this.blocks = blocks;
    });
  }

  //TODO fake data, temporary
  getClass(number) {
    if (number === 1) return 'first block';
    if (number === 2) return 'second block';
    if (number === 3) return 'third block';
  }
}
