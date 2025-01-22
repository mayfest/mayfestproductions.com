export interface TeamMember {
  name: string;
  role: string;
  email: string;
}

export interface Team {
  name: string;
  description: string;
  members: TeamMember[];
}
