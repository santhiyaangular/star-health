import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-rating-cellrenderer',
  templateUrl: './rating-cellrenderer.component.html',
  styleUrls: ['./rating-cellrenderer.component.css']
})
export class RatingCellrendererComponent implements OnInit, ICellRendererAngularComp{
  params = [];
  constructor() { }

  ngOnInit(): void {
  }
  agInit(params: ICellRendererParams): void{
    for(let i = 0; i < params.value; i++){
      this.params.push(i);
    }
    // this.params = params;
    // console.log(this.params);
  }
  refresh(params: any): boolean{
    return true
  }
}
