import { IHospital } from "./hospital.interface";
import { HospitalService } from "./hospital.service";

export class HospitalServiceImpl implements HospitalService {
  private hospitals: IHospital[] = [];
  private nextId = 1;

  async addHospital(data: IHospital): Promise<IHospital> {
    const newHospital: IHospital = {
      ...data,
      id: this.nextId++,
    };
    this.hospitals.push(newHospital);
    return newHospital;
  }

  async getHospital(id: number): Promise<IHospital> {
    const hospital = this.hospitals.find((hosp) => hosp.id === id);
    if (!hospital) {
      throw new Error("Hospital not found");
    }
    return hospital;
  }

  async getAllHospitals(): Promise<IHospital[]> {
    return this.hospitals;
  }

  async updateHospital(id: number, data: IHospital): Promise<IHospital> {
    const index = this.findHospitalIndex(id);
    if (index === -1) {
      throw new Error("Hospital not found");
    }
    const updatedHospital = { ...this.hospitals[index], ...data, id };
    this.hospitals[index] = updatedHospital;
    return updatedHospital;
  }

  async deleteHospital(id: number): Promise<void> {
    const index = this.findHospitalIndex(id);
    if (index === -1) {
      throw new Error("Hospital not found");
    }
    this.hospitals.splice(index, 1);
  }

  async getHospitalsByGovernmentOwnership(
    isGovernmentOwned: boolean
  ): Promise<IHospital[]> {
    return this.hospitals.filter(
      (hosp) => hosp.isGovernmentOwned === isGovernmentOwned
    );
  }

  async getHospitalsByLocation(location: string): Promise<IHospital[]> {
    return this.hospitals.filter(
      (hosp) => hosp.location.toLowerCase() === location.toLowerCase()
    );
  }

  private findHospitalIndex(id: number): number {
    return this.hospitals.findIndex((hosp) => hosp.id === id);
  }
}
