var d=new Date();
document.write(d)
var month=['January', 'February', 'March', 'April',' May',' June',' July', 'August', 'September', 'October', 'November',' December'];

document.write(month[d.getMonth()])
var days =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
document.write(days[d.getDay()]);
var days =["its fun day","monday","tuesday","wednesday","thursday","friday","its fun day"];
document.write(days[d.getDay()]);
var a=d.getDate()
if(a<=15){
    document.write("first fifteen day")
}else if(a>=15){
    document.write("last fifteen days")
}
document.write("current date is "+Date()+"/n  milliseconds from 1970 january are "+ d.getTime()+" /n mintues from 1970 are "+(d.getTime()/1000)/60)
var c=d.getHours()
if(c<=12){
    document.write("its AM")
}else if(c>=12){
    document.write("ITS NOON")
}
var b=new Date("January 05,2020 5:05:00")
document.write(b)
var e=new Date ("March 10, 2024")
var f= new Date();
var g= f-e;
document.write("days passed since last ramdan "+(((g/1000)/60)/60)/24)
document.write((((g/1000)/60)))

var j=d.getHours()-1
document.write(j);
var k=d.getFullYear()-100
document.write(k)
function generateBill() {
    const customerName = prompt("Enter Customer Name:");
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const units = parseFloat(prompt("Enter Number of Units:"));
    const chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
    const latePaymentSurcharge = parseFloat(prompt("Enter Late Payment Surcharge:"));

    const netAmount = (units * chargesPerUnit).toFixed(2);
    const grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

    const billContent = `
    KE ELECTRIC BILL /n
        Customer Name: ${customerName}/n
        Current Month: ${currentMonth}/n
        Number of Units: ${units}/n
        Charges per Unit: ${chargesPerUnit.toFixed(2)}/n
        Net Amount Payable (within Due Date): ${netAmount}/n
        Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}/n
        Gross Amount Payable (after Due Date): ${grossAmount}
    `;

    document.write(billContent);
}




