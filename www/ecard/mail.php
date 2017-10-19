<?php
if(!empty($_POST['form_myName'])
    && !empty($_POST['form_myEmail'])
	&& !empty($_POST['form_frName'])
	&& !empty($_POST['form_frEmail']))
{
    $to = $_POST['form_frEmail'];
   	$from = "info@neverbackdownthemovie.com";
	$link = "http://www.blindsightthemovie.com";
	$donate = "http://www.braillewithoutborders.org";
    $s_mail = $_POST['form_myEmail'];
	$s_name = $_POST['form_myName'];
	$fmail = $_POST['form_frEmail'];
	$fname = $_POST['form_frName'];
    $subject = "Your friend $s_name has sent you an e-card from $link";
    $body = "Hi $fname, \n\n";
	$body .= "Your friend $s_name, has sent you an ecard inviting you to see one of the top critically acclaimed films of the year, BLINDSIGHT. ";
	$body .= "Set against the breathtaking backdrop of the Himalayas, BLINDSIGHT follows the gripping adventure of six Tibetan teenagers who set out to climb the 23,000 foot Lhakpa Ri on the north side of Mount Everest. ";
	$body .= "The dangerous journey soon becomes a seemingly impossible challenge made all the more remarkable by the fact that the teenagers are blind.\n\n";
	$body .= "This ecard enables you to access information about this captivating and astonishing film as well as a link to the official film website ($link) and the website for Braille without Borders ($donate) ";
	$body .= "an organization whose groundbreaking work has been recognized internationally as a model for schools for the visually impaired in developing countries.\n\n";
    $header = "From: $s_name <$s_mail>\n";
	$header .= "Reply-To: $s_name <$s_mail>\n";
    $header .= "X-Mailer: PHP/" . phpversion() . "\n";
    $header .= "X-Priority: 3";
    if(@mail($to, $subject, $body, $header))
    {
        echo "output=sent";
    } else {
        echo "output=error";
    }
} else {
    echo "output=";
}
?>