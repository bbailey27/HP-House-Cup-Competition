import React from "react";

export interface ILandingProps { }

export interface ILandingState {
    playerName: string,
    roomCode: string,
}

export default class Landing extends React.Component<
    ILandingProps,
    ILandingState
    > {
    public render() {
        return <div>Welcome to Harry Potter House Cup Competition!</div>;
    }
}