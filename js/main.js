var valinta = document.getElementById("asetus");
const selected = document.querySelector('input[name="desimaali"]:checked');
function muunna() {
    document.getElementById("result").textContent = selected.value;
}