// Your code here
$(document).ready(function(){
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }

  let tick_tock = window.setInterval(clock, 1000);
  let tock_tick = window.setInterval(kr, 1000);

  function clock() {
    let date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    $('#date').html(months[month] + " " + day + ", " + year);

    $('#clock').html(hour + ":" + minute + ":" + second);
  }

  function kr() {
    let kr_time = new Date( new Date().getTime() + 9 * 3600 * 1000);
    year = kr_time.getFullYear();
    month = kr_time.getMonth();
    day = kr_time.getDate();
    hour = kr_time.getHours();
    minute = kr_time.getMinutes();
    second = kr_time.getSeconds();

    $('#kr-date').html(months[month] + " " + day + ", " + year);

    $('#kr-clock').html(hour + ":" + minute + ":" + second);
  }
});
