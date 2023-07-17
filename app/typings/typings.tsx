export type SelectedArea = {
  id: number;
  name: string;
  radius: number;
  longitude: number;
  latitude: number;
};

export type UserData = {
  name?: string;
  email?: string;
  location_id?: number;
};

export interface ContextProps {
  userData:UserData;
  setUserData:(userData:UserData)=>void;
  selectedArea:SelectedArea;
  setSelectedArea:(selectedArea:SelectedArea)=>void;
}

export interface ContextPropsReplies {
  showReplies:boolean;
  setShowReplies:(showReplies:boolean)=>void;
}
