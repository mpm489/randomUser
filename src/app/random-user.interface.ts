export interface Name {
    title: string;
    first: string;
    last: string;
  }
  
  export interface Location {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  }
  
  export interface Login {
    uuid: string;
    username: string;
    password: string;
  }
  
  export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    phone: string;
    cell: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }
  
  export interface RandomUserResponse {
    results: User[];
  }
  