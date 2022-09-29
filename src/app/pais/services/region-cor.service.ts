import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { CountryV2 } from '../interfaces/paisv2.interface';
import { Countyv2List } from '../interfaces/paisesv2lis.interface';


@Injectable({
  providedIn: 'root'
})
export class RegionCorService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${termino}`;

    return this.http.get<Country[]>(url);

  }

  buscarPaisSelect( termino: string ): Observable<Countyv2List[]> {

    const params = '?fields=name,capital,alpha2Code,flag,population'

    const url = `https://restcountries.com/v2/regionalbloc/${termino}${params}`;

    return this.http.get<Countyv2List[]>(url);

  }

}
