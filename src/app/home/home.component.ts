import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public matrizValues: any[] = [];

  ngOnInit(): void {

    const Qtdsemanas: Number = 52;
    const life: Number = 90;
    const LifeMatriz: any[] = [];

    for(let i = 1; i < Qtdsemanas; i++) {
      LifeMatriz[i] = [];
      for(let j = 1; j <= life; j++) {
        LifeMatriz[i].push(j);
      }

    }
    this.matrizValues = LifeMatriz;
    console.log(LifeMatriz);
  }

}
