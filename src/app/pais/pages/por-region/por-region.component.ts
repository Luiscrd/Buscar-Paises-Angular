import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../services/region.service';
import { Country } from '../../interfaces/pais.interface';
import { CountryV2 } from '../../interfaces/paisv2.interface';
import { Countyv2List } from '../../interfaces/paisesv2lis.interface';
import { RegionCorService } from '../../services/region-cor.service';



@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: {nombre:string, codigo: string}[] = [
    {
      nombre: 'Unión Europea',
      codigo: 'EU'
    },
    {
      nombre: 'Asociación Europea de Libre Comercio',
      codigo: 'EFTA'
    },
    {
      nombre: 'Comunidad del Caribe',
      codigo: 'CARICOM'
    },
    {
      nombre: 'Alianza del Pacífico',
      codigo: 'PA'
    },
    {
      nombre: 'Unión Africana',
      codigo: 'AU'
    },
    {
      nombre: 'Unión de Naciones Suramericanas',
      codigo: 'USAN'
    },
    {
      nombre: 'Unión Económica Euroasiática',
      codigo: 'EEU'
    },
    {
      nombre: 'Liga Árabe',
      codigo: 'AL'
    },
    {
      nombre: 'Asociación de Naciones del Sudeste Asiático',
      codigo: 'ASEAN'
    },
    {
      nombre: 'Sistema de la Integración Centroamericana',
      codigo: 'CAIS'
    },
    {
      nombre: 'Acuerdo de Libre Comercio de Europa Central',
      codigo: 'CEFTA'
    },
    {
      nombre: 'Tratado de Libre Comercio de América del Norte',
      codigo: 'NAFTA'
    },
    {
      nombre: 'Asociación del Asia Meridional para la Cooperación Regional',
      codigo: 'SAARC'
    }
  ];

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];
  public paisesv2: Countyv2List[] = [];
  public seleccionado: string = '';

  constructor( private regionCorService: RegionCorService ) {}

  buscar( termino: string ){

    this.termino = termino;
    this.hayError = false;

    this.regionCorService.buscarPais( this.termino )
    .subscribe( (paises) => {
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });

  }

  buscarSelect(){

    this.hayError = false;

    this.regionCorService.buscarPaisSelect( this.seleccionado )
    .subscribe( (paises) => {
      this.paisesv2 = paises;

    }, (err) => {
      this.hayError = true;
      this.paisesv2 = [];
    });

  }

  sujerencias( termino: string ) {

    this.hayError = false;



  }

}
