function ocultaPesquisa() {
    var caixaPesquisa = document.getElementById('caixaPesquisa');
    if (caixaPesquisa.style.display === 'none') {
        caixaPesquisa.style.display = 'block';
    } else {
        caixaPesquisa.style.display = 'none';
    }
}