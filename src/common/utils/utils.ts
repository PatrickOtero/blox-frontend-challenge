const initialsObtainer = (string: string): string => {
    const separatedName = string.split(" ");

    let stringInitials = "";

    for (let item of separatedName) {
        if(separatedName.indexOf(item) < 2) {
            stringInitials += item[0]
        }
    }

    return stringInitials;
}

export { initialsObtainer };