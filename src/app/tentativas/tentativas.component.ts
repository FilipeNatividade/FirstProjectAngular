import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
// public coracaoCheio: string = './assets/coracao_cheio.png'
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

  @Input() public tentativas!: number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() {this.coracoes }

  ngOnChanges():void{
    if(this.tentativas !== this.coracoes.length){
      let index = this.coracoes.length - this.tentativas
      this.coracoes[index -1].cheio = false
    }
  }

  ngOnInit(): void {
    console.log(this.tentativas)
  }

}
