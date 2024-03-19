import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  getData(countryId: string) {
    let url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;

    return this.http.get(url).pipe(
      map((data: Object) => (data as any)[1][0])
    );
  }
  
    
  }

