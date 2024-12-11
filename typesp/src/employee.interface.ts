import { DEPARTMENT, E_GENDER } from "./constants.enum";
export interface IEmployee{
    id:number
    name:string
    salary:number
    department:DEPARTMENT
    gender:E_GENDER

}