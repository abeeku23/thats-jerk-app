import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { MenuItem } from '../../menu-item';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent {
  @Input() item: MenuItem;

}