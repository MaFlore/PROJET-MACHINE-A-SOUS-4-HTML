function jouer() {

    var niveau = document.querySelector('input[name=niveau]:checked ').value;
    var mise = document.getElementById('mise').value;
    var argentCompte = parseFloat(document.getElementById('gain').textContent);

    if (mise == "") {
        alert("Le champ mise ne doit pas etre null");
    } else if (mise > 25000) {
        alert("La mise ne doit pas dépassée 25000");
    } else if (argentCompte < mise) {
        alert("Votre compte est insuffisant");
    } else {

        var parametre = "niveau=" + niveau;

        objet_xml_http_request = creation_objet_xml_http_request();

        objet_xml_http_request.open('post', 'gainAleatoire.php', true);

        objet_xml_http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        objet_xml_http_request.onreadystatechange = actualiserPage;

        document.getElementById('button').disabled = true;
        document.getElementById('formulaire').style.visibility = "hidden";
        document.getElementById('commencer').style.visibility = "hidden";
        document.getElementById('charge').style.visibility = "visible";

        objet_xml_http_request.send(parametre);
    }

}