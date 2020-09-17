/*console.log("hello world!!!");

var firstname,age;
firstname='john';
age=28

var job;
console.log(job);

job = 'teacher';
console.log(firstname + ' is a ' + age + ' year old ' + job);

alert( firstname + ' is a ' + job);

var lastName = prompt('what is ur last name ?');
console.log( firstname + ' ' + lastName);

//operator
var now,johnAge,markAge 
now = 2018;
johnage=28;
markage = 33;

var correct = johnAge> markage ; 
console.log(correct);

console.log ( johnage*2); */


/*
// if & else if statements 
johnH=1.62;
johnM=62;

markH=1.76;
markM=57;

BMIjohn= johnM/(johnH * johnH);
BMImark = markM/(markH * markH);

BMIhigh = BMIjohn > BMImark;

if (BMIhigh){
console.log( 'john has a higher BMI');
}
else{
console.log(' Mark has a higher BMI');
}

// else if 
var age =41;

if (age >= 10 && age < 20 ){
    console.log('its a boy')
}
else if (age >= 20 && age < 30 ){
    console.log('its a teenage done')
}
else if (age >= 30 && age < 40 ){
    console.log('its a young man')
}
else if (age >= 40 && age < 60 ){
    console.log('its a old ')
}

//terenary operator
var drink = age >= 18 ? console.log('drinks beer'): console.log('drinks juice');

//switch operator 
var job;
switch(job){
    case 'driver':
        console.log('john drives car');
        break;
    case 'teacher':
        console.log('john teaches students');
        break;
    case 'buisnessman':
        console.log('john is a buisness man');
        break;
    default:
        console.log('john does something');
        break;
}

//challenge

var team1,team2,avg1,avg2;
team1='john';
team2='mark';
avg1 = (89+120+103)/3;
avg2 = (89+120+103)/3;

if (avg1 > avg2){
   console.log(team1 + ' team is the winner'+ ' '+ ' the score is :'+ avg1);
}
else if( avg2 > avg1){
    console.log( team2 + 'team is the winner'+ ' '+ ' the score is :'+ avg2);
}
else if( avg1 === avg2){
    console.log('its a draw game ');
}

*/


/*
//functions( declaration type)

function calculateage(Birthyear){
    return 2020 - Birthyear
}

function Retirmentyear(firstname,year){
    currentage= calculateage(year);
    var retirement = 65-currentage;
    if(retirement > 0){
        console.log( firstname + ' will retire in '+ retirement + ' years.');
    }
    else{
        console.log( firstname+ ' is already retired ');
    }
}

Retirmentyear('john',1969);

// function( expression type)

var whatdoyoudo = function (job, firstname){
    switch(job){
        case 'teacher':
            console.log( firstname + ' teaches coding to students');
            break;
        case 'driver':
            console.log( firstname +' drives uber');
            break;
        default:
            console.log(firstname + ' does some work');
            break;
    }
    
}

console.log(whatdoyoudo('teacher','john'));
console.log(whatdoyoudo(' ','mark'));
console.log(whatdoyoudo('driver','john'));

//arrays 
names = [ 'john','marca','bailey','jane',1990];
console.log(names[2]);
console.log(names);
names.push('holla');
names.unshift('Mr.');
console.log(names);
names.pop();
names.shift();
console.log(names);

*/
//code challenge

var bill1,bill2,bill3;
var tip1,tip2,tip3;
bill1=125;
bill2=48;
bill3=268;

function tipcalci(bill){
    if(bill <=50){
        return bill * 0.2
    }
    else if(bill >50 && bill <=200){
        return bill * 0.15
    }
    else if(bill >200){
        return bill * 0.1 
    }

}

tip1=tipcalci(bill1);
tip2=tipcalci(bill2);
tip3=tipcalci(bill3);
 tips = [tip1,tip2,tip3];
 overall = [(tip1+bill1),(tip2+bill2),(tip3+bill3)];
console.log (tips);
console.log(overall);

// object literals

var john = {
    Lastname: 'smith',
    job :'teacher',
    married : 'true',
    family : ['annie','bob'],
    birthyear : 1969 ,
    calage : function(){              // function(year)
        return 2020-this.birthyear;   // or 2020 - birthyear
    }
}

console.log(john.family[0]);
console.log(john.calage());     // console.log(john.calage(1969)); 
//another objecct literal 
var m = new Object();
m.name='namrata';
m.place='bangalore';


//for 
age=[23,'hoola','moo'];
for ( var i=0;i <age.length;i++){
     console.log(age[i]);
}

/*
//while 
i=0
while(i < age.length){
    console.log(age[i]);
    i++
}  */

// scoping 

var a = 'hello';
first();

function first(){
    var b = ' i am ';
    second();

    function second(){
        var c = ' Namrata ';
        console.log(a + b+ c);
    }
}