<?php
	$expediteur=$_POST["email"];
	$nom_expediteur=$_POST["nom"];
	$message=$_POST["message"];
	
	$to="edesmis@free.fr";
	
	$res=mail ($to,"contact depuis le formulaire du site de".$nom_expediteur,
		$message, 'From:'.$expediteur);
		if ($res){
			$message2="texte à définir";
			$subject2="texte à définir";
			$res=mail($expediteur, $subject2,$message2, 'From:'.$expediteur);
			header("location : sucess.html");
		
		}


?>