import { Component } from '@angular/core';
import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from '../../app/pais/interfaces/paises-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor( private paisService: PaisService ) {}

  buscar( ){

    this.hayError = false;

    this.paisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      this.paises = paises;
      console.log(paises);


    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

}
