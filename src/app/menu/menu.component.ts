import { Component } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuItems } from '../menu-items';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  allItems: MenuItem[];
  itemsToDisplay: MenuItem[];
  entree: MenuItem[];
  side: MenuItem[];
  sauce: MenuItem[];
  currentMenu: string = "Food Truck";

  updateDisplayItems() {
    this.itemsToDisplay = this.allItems
      .filter(item => item.menu === this.currentMenu);

    this.entree = this.itemsToDisplay
      .filter(item => item.type === "entrée");

    this.side = this.itemsToDisplay
      .filter(item => item.type === "side");

    this.sauce = this.itemsToDisplay
      .filter(item => item.type === "sauce");
  }

  updateActiveButton(prevBtn: string, curBtn: string) {
    document.getElementById(prevBtn.toLowerCase()).classList.remove('active');
    document.getElementById(curBtn.toLowerCase()).classList.add('active');
  }

  changeMenu(menu: string) {
    this.updateActiveButton(this.currentMenu, menu);
    
    this.currentMenu = menu;
    this.updateDisplayItems();
  }

  ngOnInit() {
    this.allItems = MenuItems; 

    this.updateDisplayItems();
  }
}