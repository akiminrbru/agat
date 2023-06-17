<?php

    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $company = $_POST["company"];
    $message = $_POST["message"];
    $to = 'info@agat-m.ru'; // замените на свой адрес электронной почты
    $subject = 'Новое сообщение с сайта agat-m.ru';
    $message = "Имя: $name\n\nТелефон: $phone\n\nEmail: $email\n\nКомпания: $company\n\nСообщение:\n$message";
    mail($to, $subject, $message);

?>