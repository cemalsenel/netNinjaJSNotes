//dates &times
const now = new Date();

console.log(now);
console.log(typeof now);

//year, month,day, time

console.log('getFullYear : ',now.getFullYear());//2021
console.log('getMonth : ',now.getMonth());//5 => starts from 0 : jan :0,..., june :5
console.log('getDate : ',now.getDate());//11
console.log('getDay : ',now.getDay());//5 => starts from 0 : sunday :1,...,friday :5
console.log('getHours: ',now.getHours());
console.log('getMinutess : ',now.getMinutes());
console.log('getSeconds : ',now.getSeconds());


//timestamps
console.log('timestamp: ',now.getTime());

//date strings
console.log(now.toDateString());//Fri Jun 11 2021
console.log(now.toTimeString());//20:57:38 GMT+0200 (Central European Summer Time)
console.log(now.toLocaleString());//11/06/2021, 20:58:56
console.log(now.toLocaleDateString());//11/06/2021

//TimeStamps
const before = new Date('June 5 2021 21:03:59');
const after = new Date();
console.log(before.getTime(),after.getTime());

const dif = after.getTime() - before.getTime();
console.log(dif);

const mins = Math.round(dif /1000 /60);
const hours = Math.round(mins/60);
const days = Math.round(hours /24);
console.log(mins);
console.log(hours);
console.log(days);

console.log(`the blog has written ${days} days ago`);

//converting timestamps into date objects

const timestamp = 1623438541051;
console.log(new Date(timestamp));//2021-06-11T19:09:01.051Z

//digital clock

const clock = document.querySelector('.clock');

const tick = () => {
    
    const now  = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html =`
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span> 
    `;
    clock.innerHTML = html;
}
setInterval(tick, 1000);

//dateFns

//date-fns
//<script src="http://cdn.date-fns.org/v1.9.0/date_fns.min.js"></script>

const now = new Date();

//console.log(dateFns.isToday(now));

//formatting options

console.log(dateFns.format(now,'YYYY'));
console.log(dateFns.format(now,'MM'));
console.log(dateFns.format(now,'MMM'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now,'Do'));
console.log(dateFns.format(now,'dddd Do MMMM YYYY'));

//comparing dates

const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));





















