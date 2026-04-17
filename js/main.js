
function muunna() {
    let luku = document.getElementById("luku").value;


    if (isNaN(luku)) {
        document.getElementById("result").textContent =
        "virhe, syötä vain numero";
        return;
    }

    let asetus = document.getElementById("asetus").value;


    let desimaali = parseInt(document.querySelector('input[name="desimaali"]:checked').value);

    if (asetus === "celsius") {
        tulos = (luku * 1.8) + 32
        vertaus = luku
    }
    else if (asetus === "fahrenheit") {
        tulos = (luku - 32) / 1.8
        vertaus = tulos
    }
    tulos = tulos.toFixed(desimaali);

    document.getElementById("result").textContent =
    "Tulos: " + tulos;

    if (vertaus < -273.15) {
        document.getElementById("nollapiste").textContent =
        "kylmempi kuin absoluuttinen nollapiste"
    }
    else if (vertaus > -273.15) {
        document.getElementById("nollapiste").textContent =
        ""
    }
}