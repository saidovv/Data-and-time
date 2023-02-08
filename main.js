// let date=new Date();
// console.log(date.getDate(),date.getMonth()+1,date.getHours(),date.getMinutes())



// 1

// function haloween (date){
//     return date.getMonth()=='9' && date.getDate()=='31' ? 'Bonfire Toffe' : 'toffe';
// }
// console.log(haloween(new Date('2013-10-31')))



// 2

// function timeForMilksandCookies (date){
//     return date.getMonth()=='24' && date.getDate()=='24' ? true : false
// }
// console.groupCollapsed(timeForMilksandCookies(new Date(2013-0-23)))





// 3

// function convertDate (date){
//     return arr=[
//         date.getMonth()+1,
//         date.getDate(),
//         date.getFullYear()
//     ];
// }
// console.log(convertDate(new Date('January 9,2019')))
// console.log(convertDate(new Date('Jan 9,2019')))
// console.log(convertDate(new Date('01/09/2019')))
// console.log(convertDate(new Date('01,09,2019')))
// console.log(convertDate(new Date('01-09-2019')))





// 4

// function days (month,year){
//     let date=new Date (month,year,0)
//     return date.getDate()
// }
// console.log(days(2,2018))




// 5

// function getDay (a){
//     let weeks=['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
//     let z=new Date(a).getDay()
//     return weeks[z]
// }
// console.log(getDay('08/04/2016'))






// 6

// function hasFriday13 (date,date2){
//     let a=new Date(date2,date-1,13).getDay()
//     return a==5 ? true : false
// }
// console.log(hasFriday13(3,2020))





// 7

// function formatDate (date){
//     function toGether (n){
//         return n<10 ? '0'+n : n

//     }
//     let year=date.getFullYear()
//     let month=toGether(date.getMonth())
//     let day=toGether(date.getDate())
//     let hour=toGether(date.getHours())
//     let minute=toGether(date.getMinutes())
//     let second=toGether(date.getSeconds())
//     return year+''+month+''+day+''+hour+''+minute+''+second
// }
// console.log(formatDate(new Date(2020,6,4,8,1,2)))





// 8

// function longestTime (hour,minute,second){
//     let h=(hour*60)*60;
//     let m=minute*60;
//     let s=second;
//     return (Math.max(h,m,s)==h) ? hour : (Math.max(h,m,s)==m) ? minute : second
// }
// console.log(longestTime(1,4,3598))





// 9

// function formatDate (date){
//     let day=new Date(date).getDate()
//     let month=new Date(date).getMonth()+1
//     let year=new Date(date).getFullYear()
//     return day+''+month+''+year
// }
// console.log(formatDate('11/12/2019'))




// 10

// function getDays (date,date2){
//     let time=date2.getTime()-date.getTime()
//     return time/(1000*3600*24)
// }
// console.log(getDays(new Date('December 29, 2018'),new Date('January 1, 2019')))




// 11

// function affterYears(years, month) {
//     let date = new Date(years, month);
//     let date2 = !years ? "year missing" : !month ? "month missing" : date.getFullYear();
//     return date2;
//   }
//   console.log(affterYears(2020, 24));




// 12

// function isValidDate (day,month,year){
//     let date=new Date(year,month-1,day)
//     return year===date.getFullYear() && month===date.getMonth()+1 && day===date.getDate()
// }
// console.log(isValidDate(31,2,2020))




// 13

// function reverseDate (date){
//     return date.split(',').reverse().join('-')
// }
// console.log(reverseDate('21,12,2022'))




// 14

// let months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн','июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
// let date = new Date();
// let month = date.getMonth();
// console.log(months[month]);




// 15

// function ShowDay (date){
//     let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//     return days[date.getDay()];
// }
// let date=new Date();
// console.log(ShowDay(date))






// 16

// let date = new Date();
// function addNull (number){
	
//     return number>0 && number<10 ? '0'+number : number
// }

// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + addNull(date.getDate()) + '.' + addNull(date.getMonth() + 1) + '.' + date.getFullYear());




// 17

// function minute(){
//     let date = new Date().getTime()
//     let minut = Math.floor( date / 60000)
//     return minut;
// }
// console.log(minute());




