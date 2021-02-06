import React from 'react'; 

function DisplayPlayers({playerList}) {
    console.log(playerList)
    return playerList.map((player, index) => {
        return (
            <div key={index}>
            <h4>{player.team_name}</h4>
                <p>Player: {player.name}</p>
                <p>PPG: {player.points_per_game}</p>
                <p>RPG: {player.rebounds_per_game}</p>
            </div>
        )
    })
}

export default DisplayPlayers