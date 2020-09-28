import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from 'src/app/shared/patient-model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
  public patientForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<ViewPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientService: PatientService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      patientId:  [{value: '',disabled: true }],
      firstName: [{value: '',disabled: true }],
      lastName:  [{value: '',disabled: true }],
      visits:  [{value: '',disabled: true }],
      age: [{value: '',disabled: true}],
      pcp:  [{value: '',disabled: true }],
      insurance:  [{value: '',disabled: true }]     
    });
    this.patientService.getPatientDataById(this.data).subscribe(responseData => {
      this.patientForm.patchValue({
        patientId: responseData['patientId'],
        firstName: responseData['firstName'],
        lastName: responseData['lastName'],
        visits: responseData['visits'],
        age: responseData['age'],
        pcp: responseData['pcp'],
        insurance: responseData['insurance']
      }); 
    });
  //   this.patientForm = new FormGroup({
  //     firstName: new FormControl({value: this.data.firstName, disabled: true}),
  //     lastName: new FormControl({value: this.data.lastName, disabled: true}),
  //     visits: new FormControl({value:this.data.visits, disabled: true}),
  //     age: new FormControl({value:this.data.age, disabled: true}),
  //     pcp: new FormControl({value:this.data.pcp, disabled: true}),
  //     insurance: new FormControl({value:this.data.insurance, disabled: true}),
  //     payment: new FormControl({value:this.data.payment, disabled: true})
  //   });
  //   this.PatientService.getPatientDataById(this.data).subscribe(responseData => {
  //     this.data = responseData;
  //   })
  }

}
