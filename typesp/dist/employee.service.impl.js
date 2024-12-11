"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeServiceImpl = void 0;
class EmployeeServiceImpl {
    constructor() {
        this.employees = [];
        this.nextId = 1;
    }
    addEmployee(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmployee = Object.assign(Object.assign({}, data), { id: this.nextId++ });
            this.employees.push(newEmployee);
            return newEmployee;
        });
    }
    getEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = this.employees.find((emp) => emp.id === id);
            if (!employee) {
                throw new Error("not found");
            }
            return employee;
        });
    }
    getAllEmployee() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.employees;
        });
    }
    updateEmployee(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.findEmplIndex(id);
            if (index === -1) {
                throw new Error("not found");
            }
            const undateEp = Object.assign(Object.assign({}, this.employees[index]), data);
            return undateEp;
        });
    }
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.findEmplIndex(id);
            if (index === -1) {
                throw new Error(" employee not found");
            }
            this.employees.splice(index, 1);
        });
    }
    getEmployeeByGender(gender) {
        throw new Error("Method not implemented.");
    }
    getEmployeeByDepartment(dept) {
        throw new Error("Method not implemented.");
    }
    findEmplIndex(id) {
        return this.employees.findIndex((emp) => emp.id === id);
    }
}
exports.EmployeeServiceImpl = EmployeeServiceImpl;
