import React from 'react'; 
import DisplayPlayers from './DisplayPlayers'
class GetPlayers extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {players: [], input: ''}
    }

    componentDidMount() {
        fetch('https://nba-players.herokuapp.com/players-stats')
        .then(res => res.json())
        .then(res => this.setState({
            players: res
        }));
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }


    render() {
        return (
            <div> 
            <div><h1>Player List</h1></div>
            <input type='text' value={this.state.input} onChange={this.handleChange} />
            <DisplayPlayers playerList={this.state.players}/>
             </div>
        )
    }
}

export default GetPlayers;