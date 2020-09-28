import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actionpatientcellrenderer',
  templateUrl: './actionpatientcellrenderer.component.html',
  styleUrls: ['./actionpatientcellrenderer.component.css']
})
export class ActionpatientcellrendererComponent implements OnInit, ICellRendererAngularComp {
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
  onViewClick($event){
    if(this.params.onViewClick instanceof Function){
      const localParams = {
        event: $event,
        rowData: this.params.node.data.patientId
      };
      this.params.onViewClick(localParams);
    }
  }
  onAddClick($event){
    if(this.params.onAddClick instanceof Function){
      const localParams = {
        event: $event,
        rowData: this.params.node.data
      };
      this.params.onAddClick(localParams);
    }
  }
  onEditClick($event){
    if(this.params.onEditClick instanceof Function){
      const localParams = {
        event: $event,
        rowData: this.params.node.data.patientId
      };
      this.params.onEditClick(localParams);
    }
  }
  onDeleteClick($event){
    if(this.params.onDeleteClick instanceof Function){
      const localParams = {
        event: $event,
        rowData: this.params.node.data.patientId
      };
      this.params.onDeleteClick(localParams);
    }
  }
}
