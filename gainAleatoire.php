<?php

header("Content-Type: text/html; charset=utf-8");
header("Cache-Control: no-cache . private");
header("Pragma: no-cache");
sleep(2);

if(isset($_REQUEST['niveau']))
{ 
    $niveau = $_REQUEST['niveau'];

    if($niveau == 'facile'){
        $niveau = 'facile';
        $gain = rand(0,100);

    }
    else if($niveau == 'moyen'){
        $niveau = 'moyen';
        $gain = rand(0,500);
    }
    else {
        $niveau = 'difficile';
        $gain = rand(0,1000);
    }
}
else
{
    $niveau = "niveau inconnu";
}



$resultat = '<p>Vous avez gagné </p>'.':'.'<p>Vous avez perdu </p>'.':'.$niveau.':'.$gain;
echo $resultat;

?>

