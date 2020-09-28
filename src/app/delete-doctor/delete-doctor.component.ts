import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from '../shared/doctor-model';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDoctorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public doctorService: DoctorService) { }

  ngOnInit(): void {
    // this.doctorService.deleteDoctorById(this.data).subscribe(responseData => {
    //   debugger
    //   this.data = responseData;
    // });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onDeleteDoctor(data: any) {
    this.doctorService.deleteDoctorById(this.data).subscribe(responseData => {
      // debugger
      // this.data = responseData;
      this.dialogRef.close(data);
      debugger
    });
    // console.log(this.data);
    // debugger
    // this.dialogRef.close(data);
    // window.location.reload();
    // debugger
  }
}
