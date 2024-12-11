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
exports.HospitalServiceImpl = void 0;
class HospitalServiceImpl {
    constructor() {
        this.hospitals = [];
        this.nextId = 1;
    }
    addHospital(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newHospital = Object.assign(Object.assign({}, data), { id: this.nextId++ });
            this.hospitals.push(newHospital);
            return newHospital;
        });
    }
    getHospital(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const hospital = this.hospitals.find((hosp) => hosp.id === id);
            if (!hospital) {
                throw new Error("Hospital not found");
            }
            return hospital;
        });
    }
    getAllHospitals() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hospitals;
        });
    }
    updateHospital(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.findHospitalIndex(id);
            if (index === -1) {
                throw new Error("Hospital not found");
            }
            const updatedHospital = Object.assign(Object.assign(Object.assign({}, this.hospitals[index]), data), { id });
            this.hospitals[index] = updatedHospital;
            return updatedHospital;
        });
    }
    deleteHospital(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.findHospitalIndex(id);
            if (index === -1) {
                throw new Error("Hospital not found");
            }
            this.hospitals.splice(index, 1);
        });
    }
    getHospitalsByGovernmentOwnership(isGovernmentOwned) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hospitals.filter((hosp) => hosp.isGovernmentOwned === isGovernmentOwned);
        });
    }
    getHospitalsByLocation(location) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hospitals.filter((hosp) => hosp.location.toLowerCase() === location.toLowerCase());
        });
    }
    findHospitalIndex(id) {
        return this.hospitals.findIndex((hosp) => hosp.id === id);
    }
}
exports.HospitalServiceImpl = HospitalServiceImpl;
