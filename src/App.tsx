import React from "react";
import Landing from './Components/Pages/Landing';
import { Page } from './Types/types';
import './App.css';

export interface IAppProps { }

export interface IAppState {
  currentPage: Page,
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      currentPage: 'LANDING',
    };
  }

  // TODO page should come from backend or local state
  private renderPage() {
    const { currentPage } = this.state;
    switch (currentPage) {
      case 'LANDING':
        return (
          <Landing />
        );

      default:
        return (
          <Landing />
        );
    }
  }
  public render() {
    return (
      <div className='App'>
        {this.renderPage()}
      </div>
    );
  }
};