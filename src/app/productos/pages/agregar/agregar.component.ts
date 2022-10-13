import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  texto1:string = 'El campo es obligatorio';
  color:string='red';
  nombrePattern:string='[a-zA-Z ]+';


  miFormulario:FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3),Validators.pattern(this.nombrePattern)]]
  })

  tieneError(campo:string){
    return this.miFormulario.controls[campo]?.invalid;
  }
  cambiaNombre(){
    this.texto1=Math.random().toString();

  }
  cambiaColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=color;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
