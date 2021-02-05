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
            
             </div>
        )
    }
}

export default GetPlayers;