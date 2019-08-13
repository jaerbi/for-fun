import { Component, OnInit, ViewChild } from '@angular/core';

import { DropdownDirective } from '../../../directives/dropdown.directive';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  @ViewChild(DropdownDirective, { static: true }) dropDown = null;


  socials = [
    { title: 'f', url: '../../../../assets/img/icon/f.svg' },
    { title: 't', url: '../../../../assets/img/icon/t.svg' },
    { title: 'p', url: '../../../../assets/img/icon/p.svg' },
    { title: 'y', url: '../../../../assets/img/icon/y.svg' },
    { title: 'x', url: '../../../../assets/img/icon/x.svg' },
  ];


  constructor() {}

  ngOnInit() {}

  onSoc() {
    this.dropDown.isOpen = false;
  }

}
