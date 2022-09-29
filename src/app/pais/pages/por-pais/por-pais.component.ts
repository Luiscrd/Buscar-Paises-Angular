import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  public paisesSujeridos: Country[] = [];
  public mostrarSujerencias: boolean = false;

  constructor( private paisService: PaisService ) {}

  buscar( termino: string ){

    this.mostrarSujerencias = false;

    this.termino = termino;

    this.hayError = false;

    this.paisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      this.paises = paises;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

  sujerencias( termino: string ) {

    this.hayError = false;

    this.mostrarSujerencias = true;

    this.paisService.buscarPais( termino )
    .subscribe(
      paises => this.paisesSujeridos = paises.splice(0,5),
      (err) => this.paisesSujeridos = []
    );

    this.termino = termino;

  }

  buscarSujerido(){

    this.buscar(this.termino);

  }

}
