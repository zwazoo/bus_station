$(document).ready(function () {
    $('#qty').val(sessionStorage.getItem("seatQty"));
    var seatQty = document.getElementById('qty');
    $('.ticket-operation').on('click', function () {
        var operation = $(this).data('operation');
        $.ajax({
            success: function () {
                console.log(operation);
                if (operation == '+') {
                    seatQty.value = Number(seatQty.value) + 1;
                } else {
                    if (seatQty.value > 0) {
                        seatQty.value = Number(seatQty.value) - 1;
                    }
                }
            }

        });
    });
});