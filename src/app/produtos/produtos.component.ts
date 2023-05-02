import { ProdutoService } from './../produto.service';
import { Produtos } from './../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produto: Produtos [] = [];

  constructor (private ProdutoService: ProdutoService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
   this.ProdutoService.getProdutos().subscribe( {
    next : data => this.produto = data
   });
  }
}
