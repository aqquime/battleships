const table = document.querySelector("table")

document.querySelector("button").addEventListener("click", () => {
    const letters = "ABCDEFGHIJ".split("")

    for (let y = 0; y < 10; y++){        
        const tr = document.createElement('tr')
        for (let x = 0; x < 10; x++){    
            const td = document.createElement('td')
            td.dataset.x = letters[x]
            td.dataset.y = y + 1
            td.dataset.isFired = false 
            tr.append(td)
        }
        table.append(tr)
    }
    document.querySelector("button").style.display = "none"
})

table.addEventListener("click", e => {
    const td = e.target.closest("td");
    if (!td) return;

    if (td.dataset.isFired === "true") return;

    td.dataset.isFired = "true";
    const img = document.createElement('img')
    img.src = "./src/img/cross.png"
    e.target.append(img)
});