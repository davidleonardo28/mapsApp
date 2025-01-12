import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';
@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'Elemento HTML no fue encontrado';
    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.08554, 4.6961], // starting position [lng, lat]
      zoom: 11, // starting zoom
    });
  }
}
