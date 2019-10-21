import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  showParagraph: boolean = true;
  numberOfClicks: number = 0;
  logArray: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  showBackgroundColor(): boolean {
    // return this.numberOfClicks >= 5;
    return false;
  }

  toggleVisible(): void {
    this.showParagraph = !this.showParagraph;
    this.numberOfClicks ++;
    this.logArray.push(this.numberOfClicks.toString());
  }

}
