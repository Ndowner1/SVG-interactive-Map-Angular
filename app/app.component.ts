import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponentComponent } from './map-component/map-component.component';
import { DataDisplayComponent } from './data-display/data-display.component';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, MapComponentComponent, DataDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  passedData: any ;
  title: string = "My title";
  receiveData(data: any) {
    this.passedData = data;
    };

  
  
};

