import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from '../shared/doctor-model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit {
params: any;
public doctorForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<ViewDoctorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              public doctorService: DoctorService,
              private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      doctorId:  [{value: '',disabled: true }],
      firstName: [{value: '',disabled: true }],
      lastName:  [{value: '',disabled: true }],
      rating:  [{value: '',disabled: true }],
      age: [{value: '',disabled: true}],
      experience:  [{value: '',disabled: true }],
      insurance:  [{value: '',disabled: true }],
      status:  [{value: '',disabled: true }],
    });
    this.doctorService.getDoctorById(this.data).subscribe(responseData => {
      this.doctorForm.patchValue({
        doctorId: responseData['doctorId'],
        firstName: responseData['firstName'],
        lastName: responseData['lastName'],
        rating: responseData['rating'],
        age: responseData['age'],
        experience: responseData['experience'],
        insurance: responseData['insurance'],
        status: responseData['status'],
      }); 
    });
    // this.doctorForm = new FormGroup({
    //   firstName: new FormControl({value: this.data.firstName, disabled: true}),
    //   lastName: new FormControl({value: this.data.lastName, disabled: true}),
    //   rating: new FormControl({value:this.data.rating, disabled: true}),
    //   age: new FormControl({value:this.data.age, disabled: true}),
    //   experience: new FormControl({value:this.data.experience, disabled: true}),
    //   insurance: new FormControl({value:this.data.insurance, disabled: true}),
    //   status: new FormControl({value:this.data.status, disabled: true})
    // });
    // this.doctorService.getDoctorById(this.data).subscribe(responseData => {
    //   // debugger
    //   this.data = responseData;
    // })
    //    console.log(this.data);
    // this.doctorForm = new FormGroup({
    //   firstName: new FormControl({value: this.data.firstName, disabled: true}),
    //   lastName: new FormControl({value: this.data.lastName, disabled: true}),
    //   rating: new FormControl({value:this.data.rating, disabled: true}),
    //   age: new FormControl({value:this.data.age, disabled: true}),
    //   experience: new FormControl({value:this.data.experience, disabled: true}),
    //   insurance: new FormControl({value:this.data.insurance, disabled: true}),
    //   status: new FormControl({value:this.data.status, disabled: true})
    // });
  }
  onClick(){
    this.dialogRef.close()
  }
 
}
