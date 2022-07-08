let messagesMap: { [auth: string]: string } = {}

export default (p: PlayerObject, msg: string) => {
    if (messagesMap[p.auth] == msg) {
        return true
    }
    messagesMap[p.auth] = msg
    return false
}
