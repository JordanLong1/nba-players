import React from 'react'; 

function DisplayPlayers({playerList}) {
    console.log(playerList)
    return playerList.map((player, index) => {
        return (
            <div key={index} style={{border: 'solid 1px black'}}>
            <h4>{player.team_name}</h4>
                <p>Player: <strong>{player.name}</strong></p>
                <p>PPG: {player.points_per_game}</p>
                <p>RPG: {player.rebounds_per_game}</p>
                <p>APG: {player.assists_per_game}</p>
            </div>
        )
    })
}

export default DisplayPlayers