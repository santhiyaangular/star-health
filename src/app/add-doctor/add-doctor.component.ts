import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../shared/doctor-model';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
addDoctor: DoctorModel
public newDoctorForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddDoctorComponent>,
    public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.newDoctorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      rating: new FormControl(0),
      age: new FormControl(0),
      experience: new FormControl(0),
      insurance: new FormControl(''),
      status: new FormControl('')
    });
  }
  onNewDoctor(newDoctor: any){
    this.addDoctor = new DoctorModel(
      newDoctor.firstName,
      newDoctor.lastName,
      +newDoctor.rating,
      +newDoctor.age,
      +newDoctor.experience,
      newDoctor.insurance,
      newDoctor.status
    );
    this.doctorService.createDoctor(this.addDoctor).subscribe(responseData => {
      this.dialogRef.close();
    });
    // this.dialogRef.close(this.addDoctor);
    // debugger
    // console.log(this.addDoctor);
  }
}
