export type Page =
    'LANDING' |
    'WAITING_FOR_PLAYERS' |
    'GAME_START' |
    'HOUSE_CHOICE' |
    'GAME_BOARD' |
    'GAME_END';

export type Room = {
    roomName: RoomName,
    currentPage: Page,
    players: Player[] | Person[], // person array when joining?
    spectators: Person[],
};

export type RoomName =
    'snitch' |
    'seeker' |
    'beater' |
    'chaser' |
    'quaffle' |
    'knut';

export type Person = {
    name: string,
};

export type Player = 
    Person & {
        room: Room, // RoomName?
    };

export type PlayerData =
    Player & {
        house: House,
        board: PlayerBoard,
        lessonCards: LessonCard[],
        challengeCards: ChallengeCard[],
    };

export type House = 'Ravenclaw' | 'Hufflepuff' | 'Slytherin' | 'Gryffindor';

export type PlayerBoard = 
    // RavenclawBoard |
    // HufflepuffBoard |
    // SlytherinBoard |
    GryffindorBoard;

export type GryffindorBoard = {
    house: 'Gryffindor',
    crest: '',
    firstPlayer: boolean,
    completedChallenges: ChallengeCard[],
    knowledgeTokens: number,
    magicTokens: number,
    students: [
        {
            name: 'Harry Potter',
            token: '',
            location: 'Common Room',// 'Board'
            //would need names for the location spots, or index like library and 0, or store current student inside each location and make that data variable - would help with multiple student issue
            potionsLevel: 1,
            charmsLevel: 1,
            dadaLevel: 1
        },
        {
            name: 'Hermione Granger',
            token: '',
            location: 'Common Room',
            potionsLevel: 1,
            charmsLevel: 1,
            dadaLevel: 1
        },
        {
            name: 'Ron Weasley',
            token: '',
            location: 'Common Room',
            potionsLevel: 1,
            charmsLevel: 1,
            dadaLevel: 1
        },
    ]
};

export type LessonCard = {
    name: string,
    type: 'BASIC' | 'ADVANCED',
    introText: string,
    requirements: Symbol[],
    rewards: Symbol[],
};

export type ChallengeCard = {
    name: string,
    type: 'EASY' | 'HARD',
    requirements: Symbol[],
    rewards: Symbol[],
};

export type Symbol = {
    icon: '',
    description: string,
};
