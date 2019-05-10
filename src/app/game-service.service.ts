import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { game } from './Model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http : HttpClient) { }

  baseUrl:string = 'http://localhost:3000/games';
 
  getGames(){
    return this.http.get<game[]>(this.baseUrl);
  }



}
