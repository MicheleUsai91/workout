function showTable(id) {
    const tables = document.querySelectorAll("[id^='table-']");
    tables.forEach(t => {
        t.hidden = t.id.includes(id) ? !t.hidden : true;
    })
    // table.hidden = !table.hidden;
}

function calcoloMassimale() {
    let kg = document.getElementById("pesoMassimale").value;
    let reps = document.getElementById("repsMassimale").value;
    document.getElementById("resMassimale").innerHTML = Math.round(kg / (1.0278 - (0.0278 * reps)));
}

function calcoloReps() {
    let max = document.getElementById("pesoReps").value;
    let reps = document.getElementById("repsReps").value;
    document.getElementById("resReps").innerHTML = Math.round(max * (1.0 - (reps / 40.0)));
}

function volume() {
    let kg = document.getElementById("pesoVol").value;
    let reps = document.getElementById("repsVol").value;
    document.getElementById("resVol").innerHTML = Math.round(kg * reps);
}

function weightConverter() {
    let weight = document.getElementById("pesoConv").value;
    let type = document.querySelector('input[name="kgToLbs"]:checked').value;
    let factor = type === "kg" ? 1.0 / 2.2046 : 2.2046;
    document.getElementById("resConv").innerHTML = Math.round(weight * factor);
}