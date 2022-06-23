import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarProdutoPageRoutingModule } from './criar-produto-routing.module';

import { CriarProdutoPage } from './criar-produto.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarProdutoPageRoutingModule,
  ],
  declarations: [CriarProdutoPage, HeaderComponent]
})
export class CriarProdutoPageModule { }
