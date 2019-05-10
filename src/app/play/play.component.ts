import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { game } from '../Model/game.model';
import { GameServiceService } from '../game-service.service';
import { SuccessComponent } from '../success/success.component';


@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  game_price :number;
  games : game[];
  bal: number = 600;
  constructor(private playService: GameServiceService, private routes : Router) { }

  playForm: FormGroup;
  ngOnInit() {

    this.playService.getGames().subscribe(data => { this.games = data });

  

  }
  play(amt: number){
    if(this.bal>amt) {
      this.bal -= amt;
      localStorage.setItem("balance", this.bal.toString())
      this.routes.navigate(['success']);
    } else {
      alert("balance low")
    }
  }






  getPrice(game: game) {



    this.game_price = game.game_price;

    localStorage.removeItem("game_price");

    localStorage.removeItem("game_name");

    localStorage.setItem("game_price", game.game_price.toString());

    localStorage.setItem("game_name", game.game_name);

  }

}




