$(document).ready(function(){

  var hours = ["09", "10", "11", "12", "01", "02", "03", "04", "05"]; 
  
  for(var i = 0; i < hours.length; i++) {
    console.log(hours[i])
    var value = localStorage.getItem("hour-" + hours[i]);

    if(value) {
      $("#hour-" + hours[i]).children("textarea")[0].setAttribute("value", value)
      $("#hour-" + hours[i]).children("textarea")[0].innerText = value
    }  
  }

  var today = dayjs();
  
  $('#currentDay').text(today.format('dddd MM D YYYY, hh:mm'));

  var hour = today.format('hh');
  
  var timeblocks = $(".time-block")

$('.saveBtn').click(function() {
  var input = $(this).siblings("textarea")[0].value
  var hourID = $(this).parent().attr("id")
  console.log(hourID)
  console.log(input)
  localStorage.setItem(hourID, input)
})

  for (var i = 0; i < timeblocks.length; i++) {
    if (timeblocks[i].id === ("hour-"+hour)){
      $(timeblocks[i]).addClass("present")
      $(timeblocks[i]).removeClass("future")
      $(timeblocks[i]).removeClass("past")
    } 
  }

  var presentblock = document.querySelector(".present")

  for (var key in timeblocks) {
    if (timeblocks[key] === presentblock) {
      foundKey = key
      break
    } else if (timeblocks[key] != presentblock) {
      foundKey = 9
    }
  }
 
  for (var i =0; i < foundKey; i++) {
    $(timeblocks[i]).addClass("past")
    $(timeblocks[i]).removeClass("present")
    $(timeblocks[i]).removeClass("future")
  }

  for (var i =0; i > foundKey; i++) {
    $(timeblocks[i]).addClass("future")
    $(timeblocks[i]).removeClass("present")
    $(timeblocks[i]).removeClass("past")
  }
  
})