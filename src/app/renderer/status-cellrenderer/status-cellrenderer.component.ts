import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status-cellrenderer',
  templateUrl: './status-cellrenderer.component.html',
  styleUrls: ['./status-cellrenderer.component.css']
})
export class StatusCellrendererComponent implements OnInit, ICellRendererAngularComp {
  params: any;
  constructor() { }
  availability = false;
  ngOnInit(): void {
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.availability = params.value;
    // debugger
  }
  refresh(params: any): boolean {
    return true
  }

}
