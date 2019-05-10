import { game } from './../Model/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  game_price :any;
   game_name:any;
  bal:any;
  game : game[];
  message1:any;

  message2:any;

  constructor() { }

  ngOnInit() {



    this.game_price = localStorage.getItem("balance");
    this.bal = +this.game_price;
   
    this.message2=` Thank You for Playing ${this.game_name}!
   
         Your balance is Rs. ${this.bal}`;
   
    this.message1=`Thank You for using our Online Gaming Site!
   
        Insufficient balance to play ${this.game_name}
   
        Please Top-Up again!!...`;
   
    return;
   
    }
   
   }
