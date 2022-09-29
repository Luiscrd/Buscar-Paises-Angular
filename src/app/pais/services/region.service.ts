import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { CountryV2 } from '../interfaces/paisv2.interface';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${termino}`;

    return this.http.get<Country[]>(url);

  }

  buscarPaisSelect( termino: string ): Observable<CountryV2[]> {

    const url = `https://restcountries.com/v2/regionalbloc/${termino}`;

    return this.http.get<CountryV2[]>(url);

  }

}
