<?php

$field_surname = $_POST['cf_surname'];
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];


$mail_to = 'contact@vommusic.fr';
$subject = 'Message de :'.$field_surname." ".$field_name;
$body_message = 'De: '.$field_surname." ".$field_name."\n";
$body_message .= 'Mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'De: '.$field_email."\r\n";
$headers .= 'Répondre à: '.$field_email."\r\n";

	// Ma clé privée
	$secret = "6LclF30UAAAAAMsKpoyE40MmRc2S0z6yizdmrAqR";
	// Paramètre renvoyé par le recaptcha
	$response = $_POST['g-recaptcha-response'];
	// On récupère l'IP de l'utilisateur
	$remoteip = $_SERVER['REMOTE_ADDR'];

	$api_url = "https://www.google.com/recaptcha/api/siteverify?secret="
	    . $secret
	    . "&response=" . $response
	    . "&remoteip=" . $remoteip ;

	$decode = json_decode(file_get_contents($api_url), true);

	//le captcha est valide
	if ($decode['success'] == true) {
		$mail_status = mail($mail_to, $subject, $body_message, $headers);

		if ($mail_status) { ?>
			<script language="javascript" type="text/javascript">
				alert('Merci pour votre message. Je vous recontacterai sous peu');
				window.location = 'index.html';
			</script>
		<?php
		}
		else { ?>
			<script language="javascript" type="text/javascript">
				alert("Échec de l'envoi. Merci de contacter directement " .$field_email);
						window.location = 'index.html';
			</script>
		<?php
		}
	}

	else {
		?>
		<script language="javascript" type="text/javascript">
			alert("Merci de valider le captcha avant de tenter d'envoyer le message.");
					window.location = 'index.html';
		</script>
		<?php
	}
?>
