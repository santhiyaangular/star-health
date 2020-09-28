import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-insurance-cellrenderer',
  templateUrl: './insurance-cellrenderer.component.html',
  styleUrls: ['./insurance-cellrenderer.component.css']
})
export class InsuranceCellrendererComponent implements OnInit, ICellRendererAngularComp{
  params: any;
  imagePath = '';
  imageMap = new Map();
  constructor(private doctorService: DoctorService) {
    }
  ngOnInit(): void {
    }
  agInit(params: ICellRendererParams): void{
    this.params = params;
    this.imagePath = this.doctorService.getImage(params.value);
    console.log('agInit');

  }
  refresh(params: any): boolean{
    return true
  }
 
}