import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from "./pipes/translate.pipe";

@NgModule({
  declarations: [
    TranslatePipe
    // Hier: gemeinsam genutzte Komponenten, Pipes, Direktiven
  ],
  imports: [
    CommonModule
    // Hier: andere Module, die geteilte Komponenten benötigen
  ],
  exports: [
    TranslatePipe,
    CommonModule
    // Hier: Auch die importierten Module exportieren, falls notwendig
  ]
})
export class SharedModule { }
