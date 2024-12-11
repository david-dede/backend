import { DEPARTMENT, E_GENDER } from "./constants.enum";
import { IEmployee } from "./employee.interface";

export interface EmployeeService {
  addEmployee(data: IEmployee): Promise<IEmployee>;
  getEmployee(id: number): Promise<IEmployee>;
  getAllEmployee(): Promise<IEmployee[]>;
  updateEmployee(id: number, data: IEmployee): Promise<IEmployee>;
  deleteEmployee(id: number): Promise<void>;
  getEmployeeByGender(gender: E_GENDER): Promise<IEmployee[]>;
  getEmployeeByDepartment(dept:DEPARTMENT):Promise<IEmployee[]>
}