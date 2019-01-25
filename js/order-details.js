$(document).ready(function () {
    $('.ba-order-details_city-from').text('AC1,Полтава');
    $('.ba-order-details_city-to').text(sessionStorage.getItem('stationTo'));
    $('#department').text(sessionStorage.getItem('departure') + ',' + sessionStorage.getItem('date'));
    $('#arrival').text(sessionStorage.getItem('arrival') + ',' + sessionStorage.getItem('date'));
    document.querySelector('.ba-tickets-value').setAttribute('data-tickets-value', sessionStorage.getItem('ticketCost'));
    var ticketsTmpl = document.querySelector('#passenger-tmpl').innerHTML;
    $('.pay-ticket-qty').text('1' + ' ' + 'квиток');
    $('.summary-text').text(Number(sessionStorage.getItem('seatQty')) * Number(sessionStorage.getItem('ticketCost')) + ' ' + 'грн');

    for (let index = 1; index < sessionStorage.getItem('seatQty'); index++) {
        $('.ba-passengers').append(ticketsTmpl.replace(/{{nth-passenger}}/, 2));
    }



    $('#qty').val(sessionStorage.getItem("seatQty"));
    var seatQty = document.getElementById('qty');
    $('.ticket-operation').on('click', function () {
        var operation = $(this).data('operation');
        $.ajax({
            success: function () {
                if (operation == '+') {
                    if (seatQty.value <= 24) {
                        seatQty.value = Number(seatQty.value) + 1;
                        $('.ba-passengers').append(ticketsTmpl.replace(/{{nth-passenger}}/, seatQty.value));
                    }
                } else {
                    if (seatQty.value > 1) {
                        seatQty.value = Number(seatQty.value) - 1;
                        $('.ba-passenger-info:last-child:not(.main-passenger)', '.ba-passengers').remove();

                    }
                }
                $('.summary-text').text(Number(seatQty.value) * Number(sessionStorage.getItem('ticketCost')) + ' ' + 'грн');

                switch (seatQty.value) {
                    case '1':
                        $('.pay-ticket-qty').text(seatQty.value + ' ' + 'квиток')
                        break;
                    case '21':
                        $('.pay-ticket-qty').text(seatQty.value + ' ' + 'квиток')
                        break;
                    case '2':
                        $('.pay-ticket-qty').text(seatQty.value + ' ' + 'квитки')
                        break;
                    case '3':
                        $('.pay-ticket-qty').text(seatQty.value + ' ' + 'квитки')
                        break;
                    case '4':
                        $('.pay-ticket-qty').text(seatQty.value + ' ' + 'квитки')
                        break;
                    default:
                        $('.pay-ticket-qty').text(seatQty.value + ' ' + 'квитків')
                        break;
                }

            }
        });
    });



});