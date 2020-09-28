import { PatientModel } from 'src/app/shared/patient-model';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { ViewPatientComponent } from '../patient/view-patient/view-patient.component';
import { AddPatientComponent } from '../patient/add-patient/add-patient.component';
import { Subject } from 'rxjs';
import { EditPatientComponent } from '../patient/edit-patient/edit-patient.component';
import { DeletePatientComponent } from '../patient/delete-patient/delete-patient.component';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PatientService {
    editPatient = new Subject<any>();
    refreshPatient = new Subject<any>();
    addPatient = new Subject<any>();

    constructor(public dialog: MatDialog,
        public http: HttpClient) {

    }

    patientColumnDefs = [
        { headerName: 'PatientId', field: 'patientId' },
        { headerName: 'First Name', field: 'firstName', sortable: true, filter: true },
        { headerName: 'Last Name', field: 'lastName', sortable: true, filter: true },
        { headerName: 'Visits', field: 'visits', sortable: true, filter: true },
        { headerName: 'Age', field: 'age', sortable: true, filter: true },
        { headerName: 'Physician', field: 'pcp', sortable: true, filter: true },
        { headerName: 'Insurance', field: 'insurance', sortable: true, filter: true },
        {
            headerName: 'Action', field: 'action', sortable: true, filter: true, cellRenderer: 'customPatientActionCellRenderer', cellRendererParams: {
                onViewClick: this.onViewItemClick.bind(this),
                onAddClick: this.onAddItemClick.bind(this),
                onEditClick: this.onEditItemClick.bind(this),
                onDeleteClick: this.onDeleteItemClick.bind(this)
            }
        }
    ];

    // patientData = [new PatientModel('John', 'John', 2, 36, 'Andrew', 'uhc', 0),
    // new PatientModel('Jessin', 'John', 4, 7, 'Aeron', 'aetna', 0),
    // new PatientModel('Jannis', 'John', 6, 5, 'Antony', 'cigna', 0),
    // new PatientModel('Jenifer', 'John', 5, 33, 'Elyse', 'bluecross', 0),
    // new PatientModel('Sadeesh', 'Sadeesh', 2, 38, 'Gerald', 'aetna', 0),
    // new PatientModel('Anita', 'Sadeesh', 8, 35, 'Micheal', 'uhc', 0),
    // new PatientModel('Prithvi', 'Sadeesh', 3, 4, 'Connie', 'cigna', 0),
    // new PatientModel('Ram', 'Ram', 7, 34, 'Andrew', 'bluecross', 0),
    // new PatientModel('Santhiya', 'Ram', 8, 28, 'Antony', 'uhc', 0),
    // new PatientModel('Madhavan', 'Ram', 5, 7, 'Aeron', 'aetna', 0),
    // new PatientModel('Mithran', 'Ram', 9, 1, 'Aeron', 'aetna', 0)
    // ];

    getPatientData() {
        // return this.patientData;
        return this.http.get('api/v1/patient');
    }
    getPatientDataById(patientId: number) {
        return this.http.get('api/v1/patient/' + patientId);
    }
    deletePatientDataById(patientId: number) {
        // debugger
        return this.http.delete('api/v1/patient/' + patientId);

    }
    addPatientData(patient: any) {
        // debugger
        return this.http.post('api/v1/patient', patient);

    }
    updatePatientById(patientId: number, patient: any) {
        // debugger
        return this.http.put('/api/v1/patient/' + patientId, patient);
    }
    onViewItemClick(params: any) {
        console.log(params);
        const dialogRef = this.dialog.open(ViewPatientComponent, {
            width: '40%',
            height: '90%',
            data: params.rowData
        });

    }
    onAddItemClick(params: any) {
        const dialogRef = this.dialog.open(AddPatientComponent, {
            width: '40%',
            height: '90%',
            // data: params.rowData
        });
        dialogRef.afterClosed().subscribe(newPatient => {
            // this.addPatient.next(newPatient);
            // this.addPatientData(newPatient).subscribe(newPatientData => {
            this.getPatientData().subscribe(updatedList => {
                this.addPatient.next(updatedList);
            });
        });


    }
    onEditItemClick(params: any) {
        console.log(params);
        const dialogRef = this.dialog.open(EditPatientComponent, {
            width: '40%',
            height: '90%',
            data: params.rowData
        });
        dialogRef.afterClosed().subscribe(editedPatient => {
            this.getPatientData().subscribe(updatedList => {
                this.editPatient.next(updatedList);
            });
            // debugger
            // this.patientData = this.patientData.map(patient => {
            //     if (patient.firstName === editedPatient.firstName) {
            //         return editedPatient;
            //     } else {
            //         return patient;
            //     }
            // });
            // this.editPatient.next(this.patientData);
            // console.log(this.patientData);
        });
    }
    onDeleteItemClick(params: any) {
        const dialogRef = this.dialog.open(DeletePatientComponent, {
            width: '50%',
            height: '25%',
            data: params.rowData
        });
        dialogRef.afterClosed().subscribe(deletedPatient => {
            this.getPatientData().subscribe(updatedList => {
                // debugger
                this.refreshPatient.next(updatedList);
            });
            // this.deletePatient.next(deletedPatient);
        });

    }
}