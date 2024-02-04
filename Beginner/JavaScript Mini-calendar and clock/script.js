'use strict'


function printDateTime() {
    let newDate = new Date();

    console.log(newDate);

    /* Selecting time container elements */

    const hour = document.querySelector('#hour');
    const minute = document.querySelector('#minute');
    const second = document.querySelector('#second');

    /* Selecting Date Container Elements */

    const day = document.querySelector('#day');
    const date = document.querySelector('#date');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');


    /* Working on time container */


    let tempHour = newDate.getHours() % 12;
    if (tempHour === 0) {
        tempHour = 12;
    }

    hour.textContent = ('0' + tempHour).slice(-2);
    minute.textContent = ('0' + newDate.getMinutes()).slice(-2) + ' ' + (newDate.getHours() < 12 ? 'AM' : 'PM');


    /* working on date container */

    day.textContent = newDate.toLocaleString('en', {
        weekday: 'long'
    });

    date.textContent = newDate.toLocaleString('en', {
        day: '2-digit'
    })

    month.textContent = newDate.toLocaleString('en', {
        month: 'short'
    })


}

setInterval(printDateTime, 1000)




