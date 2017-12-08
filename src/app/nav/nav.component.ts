import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import $ = require("jquery");

@Component({
  selector: 'top-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  scrollTo(location: string) {
      $('html, body').animate({
          scrollTop: $("#" + location).offset().top
      }, 1200);
  }
}