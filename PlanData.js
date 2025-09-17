const plan = {
    "Pon": ["chemia", "historia", "muzyka", "j.polski", "j.niemiecki", "Godz.wych.", "matematyka", "fizyka"],
    "Wt" : ["religia", "geografia", "j.niemiecki", "j.polski", "j.polski", "wf", "polski dod.", ""],
    "Śr" : ["historia", "biologia", "j.angielski", "matematyka", "matematyka", "j.polski", "informatyka", "fizyka"],
    "Czw": ["j.angielski", "j.polski", "wf", "wf", "biologia", "plastyka", "ed.zdrowotna", ""],
    "Pt" : ["chemia", "geografia", "wf", "matematyka", "j.angielski", "", "", ""]
};

const godziny = [
    "8:00 - 8:45",
    "8:55 - 9:40",
    "9:50 - 10:35",
    "10:55 - 11:40",
    "11:50 - 12:35",
    "12:45 - 13:40",
    "13:50 - 14:35",
    "14:45 - 15:30"
];
const dni = Object.keys(plan);

let html = "<table>";
html += "<thead><tr><th>Godzina</th>";
dni.forEach(dzien => html += `<th>${dzien}</th>`);
html += "</tr></thead><tbody>";

godziny.forEach((godzina, i) => {
    html += `<tr><td>${godzina}</td>`;
    dni.forEach(dzien => {
        const lekcja = plan[dzien][i] || "";
        html += `<td>${lekcja}</td>`;
    });
    html += "</tr>";
});

html += "</tbody></table>";

document.getElementById("container").innerHTML = html;
