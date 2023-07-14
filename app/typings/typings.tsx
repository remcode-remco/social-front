export type SelectedArea = {
  location_id?: string;
  city?: string;
  radius?: string;
};

export type UserData = {
  name?: string;
  email?: string;
  location_id?: number;
  selectedArea?: SelectedArea;
};

export interface ContextProps {
  userData:UserData;
  setUserData:(userData:UserData)=>void;
}

export interface ContextPropsReplies {
  showReplies:boolean;
  setShowReplies:(showReplies:boolean)=>void;
}
