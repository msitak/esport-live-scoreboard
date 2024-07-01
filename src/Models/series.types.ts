export interface Series {
  id: number;
  title: string;
  tournament: Tournament;
  startTime: string;
  teams: Team[];
}

interface Tournament {
  id: number;
  shortName: string;
  name: string;
}

interface Team {
  id: number;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
}
