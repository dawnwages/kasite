// Shortlist given by KA
// TODO; connect to some outside source


var when_list = [
'On Fest weekend',
'Next year',
'Two years from now',
'Next month',
'Tomorrow',
'Tonight at 6',
'This Christmas',
];

var activity_list = [
'wait in line at the Fest hotel',
'drink a PBR',
'quit the band to get a real job',
'play an acoustic set at Loosey’s',
'eat tacos outdoors at Boca Fiesta',
'party',
'record a solo album',
];

var with_list = [
'Fat Mike from NOFX',
'Smelly from NOFX',
'Eric Melvin from NOFX',
'El Hefe from NOFX',
'Kevin Seconds',
'Greg and Jay from Bad Religion',
'Thomas from Strike Anywhere',
];

let handleClick = function(when_list, activity_list, with_list){
    console.log(when_list);
    let whenItem = when_list[Math.floor(Math.random()*when_list.length)];
    let activityItem = activity_list[Math.floor(Math.random()*activity_list.length)];
    let withItem = with_list[Math.floor(Math.random()*activity_list.length)];
    console.log(whenItem, activityItem, withItem);

    document.getElementById("when").innerHTML = whenItem;
    document.getElementById("activity").innerHTML = activityItem;
    document.getElementById("with").innerHtml = withItem;

};

document.addEventListener("DOMContentLoaded", function(){
    handleClick(when_list, activity_list, with_list);
});
