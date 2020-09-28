import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridMaterialModule } from 'src/app/ag-grid-material.module';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { DoctorService } from './shared/doctor.service';
import { AgGridModule } from 'ag-grid-angular';
import { RendererComponent } from './renderer/renderer.component';
import { ActionCellrendererComponent } from './renderer/action-cellrenderer/action-cellrenderer.component';
import { VisitCellrendererComponent } from './renderer/visit-cellrenderer/visit-cellrenderer.component';
import { RatingCellrendererComponent } from './renderer/rating-cellrenderer/rating-cellrenderer.component';
import { InsuranceCellrendererComponent } from './renderer/insurance-cellrenderer/insurance-cellrenderer.component';
import { StatusCellrendererComponent } from './renderer/status-cellrenderer/status-cellrenderer.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { PatientService } from 'src/app/shared/patient.service';
import { PatientGridComponent } from './patient/patient-grid/patient-grid.component';
import { PatientRendererComponent } from './patient/patient-renderer/patient-renderer.component';
import { ActionpatientcellrendererComponent } from './patient/patient-renderer/actionpatientcellrenderer/actionpatientcellrenderer.component';
import { ViewPatientComponent } from './patient/view-patient/view-patient.component';
import { EditPatientComponent } from './patient/edit-patient/edit-patient.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { DeletePatientComponent } from './patient/delete-patient/delete-patient.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:'', redirectTo:'doctor-list', pathMatch:'full'},
 
  {path:'doctor-list', component: DoctorListComponent},
  {path:'patient-list', component: PatientGridComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    DoctorListComponent,
    UpdateDoctorComponent,
    RendererComponent,
    ActionCellrendererComponent,
    VisitCellrendererComponent,
    RatingCellrendererComponent,
    InsuranceCellrendererComponent,
    StatusCellrendererComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    EditDoctorComponent,
    PatientGridComponent,
    PatientRendererComponent,
    ActionpatientcellrendererComponent,
    ViewPatientComponent,
    EditPatientComponent,
    AddPatientComponent,
    DeletePatientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridMaterialModule,
    RouterModule.forRoot(routes),
    AgGridModule.withComponents([ActionCellrendererComponent, RatingCellrendererComponent, InsuranceCellrendererComponent, StatusCellrendererComponent]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DoctorService, PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
