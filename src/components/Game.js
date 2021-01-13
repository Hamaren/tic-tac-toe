import React from 'react';
//import Board from './Board.js';
import './App.scss';

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }

    render(){
        return(
            <div
                className={'square'}
                onClick={() => this.setState({value: 'X'})}
            >{this.state.value}</div>
        )
    }
}

class Board extends React.Component {
    renderSquare(i){
        return <Square />
    }

    render(){
        const status = 'Next player: X';

        return(
            <div>
                <div className={'status'}>{status}</div>
                <div className={'board-row'}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={'board-row'}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={'board-row'}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render(){
        return(
            <div className={'game'}>
                <div classname={'game-board'}>
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game;
