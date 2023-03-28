export interface Team {
  id : number;
  name: string;
  short: string;
}
export interface Game {
  id : string;
  class : string;
  round : string;
  datetime: string;
  participants: string[];
  result: {
    score: string[];
    winner: string;
  }
}
export interface Round {
  id : string;
  title: string;
  games: Game[]
}