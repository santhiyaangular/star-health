import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-visit-cellrenderer',
  templateUrl: './visit-cellrenderer.component.html',
  styleUrls: ['./visit-cellrenderer.component.css']
})
export class VisitCellrendererComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  constructor() { }

  ngOnInit(): void {
  }
  agInit(params: ICellRendererParams): void{
    this.params = params;
  }
  refresh(params: any): boolean{
    return true
  }
}
