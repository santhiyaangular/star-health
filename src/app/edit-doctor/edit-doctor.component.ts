import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoctorModel } from '../shared/doctor-model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  public doctorForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<EditDoctorComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      doctorId: [{ value: '', disabled: false }],
      firstName: [{ value: '', disabled: false }],
      lastName: [{ value: '', disabled: false }],
      rating: [{ value: '', disabled: false }],
      age: [{ value: '', disabled: false }],
      experience: [{ value: '', disabled: false }],
      insurance: [{ value: '', disabled: false }],
      status: [{ value: '', disabled: false }],
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
  }
  saveDoctorDetail(formData: any) {
    this.doctorService.updateDoctorById(formData.doctorId, formData).subscribe(updatedData => {
      debugger
      this.dialogRef.close();
    });
  }
}
