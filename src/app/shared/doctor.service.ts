import { DoctorModel } from "./doctor-model";
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ViewDoctorComponent } from '../view-doctor/view-doctor.component';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { Subject } from 'rxjs';
import { EditDoctorComponent } from '../edit-doctor/edit-doctor.component';
import { DeleteDoctorComponent } from '../delete-doctor/delete-doctor.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DoctorService {
  imageMap = new Map();
  refreshDoctor = new Subject<any>();
  deleteDoctor = new Subject<DoctorModel>();
  editDoctor = new Subject<any>();
  constructor(public dialog: MatDialog, public http: HttpClient) {
    this.imageMap.set('uhc', '../../assets/uhc.jpg');
    this.imageMap.set('aetna', '../../assets/aetna.jpg');
    this.imageMap.set('cigna', '../../assets/cigna.jpg');
    this.imageMap.set('bluecross', '../../assets/bluecross.jpg');
  }

  doctorColumnDefs = [
    { headerName: 'DoctorId', field: 'doctorId' },
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Rating', field: 'rating', sortable: true, filter: true, cellRenderer: 'customRatingCellRenderer' },
    { headerName: 'Age', field: 'age' },
    { headerName: 'Experience', field: 'experience' },
    { headerName: 'Available', field: 'available', cellRenderer: 'customStatusCellRenderer' },
    {
      headerName: 'Action', field: 'action', sortable: true, filter: true, cellRenderer: 'customActionCellRenderer', cellRendererParams: {
        onViewClick: this.onViewItemClick.bind(this),
        onAddClick: this.onAddItemClick.bind(this),
        onEditClick: this.onEditItemClick.bind(this),
        onDeleteClick: this.onDeleteItemClick.bind(this)
      }
    }

  ];

  doctorData = [
    new DoctorModel('Gregory', 'Lam', 5, 45, 10, 'uhc', true),
    new DoctorModel('Aeron', 'Shaftel', 4, 51, 15, 'aetna', false),
    new DoctorModel('Connie', 'Gowrich', 5, 55, 12, 'cigna', true),
    new DoctorModel('Andrew', 'Jofrdon', 2, 43, 14, 'bluecross', true),
    new DoctorModel('Antony', 'Phillips', 5, 50, 13, 'uhc', false),
    new DoctorModel('Gerald', 'Arnett', 4, 49, 12, 'aetna', false),
  ];

  getDoctorName(){
    return this.doctorData.map(doctor => doctor.firstName);
    // return this.http.get('/api/v1/doctor').subscribe(result => {
    //   result.firstName;
    // })
  }


  getImage(insurance: string) {
    return this.imageMap.get(insurance);
  }
  getDoctorData() {
    return this.http.get('/api/v1/doctor');
    // return this.doctorData;
  }
  createDoctor(doctor: any) {
    // debugger
    return this.http.post('/api/v1/doctor', doctor);

  }

  updateDoctorById(doctorId: number, doctor: any) {
    // debugger
    return this.http.put('/api/v1/doctor/' + doctorId, doctor);
  }

  deleteDoctorById(doctorId: number) {
    // debugger
    return this.http.delete('api/v1/doctor/' + doctorId);

  }
  getDoctorById(doctorId: number) {
    return this.http.get('api/v1/doctor/' + doctorId);
  }
  onViewItemClick(params: any) {
    console.log(params);
    const dialogRef = this.dialog.open(ViewDoctorComponent, {
      width: '40%',
      height: '90%',
      data: params.rowData
    });
  }
  onAddItemClick(params: any) {
    console.log(params);
    const dialogRef = this.dialog.open(AddDoctorComponent, {
      width: '40%',
      height: '90%'
    });
    dialogRef.afterClosed().subscribe(result => {
     
        this.getDoctorData().subscribe(updatedList => {
          
          this.refreshDoctor.next(updatedList);
        });
        

    });

    console.log(this.doctorData);
  }
  onEditItemClick(params: any) {
    console.log(params);
    const dialogRef = this.dialog.open(EditDoctorComponent, {
      width: '40%',
      height: '90%',
      data: params.rowData
    });
    dialogRef.afterClosed().subscribe(result => {
      debugger
      this.getDoctorData().subscribe(updatedList => {
        debugger
        this.editDoctor.next(updatedList);
      });

    });
  }
  editedItem(editedDoctor: DoctorModel) {
    this.doctorData = this.doctorData.map(doctor => {
      if (doctor.firstName === editedDoctor.firstName) {
        return editedDoctor
      } else {
        return doctor
      }
    });
    this.editDoctor.next(this.doctorData);
    console.log(this.doctorData);
  }
  onDeleteItemClick(params: any) {
    console.log(params);
    const dialogRef = this.dialog.open(DeleteDoctorComponent, {
      width: '50%',
      height: '25%',
      data: params.rowData
    });
    // debugger
    dialogRef.afterClosed().subscribe(result => {
      this.getDoctorData().subscribe(updatedList => {
        this.refreshDoctor.next(updatedList);
      });
      //  this.deleteDoctor.next(result);
    });
  }

  addItem(data: DoctorModel) {
    this.doctorData.push(data);
    // this.refreshDoctor.next(this.doctorData);
    console.log(this.doctorData);
  }
}
