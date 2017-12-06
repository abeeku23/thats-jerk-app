import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'top-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  scrollTo(location: string) {
    document.getElementById(location).scrollIntoView({ behavior: 'smooth'});
  }
}