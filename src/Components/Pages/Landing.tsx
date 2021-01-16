import React from "react";

export interface ILandingProps { }

export interface ILandingState {
    playerName: string,
    roomCode: string,
}

export default class Landing extends React.Component<ILandingProps, ILandingState> {
    constructor(props: ILandingProps) {
        super(props);

        this.state = {
            playerName: '',
            roomCode: '',
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    private onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        let field = e.target.name;
        let val = e.target.value;
        let prevState = {...this.state};
        console.log(prevState, field, val)
        this.setState({...prevState, [field]: val });
    };

    private onSubmit() {
        console.log(this.state)
    }

    public render() {
        return (
            <div className='Landing'>
                <input name='playerName' placeholder='Your Name' onChange={this.onChangeHandler}></input>
                <input name='roomCode' placeholder='Room Code' onChange={this.onChangeHandler}></input>
                <button onClick={this.onSubmit}>Join Room</button>
            </div>
        );
    }
}