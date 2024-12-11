import { DEPARTMENT, E_GENDER } from "./constants.enum";
import { IEmployee } from "./employee.interface";
import { EmployeeService } from "./employee.service";

export class EmployeeServiceImpl implements EmployeeService {
  employees: IEmployee[] = [];
  private nextId = 1;
  async addEmployee(data: IEmployee): Promise<IEmployee> {
    const newEmployee: IEmployee = {
      ...data,
      id: this.nextId++,
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
  async getEmployee(id: number): Promise<IEmployee> {
    const employee = this.employees.find((emp)=>emp.id===id)
    if (!employee) {
      throw new Error("not found");
    }
    return employee;
  }
  async getAllEmployee(): Promise<IEmployee[]> {
    return this.employees;
  }
  async updateEmployee(id: number, data: IEmployee): Promise<IEmployee> {
    const index = this.findEmplIndex(id)
    if(index=== -1){
        throw new Error("not found")
    }
    const undateEp={...this.employees[index],...data}
    return undateEp;
  }
  async deleteEmployee(id: number): Promise<void> {
    const index = this.findEmplIndex(id);
    if(index=== -1){
        throw new Error(" employee not found");
        
    }
    this.employees.splice(index,1)
  }
  getEmployeeByGender(gender: E_GENDER): Promise<IEmployee[]> {
    throw new Error("Method not implemented.");
  }
  getEmployeeByDepartment(dept: DEPARTMENT): Promise<IEmployee[]> {
    throw new Error("Method not implemented.");
  }

  findEmplIndex(id:number){
    return this.employees.findIndex((emp)=>emp.id===id)
  }
}