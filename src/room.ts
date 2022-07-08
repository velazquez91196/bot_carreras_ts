import isSpam from "./features/isSpam"

let room = HBInit({
    roomName: "Hello Typescript!",
})

room.onPlayerJoin = p => {
    room.sendAnnouncement(`${p.name} has joined!`)
}

room.onPlayerChat = (p, msg) => {
    if (isSpam(p, msg)){
        return false
    }
    return true
}
