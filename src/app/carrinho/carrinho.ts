import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarrinhoService, CarrinhoItem } from '../services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.html',
  styleUrls: ['./carrinho.css'],
})
export class Carrinho {
  //itens: CarrinhoItem[] = [];
  itens: readonly CarrinhoItem[] = [];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {
  this.itens = [...this.carrinhoService.items()];
}


  get items() {
    return this.carrinhoService.items();
  }

  finalizarCompra() {
    const items = this.carrinhoService.items();

    if (items.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    let mensagem = 'Olá, quero finalizar minha compra com os seguintes itens:%0A%0A';

    items.forEach((item, i) => {
    mensagem += `${i + 1}. ${item.nomeModelo} (${item.tipo})%0A`;

    // Se for encomenda, adiciona medidas e observações
    if (item.tipo === 'encomenda' && item.medidas) {
      mensagem += `   - Pescoço: ${item.medidas.pescoco}%0A`;
      mensagem += `   - Tórax: ${item.medidas.torax}%0A`;
      mensagem += `   - Comprimento: ${item.medidas.comprimento}%0A`;

      if (item.medidas.observacoes) {
        mensagem += `   - Observações: ${item.medidas.observacoes}%0A`;
      }
    }
    mensagem += `%0A`;
  });

    const numeroWhatsApp = '5541999218178'; // substitua pelo seu número com código do país

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

    window.open(urlWhatsApp, '_blank');

    this.carrinhoService.clear();
    this.router.navigate(['/']);
  }

  continuarComprando() {
    this.router.navigate(['/']);
  }

  getImagem(nomeModelo: string): string {
    const imagensMap: Record<string, string> = {
      'Vestido Floral': 'assets/vestido-floral-1.jpg',
      'Camiseta Básica': 'assets/camiseta-basica-1.jpg',
      'Jaqueta Jeans': 'assets/jaqueta-jeans.jpg'
    };
    return imagensMap[nomeModelo] || 'assets/default.jpg';
  }

  removerItem(index: number) {
    this.carrinhoService.removeItem(index);
    this.itens = this.carrinhoService.items();
  }

}
