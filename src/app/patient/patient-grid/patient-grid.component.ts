import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { ActionpatientcellrendererComponent } from '../patient-renderer/actionpatientcellrenderer/actionpatientcellrenderer.component';

@Component({
  selector: 'app-patient-grid',
  templateUrl: './patient-grid.component.html',
  styleUrls: ['./patient-grid.component.css']
})
export class PatientGridComponent implements OnInit {
  patientData: any;
  patientColumnDefs = [];
  frameworksComponents = {};
  gridParams: any;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.frameworksComponents = {
      customPatientActionCellRenderer: ActionpatientcellrendererComponent,
    };
    this.patientService.getPatientData().subscribe(responseData => {
      this.patientData = responseData
    });
    this.patientColumnDefs = this.patientService.patientColumnDefs;
    this.patientService.addPatient.subscribe(patients => {
      this.gridParams.api.setRowData(patients);
        // this.gridParams.api.applyTransaction({add: [patient]});
    });
    this.patientService.refreshPatient.subscribe(patients => {
      this.gridParams.api.setRowData(patients);
        // this.gridParams.api.applyTransaction({remove: [patient]});
    });
    this.patientService.editPatient.subscribe(patients => {
        this.gridParams.api.setRowData(patients);
    });
  }
  onGridReady(params){
    this.gridParams = params;
    params.api.sizeColumnsToFit();

  }

}
