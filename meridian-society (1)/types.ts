export interface User {
  name: string;
  email: string;
  institution: string;
  status: 'Member' | 'Alumni' | 'Fellow';
  interests: string[];
  achievements: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'Lecture' | 'Gala' | 'Networking' | 'Workshop';
  isRsvped: boolean;
}

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: 'Scholarship' | 'Internship' | 'Conference' | 'Fellowship';
  description: string;
  deadline: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
