import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frasesPainel: Frase[] = frases
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase!: Frase;

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo = new EventEmitter

  constructor() {
    this.atualizarRodada()
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
  }

  public atualizaResposta(response: Event): void {
    this.resposta = (<HTMLInputElement>response.target).value
  }

  public verificarResposta(): void {

    if (this.resposta === this.frasesPainel[this.rodada].frasePtBr) {
      this.rodada++
      this.progresso += (100 / frases.length)
      this.rodada === 4 && this.encerrarJogo.emit('vitoria')
      this.atualizarRodada()
    } else {
      this.tentativas--
      this.tentativas === -1 && this.encerrarJogo.emit('perdeu')
    }

  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frasesPainel[this.rodada]
    this.resposta = ''
  }

}
