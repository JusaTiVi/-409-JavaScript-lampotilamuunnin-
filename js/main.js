
function muunna() {
    let luku = parseFloat(document.getElementById("luku").value);

    let asetus = document.getElementById("asetus").value;

    let desimaali = parseInt(document.querySelector('input[name="desimaali"]:checked').value);

    if (asetus === "celsius") {
        tulos = (luku * 1.8) + 32
    }
    else if (asetus === "fahrenheit") {
        tulos = (luku - 32) / 1.8
    }
    tulos = parseFloat(tulos.toFixed(desimaali));

    document.getElementById("result").textContent =
    "Tulos: " + tulos;
}