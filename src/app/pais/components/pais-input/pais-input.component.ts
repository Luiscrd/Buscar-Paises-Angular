import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  public debouncer: Subject<string> = new Subject();

  public termino: string = '';

  ngOnInit(): void {

    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor => {

      this.onDebounce.emit( valor );

    })

  }

  buscar(): void{

    this.onEnter.emit( this.termino );

  }

  teclaPresionada(): void {

    this.debouncer.next( this.termino );

  }

}
