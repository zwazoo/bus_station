//Search

;
(function () {
    "use strict";


    const xhr = new XMLHttpRequest();

    const ticketsList = document.querySelector('.ba-tickets'),
        dateTicket = document.querySelector('.ba-tickets-date'),
        toCity = document.querySelector('.ba-tickets-direction__to'),
        ticketsTmpl = document.querySelector('#li-tmpl').innerHTML,
        cityTmpl = document.querySelector('#li-tmpl1').innerHTML,
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

            let ticketsListHTML = "";
            let dateHTML = "";
            let cityHTML = "";

            let date = sessionStorage.getItem("date"); ////getting date and city from sessionStorage, sessionStorage values update after each input change
            let city = sessionStorage.getItem("cityTo");


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

            //added changes in html
            ticketsList.innerHTML = ticketsListHTML;
            dateTicket.innerHTML = dateHTML;
            toCity.innerHTML = cityHTML;


            //Sorting
            let filters = document.querySelector(".ba-tickets-info__select");
            let option = filters.value;
            let price = document.querySelector('[data-cost="price"]').innerHTML;
            console.log(price);

            filters.onchange = function () {
                let selectDate = [];
                let selectTime1 = [];
                let selectTime2 = [];

                if (option == "by price") {
                    selectDate.push("price");
                };
            }
        }
    };

})();