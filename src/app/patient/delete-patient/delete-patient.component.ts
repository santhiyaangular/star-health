import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PatientModel } from 'src/app/shared/patient-model';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css']
})
export class DeletePatientComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeletePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private patientService: PatientService) { }

  ngOnInit(): void {
    
  }
  
  onDeleteDoctor(data: any){
    this.patientService.deletePatientDataById(this.data).subscribe(responseData => {
      this.dialogRef.close(data);
    });
    
  }
}
