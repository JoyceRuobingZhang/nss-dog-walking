import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const CityList = () => {
    let citiesHTML = "<ul>" //corrected

    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>` //corrected
    }

    citiesHTML += "</ol>"

    return citiesHTML
}