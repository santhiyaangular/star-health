import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from 'src/app/shared/patient-model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  public patientForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      patientId:  [{value: '',disabled: false }],
      firstName: [{value: '',disabled: false }],
      lastName:  [{value: '',disabled: false }],
      visits:  [{value: '',disabled: false }],
      age: [{value: '',disabled: false}],
      pcp:  [{value: '',disabled: false }],
      insurance:  [{value: '',disabled: false }]     
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
    // this.patientForm = new FormGroup({
    //   firstName: new FormControl(this.data.firstName),
    //   lastName: new FormControl(this.data.lastName),
    //   visits: new FormControl(this.data.visits),
    //   age: new FormControl(this.data.age),
    //   pcp: new FormControl(this.data.pcp),
    //   insurance: new FormControl(this.data.insurance),
    //   payment: new FormControl(this.data.payment)
    // });
  }
  savePatientDetail(formData: any) {
    this.patientService.updatePatientById(formData.patientId,formData).subscribe(updatedData => {
      this.dialogRef.close(formData);
    })
    // this.dialogRef.close(formData);
    debugger
    console.log(formData);
  }

}
