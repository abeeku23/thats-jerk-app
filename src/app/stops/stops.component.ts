import { Component, Input } from '@angular/core';
import { TruckStop } from '../truck-stop';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TruckStops } from '../truck-stops';
declare var google: any;

@Component({
  selector: 'stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})

export class StopsComponent implements OnInit, AfterViewInit{
  @Input() stops: TruckStop[];

  ngOnInit(): void {
    this.stops = TruckStops;
  }

  ngAfterViewInit(): void {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 39.1362562, lng: -84.6804857}
    });

    var geocoder = new google.maps.Geocoder();

    var address: string;

    if (this.stops.length) {
      var firstIteration: boolean = true;
      for (let stop of this.stops) {
        address = stop.locationName 
        + " " + stop.locationAddress
        + " " + stop.city + ", " + stop.state;
  
        geocoder.geocode({
          'address': address
        }, 
        function(results, status) {
          if(status == google.maps.GeocoderStatus.OK) {
            new google.maps.Marker({
              position: results[0].geometry.location,
              icon: "/assets/icons/truck.png",
              animation: google.maps.Animation.DROP,
              title: stop.locationName,
              map: map
          });

          if (firstIteration) {
            firstIteration = false;
            map.setCenter(results[0].geometry.location);
          }
            }
        });
      }
  
      
    }  
  }

}