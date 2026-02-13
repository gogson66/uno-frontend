const api = {
        currentPlayer: "player 1",
        frontCard: {
            id: "1",
            color: "red",
            value: "6",
            type: "number",
            playable: false
        },
        players: [
            {
                name: "player 1",
                cards: [
                    {id: "2", color: "blue", value: "5", type: "number", playable: true},
                    {id: "4", color: "yellow", value: "4", type: "number", playable: false},
                    {id: "5", color: "red", value: "skip", type: "number", playable: false},
                ]
            },
            {
                name: "player 2",
                cards: [
                    {id: "8", color: "green", value: "7", type: "number", playable: true},
                    {id: "12", color: "yellow", value: "9", type: "number", playable: false},
                    {id: "4", color: "red", value: "reverse", type: "number", playable: true},
                ]
            }
        ]
    }

export async function getGameState() {
    //const res = await fetch("/api/state")
    return api
}

export async function playCard(cardId) {
    /*const res = await fetch("/api/play", {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify({cardId})
    })*/

    //return res.json()
    console.log("Api called " + cardId)
    return api
}