// Your code here
// function createEmployeeRecord(firstName, familyName, title, payPerHour) {
//     this.firstName = firstName;
//     this.familyName = familyName;
//     this.title = title;
//     this.payPerHour = payPerHour;
//     this.timeInEvents=[]
//     this.timeOutEvents = []
    
// }
// let testEmployee = new createEmployeeRecord("Gray", "Worm", "Security", 1)
let createEmployeeRecord = function (record) {
  return {
    firstName: record[0],
    familyName: record[1],
    title: record[2],
    payPerHour: record[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
    
};
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(createEmployeeRecord)
}
const getHour = function (dateTime) {
    return parseInt(dateTime.match(/\d{4}$/)[0])
}
const getDate = function (dateTime) {
  return dateTime.match(/\d{4}-\d{2}-\d{2}/)[0];
};
    
function createTimeInEvent(array, timeIn) {
    array.timeInEvents.push({
        type: "TimeIn",
        date: getDate(timeIn),
        hour: getHour(timeIn)
    })
    return array
   
}
function createTimeOutEvent(array, timeOut) {
    array.timeOutEvents.push({
      type: "TimeOut",
      date: getDate(timeOut),
      hour: getHour(timeOut),
    });
    return array
}
function hoursWorkedOnDate(array, dateGiven) {
    let timeIn = array.timeInEvents.find(event =>
        event.date == dateGiven)
    let timeOut = array.timeOutEvents.find(
        (event) => event.date == dateGiven)
    let totalTime = (timeOut.hour - timeIn.hour)/100
    return totalTime
}
function wagesEarnedOnDate(array, dateGiven) {
    let hours = hoursWorkedOnDate(array, dateGiven)
    return array.payPerHour*hours
}
function allWagesFor(array) {
    return array.timeInEvents.reduce((total, event) => {
        return total +wagesEarnedOnDate(array, event.date)
    },0)
}
function calculatePayroll(employeeRecord) {
    return employeeRecord.reduce((total, record) => {
        return total + allWagesFor(record)
    }, 0)
    
}