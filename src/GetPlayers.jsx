import React from 'react'; 
import DisplayPlayers from './DisplayPlayers'
class GetPlayers extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {players: []}
    }

    componentDidMount() {
        fetch('https://nba-players.herokuapp.com/players-stats')
        .then(res => res.json())
        .then(res => this.setState({
            players: res
        }));
    };

    render() {
        return (
            <div> 
            <div><h1>Player List</h1></div>
            <DisplayPlayers playerList={this.state.players}/>
             </div>
        )
    }
}

export default GetPlayers;