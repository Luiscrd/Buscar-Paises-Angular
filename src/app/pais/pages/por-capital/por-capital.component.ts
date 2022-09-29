import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capital.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  public paisesSujeridos: Country[] = [];
  public mostrarSujerencias: boolean = false;


  constructor( private capitalService: CapitalService ) {}

  buscar( termino: string ){

    this.mostrarSujerencias = false;

    this.termino = termino;

    this.hayError = false;

    this.capitalService.buscarPais( this.termino )
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

    this.capitalService.buscarPais( termino )
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
