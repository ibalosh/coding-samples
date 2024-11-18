import Match from "../Match";

export type MatchStatus = "started" | "finished";

export interface TeamScore {
    name: string;
    score: number;
}

export interface DataHandler {
    add: (homeTeamName: string, guestTeamName: string) => void;
    remove: (homeTeamName: string, guestTeamName: string) => void;
    update: (homeTeamName: string, guestTeamName: string,
             homeTeamScore: number, guestTeamScore: number) => void;
    fetch: (useSorting: boolean) => Match[];
}
