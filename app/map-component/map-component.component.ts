import { Component, Output, EventEmitter } from '@angular/core';
import { DataDisplayComponent } from '../data-display/data-display.component';
import { DataFetcherService } from '../data-fetcher.service';


@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [DataDisplayComponent],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css',
  providers: [DataFetcherService, 
    
  ]
})
export class MapComponentComponent  {
  title = "My Map";
  
  constructor(private dataFetcherService: DataFetcherService ) {}
  @Output() sendData: EventEmitter<any> = new EventEmitter;
  
  clickPath(event: MouseEvent) {
    
    let target = event.target as HTMLElement;

    // Check if the clicked element is a path element
    if (target.tagName.toLowerCase() === 'path') {
      let countryName = target.getAttribute('name');
      console.log("Country is " + countryName);

      // Highlight the clicked path
      target.classList.add('Selected');

      let allActives = document.querySelectorAll(".Selected");
      // Remove the selected class from all other paths
      allActives.forEach(function(element) {
          if (element !== target) {
              element.classList.remove("Selected");
          }
      });
     
          let countryId: string | null = target.getAttribute("id");

          if (countryId !== null) {
            
            this.dataFetcherService.getData(countryId).subscribe(data => {
              console.log("Data for country: ", data);
              //send data as output to parent
              this.sendData.emit(data)
               
            });
          } else {
           console.error("Country ID is not found");
          } 
        }
        
      };

      hoverPath(event: MouseEvent) {
        let target = event.target as HTMLElement;
      
        // Check if the clicked element is a path element
        if (target.tagName.toLowerCase() === 'path') {
          let itsName: string = "";
          if (target.getAttribute("name") === null) {
            itsName = target.getAttribute("class")!;
          } else {
            itsName = target.getAttribute("name")!;
            if (target.classList.contains("Selected")) {
              itsName += " Selected"}
          };
          
            
      
          let tooltip = document.getElementById("tooltip")!;
          
            tooltip.innerText = itsName;
            tooltip.style.display = "block";
            tooltip.style.top = `${event.clientY}px`;
            tooltip.style.left = `${event.clientX}px`;
          }
          
        }
        
        hideDisplay(event: MouseEvent) {
          let target = event.target as HTMLElement;
          let tooltip = document.getElementById("tooltip")!;
          tooltip.style.display = "none";
          

        
      }
            
          }

          
    
 
