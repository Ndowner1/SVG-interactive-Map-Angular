import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent {

   @Input() displayedData: any;
   



  
 
}
