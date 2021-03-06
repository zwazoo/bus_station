//Search

;
(function () {
    "use strict";
    const xhr = new XMLHttpRequest();

    const ticketsList = document.querySelector('.ba-tickets'),
        dateTicket = document.querySelector('.ba-tickets-date'),
        toCity = document.querySelector('.ba-tickets-direction__to'),
        fromCity = document.querySelector('.ba-tickets-direction__from'),
        ticketsTmpl = document.querySelector('#li-tmpl').innerHTML,
        cityTmpl = document.querySelector('#li-tmpl1').innerHTML,
        city0Tmpl = document.querySelector('#li-tmpl3').innerHTML,
        dateTmpl = document.querySelector('#li-tmpl0').innerHTML;


    xhr.open('GET', "../data/cities.json");

    xhr.send();

    xhr.onload = function () {

        let ajax = this;
        const data = JSON.parse(ajax.response);
        if (sessionStorage.getItem("cityTo")) { ///run function getData() when page loads if we already have destination
            getData();
        }
        document.querySelector(".ba-button-search").onclick = getData;

        function getData() {
            var tickets;
            let ticketsListHTML = "";
            let dateHTML = "";
            let cityHTML = "";
            let city0HTML = "";

            let date = sessionStorage.getItem("date"); ////getting date and city from sessionStorage, sessionStorage values update after each input change
            let city = sessionStorage.getItem("cityTo");
            let cityFrom = sessionStorage.getItem("cityFrom");



            data.forEach(function (cities) {
                if (cities.city == city) {


                    ticketsListHTML += ticketsTmpl
                        .replace(/{{city}}/ig, cities.city)
                        .replace(/{{trip}}/ig, cities.trip)
                        .replace(/{{departuretime}}/ig, cities.departuretime)
                        .replace(/{{arrivaltime}}/ig, cities.arrivaltime)
                        .replace(/{{time}}/ig, cities.time)
                        .replace(/{{station}}/ig, cities.station)
                        .replace(/{{cost}}/ig, cities.cost)
                        .replace(/{{carrier}}/ig, cities.carrier)
                        .replace(/{{bus}}/ig, cities.bus)
                        .replace(/{{city1}}/ig, cities.city1)
                        .replace(/{{city2}}/ig, cities.city2)
                        .replace(/{{city3}}/ig, cities.city3)
                        .replace(/{{date}}/ig, date)

                }

            });

            //change date on top,after breadcrumbs
            dateHTML += dateTmpl
                .replace(/{{date0}}/ig, date)

            //change city on top,after breadcrumbs
            cityHTML += cityTmpl
                .replace(/{{toCity}}/ig, city)
            city0HTML += city0Tmpl
                .replace(/{{fromCity}}/ig, cityFrom)

            //added changes in html
            ticketsList.innerHTML = ticketsListHTML;
            dateTicket.innerHTML = dateHTML;
            toCity.innerHTML = cityHTML;
            fromCity.innerHTML = city0HTML;
            tickets = document.querySelectorAll('.ba-ticket');
            console.log(tickets);

            tickets.forEach(function name(ticket) {
                $(ticket).on('click', function (e) {
                    console.log(e);
                    var stationTo = this.querySelector('.ba-station-to').innerText.split(' ').splice(1);
                    sessionStorage.setItem('stationTo', stationTo);
                    var departure = this.querySelector('#ba-departure').innerText;
                    sessionStorage.setItem('departure', departure);
                    var arrival = this.querySelector('#ba-arrival').innerText;
                    sessionStorage.setItem('arrival', arrival);
                    var ticketCost = this.querySelector('.ba-ticket__cost').innerText.split(' ')[0];
                    sessionStorage.setItem('ticketCost', ticketCost);
                });
            });

        }

    };

})();
// $(document).ready(function () {
//     var tickets = document.querySelectorAll('.ba-ticket');
//     console.log(tickets);
//     tickets.forEach(function name(ticket) {
//         $(ticket).on('click', function (e) {
//             console.log(e);
//             var stationTo = this.querySelector('.ba-station-to').innerText.split(' ').splice(1);
//             sessionStorage.setItem('stationTo', stationTo);
//             var departure = this.querySelector('#ba-departure').innerText;
//             sessionStorage.setItem('departure', departure);
//             var arrival = this.querySelector('#ba-arrival').innerText;
//             sessionStorage.setItem('arrival', arrival);
//             var ticketCost = this.querySelector('.ba-ticket__cost').innerText.split(' ')[0];
//             sessionStorage.setItem('ticketCost', ticketCost);
//         });
//     });
// });
