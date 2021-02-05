import React from 'react'; 

function DisplayPlayers({playerList}) {
    return playerList.map((player, index) => {
        return (
            <div key={index}>
                <p>{player.name}</p>
            </div>
        )
    })
}

export default DisplayPlayers