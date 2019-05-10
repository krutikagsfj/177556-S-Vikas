import { SuccessComponent } from './success/success.component';
import { PlayComponent } from './play/play.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



export const routes: Routes= [
  {path: '', component:PlayComponent,pathMatch:'full'},
  {path: 'play' , component:PlayComponent},
  {path: 'success' , component:SuccessComponent}

 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})






export class GameRoutingModule { }
