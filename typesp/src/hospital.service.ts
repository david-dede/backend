import { IHospital } from "./hospital.interface";

export interface HospitalService {
  addHospital(data: IHospital): Promise<IHospital>;
  getHospital(id: number): Promise<IHospital>;
  getAllHospitals(): Promise<IHospital[]>;
  updateHospital(id: number, data: IHospital): Promise<IHospital>;
  deleteHospital(id: number): Promise<void>;
  getHospitalsByGovernmentOwnership(
    isGovernmentOwned: boolean
  ): Promise<IHospital[]>;
  getHospitalsByLocation(location: string): Promise<IHospital[]>;
}
