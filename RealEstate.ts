export interface RealEstate {
  id: string;
  name: string;
  space: number;
  rooms: number;
  netRent: number;
  grossRent: number;
  statusCategory: string;
  agent: User;
  address: Address;
  realEstateFiles: RealEstateFile[];
  realEstateReferenceLink: string;
}
