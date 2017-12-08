import { Component } from '@angular/core';
import $ = require("jquery");

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent {
  scrollTo(location: string) {
    $('html, body').animate({
        scrollTop: $("#" + location).offset().top
    }, 1200);
  }
}