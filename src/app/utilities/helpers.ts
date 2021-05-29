export const faculties = {
    "IAEE": "Instytut Automatyki, Elektroniki i Elektrotechniki",
    "ISSI": "Instytut Sterowania i Systemów Informatycznych",
    "IMEI": "Instytut Metrologii, Elektroniki i Informatyki"
}

export const mapFaculty = (epitome: string) => {
    return faculties[epitome];
}

export const getIdentifier = (name: string) => {
    return name.toLowerCase().replace(/\s/g, '-');
}

export const reverseIdentifier = (identifier: string) => {
    return identifier.replace(/-/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}