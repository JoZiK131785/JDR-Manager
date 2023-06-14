function setAvatar(avatar) {
    switch (avatar) {
        case 11:
            return "argonien1";
        case 12:
            return "argonien2";
        case 13:
            return "argonien3";
        case 14:
            return "argonien4";
        case 15:
            return "argonien5";
        case 21:
            return "breton1";
        case 31:
            return "khajiit1";
        case 51:
            return "rougegarde1";
        default:
            console.log("ERROR");
            break;
    }
}

function setMap(map) {
    switch (map) {
        case 1:
            return "/img/nirn.jpg";
        case 2:
            return "/img/tamriel.jpg";
        case 3:
            return "/img/Belkarth.jpg";
        default:
            console.log("ERROR");
            break;
    }
}

export { setAvatar, setMap };