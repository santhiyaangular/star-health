import { DoctorModel } from './doctor-model';

export class PatientModel {
    constructor(public firstName: string,
        public lastName: string,
        public visits: number,
        public age: number,
        public doctor: any,
        public insurance: any,
        public payment: number

    ) { }
}