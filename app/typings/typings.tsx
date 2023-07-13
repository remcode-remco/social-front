export type SelectedArea = {
  location_id:number;
  city:string;
  radius:number;
}

export type UserData = {
  name:string;
  email:string;
  location_id:number;
  selectedArea:SelectedArea;
}

export interface ContextProps {
  userData:UserData|null;
  setUserData:(userData:UserData)=>void;
}
