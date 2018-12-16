import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public defaultUserImageUrl = 'assets/images/default-avatar.jpg';
  public matTabColor = '#448AFF';
  constructor() { }

  ngOnInit() {
  }

}
