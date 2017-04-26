<?
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

$to  = 'misha1991s@mail.ru, tercom-7@mail.ru, mykola@jssolutionsdev.com, rolik76@bk.ru, hennaden@rambler.ru, svdudyak@gmail.com';
$subject = 'У Вас нове звернення із Tercom';

// текст письма
$message = 'Імя: ' . $name . '<br><br>Емейл: ' . $email . '<br><br>	Звернення: ' . $text . '<br><br>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

mail($to, $subject, $message, $headers);

?>
