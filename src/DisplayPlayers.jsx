import React from 'react'; 

function DisplayPlayers({playerList}) {
    console.log(playerList)
    return playerList.map((player, index) => {
        return (
            <div key={index}>
            <h4>{player.team_name}</h4>
                <p>{player.name}</p>
            </div>
        )
    })
}

export default DisplayPlayers