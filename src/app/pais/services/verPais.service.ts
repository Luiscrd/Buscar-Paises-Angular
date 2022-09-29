import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { PaisMOS } from '../interfaces/pais-cor.interface';


@Injectable({
  providedIn: 'root'
})
export class VerPaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  private params = '?fields=name,capital,region,flag,population,currencies,translations'

  constructor( private http: HttpClient ) { }

  buscarPais( id: string ): Observable<PaisMOS> {

    const url = `${this.apiUrl}/alpha/${id}${this.params}`;

    return this.http.get<PaisMOS>(url);

  }

}
