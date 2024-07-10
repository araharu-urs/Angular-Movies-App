import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorPipe } from './floor/floor.pipe';
import { PosterPipe } from './poster/poster.pipe';



@NgModule({
  declarations: [
    FloorPipe,
    PosterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FloorPipe, // Asegúrate de exportar el pipe si planeas usarlo fuera de este módulo
    PosterPipe
  ]
})
export class PipesModule { }
