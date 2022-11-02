//global variables
var hours = ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
var today = moment().format('dddd MMM Do YYYY');



//functions
// local storage event listener function
function saveTaskStorage() {
    for (i = 1; i < 13; i++) {

        $("#btn" + i).click(function () {
            var task = $(this).parent().attr("id");
            console.log(task);
            console.log($("#" + task + " textarea").val());
            localStorage.setItem(task, ($("#" + task + " textarea").val()));

        })

    }
}
// set colors for blocks function
function setColor() {

    $('.row').each(function () {
// passes the string into numbers
        var idTime = parseInt($(this).attr('id'));
// gets current time
        var currentTime = parseInt(moment().format('HH'));

        $(this).removeClass("past present future");

        if (currentTime > idTime) {
            $(this).addClass("past");


        } else if (currentTime < idTime) {
            console.log('future')
            $(this).addClass("future");

        } else {
            console.log('now')
            $(this).addClass("present");
        }
    })
}

function getTasksFromStorage() {


    for (i = 0; i <= hours.length; i++) {
        //GETS THE DATA FROM THE LOCAL STORAGE
        var storedTask = localStorage.getItem(hours[i]);

        //SHOWS THE LOCAL AS A TEXT INTO THE TEXTARE TAG
        $("#task" + i).text(storedTask);


        console.log(storedTask);

    }


}
//main process

$('#today').text(today);
getTasksFromStorage();
setColor();
saveTaskStorage();
