import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { Extras } from '../interfaces/extras.interface';


@Injectable({
  providedIn: 'root'
})
export class ExtraPaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Extras> {

    const url = `${this.apiUrl}/name/${termino}?fields=coatOfArms,maps`;

    return this.http.get<Extras>(url);

  }

}
