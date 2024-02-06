'use strict'

const calc = document.querySelector('#calcBtn');

const input = document.querySelector('#birthdate');

const year = document.querySelector('#years');

const month = document.querySelector('#months');

const day = document.querySelector('#days');

const error = document.querySelector('#error');

const result = document.querySelector('.result');

calc.addEventListener('click', () => {


    /* current dates months and year */
    const currentData = new Date();
    console.log("This is current date ", currentData);
    const currentDate = currentData.getDate();
    const currentMonth = currentData.getMonth() + 1;
    const currentYear = currentData.getFullYear();

    /* Validating that date entered by the user is not euqal to the current date  */

    // Getting date entered by the user

    const enteredData = new Date(input.value);
    console.log("This is entered date ", enteredData);

    const enteredDate = enteredData.getDate();
    const enteredMonth = enteredData.getMonth() + 1;
    const enteredYear = enteredData.getFullYear();

    /* Validating that date entered by the user is not euqal to the current date  */

    if (
        enteredDate === currentDate &&
        enteredMonth === currentMonth &&
        enteredYear === currentYear
    ) {
        error.style.display = 'block';
        error.textContent = 'Date should not be equal to the current date';
        result.style.display = '';
    } else if (
        enteredYear > currentYear ||
        (enteredYear === currentYear && enteredMonth > currentMonth) ||
        (enteredYear === currentYear && enteredMonth === currentMonth && enteredDate > currentDate)
    ) {
        error.style.display = 'block';
        error.textContent = 'Date should not be more than current date';
        result.style.display = '';
    }
    else if (input.value === '') {
        error.style.display = 'block';
        error.textContent = 'Input field should not be empty'

    }
    else {
        let diffYear = currentYear - enteredYear;

        let diffMonth = currentMonth - enteredMonth;

        let diffDate = currentDate - enteredDate;

        // Adjust year and month difference if current month is less than entered month
        if (diffMonth < 0) {
            diffYear--;
            diffMonth += 12;
        }

        // Adjust month and date difference if current date is less than entered date
        if (diffDate < 0) {
            diffMonth--;
            var prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0).getDate();
            diffDate += prevMonthLastDay;
        }
        result.style.display = 'block'
        error.style.display = 'none';
        year.textContent = diffYear;
        month.textContent = diffMonth;
        day.textContent = diffDate;
    }


    /* Leap year check */
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeapYear(currentYear) && enteredMonth <= 2 && currentMonth > 2) {
        diffDate--;
    }


});

