import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'murales-map',
  templateUrl: 'map.component.html',
})
export class MapComponent implements OnInit {

  public mensaje: string = "hola murales";
  public posiciones = [];

  constructor() { }

  ngOnInit() { }

  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array
  }
  onIdle(event) {
    console.log('map onIdle ', event.target);
  }
  onMarkerInit(marker) {
    console.log('marker', marker);
  }
  onMapClick(event) {
    this.posiciones.push(event.latLng);
    event.target.panTo(event.latLng);
  }
}
