$(document).ready(function(){

    // Add Class to Body
     $("body").on("click","#playBtn",function() {
        $("body").addClass("modal-keno");
    });

    // Remove Class from Body
    $('#kenoNumberSelection').on('hidden.bs.modal', function () {
        $("body").removeClass("modal-keno");
      });

    // Add Class to Body  
    $("body").on("click","#addBtn",function() {
        $("body").addClass("modal-keno");
    });

    // Remove Class from Body
    $('#addGames').on('hidden.bs.modal', function () {
        $("body").removeClass("modal-keno");
      });
    
    // Add Class to Body  
    $("body").on("click","#stakeBtn",function() {
        $("body").addClass("modal-keno");
    });

    // Remove Class from Body
    $('#insufficientFunds').on('hidden.bs.modal', function () {
        $("body").removeClass("modal-keno");
      });


    // Select Number 
     $('.selectNum').click(function() {
        $('#numberSelected').toggle();
        setTimeout(function() { 
            $('#numberSelected').fadeOut(); 
        }, 2000);
     });


    //change colour when radio is selected
    $('#radioSpend input:radio').change(function () {
        // Only remove the class in the specific `box` that contains the radio
        $('li.spendPerDraw--active').removeClass('spendPerDraw--active');
        $(this).closest('.form-check').addClass('spendPerDraw--active');
    });

    //change colour when radio is selected
    $('#radioDraws input:radio').change(function () {
        // Only remove the class in the specific `box` that contains the radio
        $('li.spendPerDraw--activeD').removeClass('spendPerDraw--activeD');
        $(this).closest('.form-check').addClass('spendPerDraw--activeD');
    });

     //change colour when radio is selected
  $('#radioRepeat input:radio').change(function() {
    // Only remove the class in the specific `box` that contains the radio
    $('div.activeWeek').removeClass('activeWeek');
    $(this).closest('.form-check').addClass('activeWeek');
  });

    //change colour when radio is selected
    $('#radioMonthMyTickets input:radio').change(function() {
        // Only remove the class in the specific `box` that contains the radio
        $('li.monthSlider--active').removeClass('monthSlider--active');
        $(this).closest('.form-check').addClass('monthSlider--active');
      });

      //change colour when radio is selected
  $('#radioMonthResults input:radio').change(function() {
    // Only remove the class in the specific `box` that contains the radio
    $('li.monthSlider--activeR').removeClass('monthSlider--activeR');
    $(this).closest('.form-check').addClass('monthSlider--activeR');
  });

    // Custom checkbox for Bonus Bet Toggle Button
    $('.checkBonus input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("playGameButtons--toggleBtn");
        } else {
            $(this).parent().removeClass("playGameButtons--toggleBtn");
        }
    });

    // Custom checkbox for Keno Number
    $('#checkKenonumber input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("activeKenoNum");
        } else {
            $(this).parent().removeClass("activeKenoNum");
        }
    });   

    // Custom checkbox for Supernumbers
    $('#checkSupernumber input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("activeSupernumber");
        } else {
            $(this).parent().removeClass("activeSupernumber");
        }
    });
    
    // Custom checkbox for Powerballs
    $('#checkPowerball input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("activePowerball");
        } else {
            $(this).parent().removeClass("activePowerball");
        }
    });
    
    // Custom checkbox for Powerplay Toggle Button
    $('.checkPowerplay input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("lotteryGames--toggleBtn");
        } else {
            $(this).parent().removeClass("lotteryGames--toggleBtn");
        }
    });
    
    // Toggle Button for Insurance
    $('.checkInsurance input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("gameResults--toggleBtn");
        } else {
            $(this).parent().removeClass("gameResults--toggleBtn");
        }
    });
    
    // File Upload
    $('#file-upload1').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload1')[0].files[0].name;
        $(this).prev('label').text(file);
      });
      
      $('#file-upload2').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#file-upload2')[0].files[0].name;
        $(this).prev('label').text(file);
      });

});


// Sidebar Toggle
 function openSidebar() {
    document.getElementById("sidebar").style.right = "0";
}        
function closeSidebar() {
    document.getElementById("sidebar").style.right = "-100%";
}

 // Increment and Decrement for Keno Page
var count = 10;
document.getElementById("countings").innerText = count + " Numbers";
//creation of increment function
function increments() {
    count = count + 1;
document.getElementById("countings").innerText = count + " Numbers";
}
//creation of decrement function
function decrements() {
    if(count > 0){
    count = count - 1;
document.getElementById("countings").innerText = count + " Numbers";
}
}