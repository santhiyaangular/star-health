import { Component, OnInit } from '@angular/core';
import { PatientModel } from 'src/app/shared/patient-model';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PatientService } from 'src/app/shared/patient.service';
import { DoctorService } from 'src/app/shared/doctor.service';
import { InsuranceModel } from 'src/app/shared/insurance-model';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  addPatient: PatientModel
  doctorList: any;
  insuranceList = [ new InsuranceModel(1000, 'family-insurance', 'uhc'),
                    new InsuranceModel(1001, 'company-insurance', 'aetna')

];
  
  public newPatientForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddPatientComponent>,
    private patientService: PatientService,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.newPatientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      visits: new FormControl(0),
      age: new FormControl(0),
      doctor: new FormControl(''),
      insurance: new FormControl(''),
    });
    this.doctorService.getDoctorData().subscribe(responseData => {
            this.doctorList = responseData
        });
    
  }
  onNewPatient(newPatient: any) {
    this.addPatient = new PatientModel(
      newPatient.firstName,
      newPatient.lastName,
      +newPatient.visits,
      +newPatient.age,
      newPatient.doctor,
      newPatient.insurance,
      newPatient.payment
    );
    this.patientService.addPatientData(this.addPatient).subscribe(responseData => {
      this.dialogRef.close();
    })
    console.log(this.addPatient);
  }

  

  


}
