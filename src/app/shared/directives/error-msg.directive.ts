import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color:string ='red';
  private _nombre:string = 'Este campo es requerido.';



  @Input() set color(valor:string){
    this._color=valor;
    this.setColor();
  };
  @Input() set nombre(valor:string){
    this._nombre=valor;
    this.setMensage();
  }
  @Input() set valido(valor:boolean){
    valor? this.htmlElemnt.nativeElement.classList.add('hidden') : this.htmlElemnt.nativeElement.classList.remove('hidden');
  }

  htmlElemnt!:ElementRef<HTMLElement>;

  constructor(private el:ElementRef<HTMLHtmlElement>) { 
    this.htmlElemnt=el;
  }
  ngOnInit(): void {
    this.setStyle();
    this.setColor();
    this.setMensage();

  }
  ngOnChanges(changes: SimpleChanges): void {


  }
  setStyle():void{
    this.htmlElemnt.nativeElement.classList.add("form-text");
  }

  setColor():void{
    this.htmlElemnt.nativeElement.style.color= this._color;
    this.htmlElemnt.nativeElement.className="form-text";
  }
  setMensage():void{
    this.htmlElemnt.nativeElement.innerText= this._nombre;
  }

}
