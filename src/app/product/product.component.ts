import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  sizes = ['xs', 's', 'm'];
  colors = ['blue', 'green', 'crimson', 'violet'];

  constructor() { }

  ngOnInit() {
  }

}
