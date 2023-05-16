export interface Fixture {
    Country: string;
    LeagueId: string;
    LeagueName: string;
    MatchId: string;
    MatchName: string;
    KickOffUtc: string;
    MatchTime: string;
    MatchDate: string;
    Team1Id: string;
    Team1Name: string;
    Team2Id: string;
    Team2Name: string;
}

export interface Legs {
    selectionId: number,
    selectionValue: number
}
export interface BuilderBets {
    MatchId: number;
    Legs: number;
    SelectionMarketId: string;
    BetBuilderSelections: Array<any>;
    TotalOdds: string;
    Pot1count: number;
    Pot2count: number;
    Pot3count: number;
    Pot4count: number;
    Pot5count: number;
}
export interface Markets {
    MasterMarketId: string;
    MasterMarketName: string;
    MarketId: string;
    MarketName: string;
}

export interface BuilderQueryInstance {
    marketId: string;
    legs: string;
    matchId: string;
}