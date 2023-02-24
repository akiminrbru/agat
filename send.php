<meta charset="UTF-8" />
<?php

// Получаем значения переменных из пришедших данных
// $name = $_POST['name'];
// $surname = $_POST['surname'];
// $email = $_POST['email'];
// $phone = $_POST['phone'];
// $comment = $_POST['comment'];

$name = "Oleg";
$surname = "Akimin";
$email = "olezhkaaa0073@gmail.com";
$phone = "89002726144";
$comment = "asdasdasdsajghaksjdfhlaksdh";

$subject = "Обратная связь AGAT-M";

// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "Имя: $name \nФамилия: $surname $ \nТелефон: $phone \nE-mail: $email \nКомментарий: $comment";

$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Фамилия: '.$_POST['surname'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Сообщение: '.$_POST['comment'].'</p>                                   
                    </body>
                </html>';


$send = mail("akimin97@mail.ru", $subject, $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

// Если отправка прошла успешно — так и пишем
if ($send == 'true') {echo "Сообщение отправлено";}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo "Ой, что-то пошло не так";}
?>