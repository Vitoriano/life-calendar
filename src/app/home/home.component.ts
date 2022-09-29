import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public matrizValues: any[] = [];
  public qtdSemanas: Number = 52;
  public yearsOfLife: Number = 90;

  ngOnInit(): void {

    const LifeMatriz: any[] = [];
    for(let i = 1; i < this.qtdSemanas; i++) {
      LifeMatriz[i] = [];
      for(let j = 1; j <= this.yearsOfLife; j++) {
        LifeMatriz[i].push({class: 'isGreen'});
      }

    }
    this.matrizValues = LifeMatriz;
    console.log(LifeMatriz);
    //this.calculateYears();
  }


  calculateYears() {
    let idade: any = 25;
    let result: any = Number(this.qtdSemanas) * idade;
    let qtdSemana: any = result / Number(this.yearsOfLife);
    //console.log(result);

   this.matrizValues.forEach((item, index) => {

    if(index <= 25) {
      item.map((data: any) => {
        data.class = "isRed";
      })
    }


   });

  }

}
