import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionExemplo1Component } from './accordion-exemplo1/accordion-exemplo1.component';

const routes: Routes = [
  { path: 'exemplo1', component: AccordionExemplo1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
