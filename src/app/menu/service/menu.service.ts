
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MenuItem } from '../../menu-item';
import { MenuItems } from '../../menu-items';

@Injectable()
export class MenuService {

  constructor(private http: Http) {

  }

//   addComment(entryId: number, comment: { name: string; comment: string;}) {
//     return this.http.post('/app/entries/${entryId}/comments', comment)
//       .toPromise();
//   }

  getMenuItems() : MenuItem[] {  
    return MenuItems;
  }
}