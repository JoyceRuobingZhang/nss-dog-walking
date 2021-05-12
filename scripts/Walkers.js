import { getWalkers } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>` //updated by eventlistener chapter
    }

    walkerHTML += "</ul>"
    return walkerHTML //added

}


//evenListener
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // 呼应line10
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")
                // [, walkerId] 意思是获取array里的第二个item，即array[1].
                // 所以此行也可以写成 const walkerId = itemClicked.id.split("--")[1]

            //parseInt(walkerId) return an integer; 因为walkerId目前是一个 string. (从 split 的 array 来的 string）
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)