import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/doctor.service';
import { ActionCellrendererComponent } from 'src/app/renderer/action-cellrenderer/action-cellrenderer.component';
import { RatingCellrendererComponent } from 'src/app/renderer/rating-cellrenderer/rating-cellrenderer.component';
import { InsuranceCellrendererComponent } from 'src/app/renderer/insurance-cellrenderer/insurance-cellrenderer.component';
import { StatusCellrendererComponent } from 'src/app/renderer/status-cellrenderer/status-cellrenderer.component';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctorData: any;
  doctorColumnDefs = [];
  frameworksComponents = {};
  gridParams: any;
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.frameworksComponents = {
      customActionCellRenderer: ActionCellrendererComponent,
      customRatingCellRenderer: RatingCellrendererComponent,
      // customInsuranceCellRenderer: InsuranceCellrendererComponent,
      customStatusCellRenderer: StatusCellrendererComponent
    };


    this.doctorService.getDoctorData().subscribe(responseData => {
      
      // debugger
      this.doctorData = responseData;
    });
    this.doctorColumnDefs = this.doctorService.doctorColumnDefs;
    this.doctorService.refreshDoctor.subscribe(doctors => {
      this.gridParams.api.setRowData(doctors);
      // this.gridParams.api.applyTransaction({ add: [doctors] });
      // console.log(this.doctorData);
    });
    this.doctorService.deleteDoctor.subscribe(doctor => {
      this.gridParams.api.applyTransaction({ remove: [doctor] });
      console.log(this.doctorData);
      // debugger
    });
    this.doctorService.editDoctor.subscribe(doctors => {
      // this.gridParams.api.applyTransaction({edit: [doctor]})
      this.gridParams.api.setRowData(doctors);
    });


  }
  onGridReady(params) {
    this.gridParams = params;
    params.api.sizeColumnsToFit();

  }

}
