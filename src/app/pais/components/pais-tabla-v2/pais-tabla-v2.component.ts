import { Component, Input } from '@angular/core';
import { CountryV2 } from '../../interfaces/paisv2.interface';
import { Countyv2List } from '../../interfaces/paisesv2lis.interface';



@Component({
  selector: 'app-pais-tabla-v2',
  templateUrl: './pais-tabla-v2.component.html',
  styleUrls: ['./pais-tabla-v2.component.css']
})
export class PaisTablaV2Component {

  @Input() paises: Countyv2List[] = [];

}
