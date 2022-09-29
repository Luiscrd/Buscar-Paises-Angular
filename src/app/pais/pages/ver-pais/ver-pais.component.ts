import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { VerPaisService } from '../../services/verPais.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { CountryV2 } from '../../interfaces/paisv2.interface';
import { PaisMOS } from '../../interfaces/pais-cor.interface';
import { ExtraPaisService } from '../../services/extraPais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})

export class VerPaisComponent implements OnInit {

  public pais!: Country;
  public paisv2!: PaisMOS;
  public lat!: number | undefined;
  public lng!: number | undefined;
  public url!: string;
  public moneda!: string;
  public simbolo!: string;
  public logo!: string;
  public mapaG!: string;
  public mapaO!: string;




  constructor(
    private activatedRoute: ActivatedRoute,
    private verPaisService: VerPaisService,
    private extrasPaisService: ExtraPaisService
    ) {}

  async ngOnInit() {

    this.activatedRoute.params.pipe(

      await switchMap( ({ id }) => this.extrasPaisService.buscarPais( id ) ),
      tap( console.log )

    ).subscribe( pais => {
        this.pais = pais;
      const {coatOfArms, maps} =pais[Object.keys(pais)[0]];
      const logo = coatOfArms['svg'];
      const mapaG = maps['googleMaps'];
      const mapaO = maps['openStreetMaps'];
      this.logo = logo;
      this.mapaG = mapaG;
      this.mapaO = mapaO;




    });

    this.activatedRoute.params.pipe(

      await switchMap( ({ id }) => this.verPaisService.buscarPais( id ) ),
      tap( console.log )

    ).subscribe( pais => {
        this.pais = pais;

      const obMonedas = this.pais.currencies;
      const monedas = obMonedas[Object.keys(obMonedas)[0]];
      const {name,symbol} = monedas;
      this.moneda = name;
      this.simbolo = symbol;

      //  this.lat = this.pais.capitalInfo.latlng?.shift();
      //  this.lng = this.pais.capitalInfo.latlng?.shift();

    });



  };

};
