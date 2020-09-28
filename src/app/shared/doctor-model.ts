export class DoctorModel {
        constructor(public firstName: string,
                public lastName: string,
                public rating: number,
                public age: number,
                public experience: number,
                public insurance: string,
                public status: boolean
        ) { }
}