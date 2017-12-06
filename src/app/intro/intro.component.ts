import { Component } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent {
  scrollTo(location: string) {
    document.getElementById(location).scrollIntoView({ behavior: 'smooth'});
  }
}