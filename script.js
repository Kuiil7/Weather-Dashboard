
// A $( document ).ready() block.
$( document ).ready(function() {
    

<button type="button" class="btn btn-primary">Primary</button>


$("#currentDate").text(moment().format("LLLL"));

//setting up a loop that correspond to 24 hour format starting from 9hr to 18 hr
//and begins at 9am and ends at 5pm 
for (var i = 9; i < 18; i++) {

    // create a row that includes includes the 9 am and 5 pm variable 
    var row = $(`<div data-time=${i} id='${i}' class="row">`);

    // create a column that includes includes the 9 am and 5 pm variable 
    var col1 = $('<div class="col-sm-2"> <p class="hour">' + formatAMPM(i) + '</p>');

    //create column 2 that includes includes the 9 am and 5 pm variable 
    var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="userinput" placeholder="enter text here..."></textarea>`);

    //create column 3 that includes includes the 9 am and 5 pm variable 
    var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`)

    // append col to row that includes includes the 9 am and 5 pm variable 
    row.append(col1, col2, col3);

    // adding appended columns in rows to main content
    $(".main-content").append(row);

    //saving time to local storage
    localStorage.i; 

}


});