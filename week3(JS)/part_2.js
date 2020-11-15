let arrDates = [Date.now()];
let newDate = new Date(Date.parse("2018-12-08"));
newDate.setHours(21);
arrDates.push(newDate);


let weekDays = arrDates.map(x => new Date(x).getDay());


function daysOfMonth(month, year)
{
    return new Date(year, month, 0).getDate();
}


function concat(dateArr1, dateArr2){
    let stringDate = [];
    let weekdays = new Array("Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота");
    for(let i = 0; i< dateArr1.length; i++)
    {
        let currentDate = new Date(dateArr1[i]);

        stringDate.push("Дата: " + currentDate.getDate() + "." +  (currentDate.getMonth() + 1) + "." 
        + currentDate.getFullYear() + ", " + "час: " + currentDate.toLocaleTimeString('it-IT') + ", " 
        + weekdays[dateArr2[i]] + ', ' + daysOfMonth(currentDate.getMonth() + 1, currentDate.getFullYear()) + "дни" );
    }
    return stringDate;
}

console.log(concat(arrDates,weekDays));
