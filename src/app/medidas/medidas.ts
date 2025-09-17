/* medidas.ts */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EncomendaService, ProdutoSelecionado, MedidasPedido } from '../services/encomenda.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medidas',
  standalone: true,
  templateUrl: './medidas.html',
  styleUrls: ['./medidas.css'],
  imports: [CommonModule, FormsModule]
})
export class Medidas {
  produto?: ProdutoSelecionado;

  medidas: MedidasPedido = {
    pescoco: '',
    torax: '',
    comprimento: '',
    observacoes: ''
  };

  constructor(private encomendaService: EncomendaService, private router: Router) {
    this.produto = this.encomendaService.getProdutoSelecionado();

    if (!this.produto) {
      this.router.navigate(['/encomenda']); // volta se não tiver produto selecionado
    }
  }

  validarCampos(): boolean {
    return !!(this.medidas.pescoco && this.medidas.torax && this.medidas.comprimento);
  }

  ok() {
    if (!this.validarCampos()) {
      alert('Preencha os campos obrigatórios: pescoço, tórax e comprimento.');
      return;
    }
    this.encomendaService.setMedidas(this.medidas);
    this.router.navigate(['/confirmar']);
  }
}
