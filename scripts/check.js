$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        // Устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); // Собираем все данные из формы
        $.ajax({
            type: "POST", // Метод отправки
            url: "send.php", // Путь до php файла отправителя
            data: form_data,
            success: function () {
                // Код в этом блоке выполняется при успешной отправке сообщения
                alert("Ваше сообщение отправлено!");
            },
        });
    });
});
