$('.carousel').carousel();
$('.dropdown-toggle').dropdown()


// dropdown code
$(".btnn").click(function() {
    $(".myText").toggle();  
  });
  $(".btnn1").click(function() {
    $(".myText1").toggle();  
  });
  $(".btnn2").click(function() {
    $(".myText2").toggle();  
  });

$(".btnnn").click(function() {
    $(".Text").toggle(); 
  });
// select 1 item at a time
  jQuery(document).ready(function(){
    jQuery('.fast-1').click(function(event){
        jQuery('.active-tab').removeClass('active-tab');
        jQuery(this).addClass('active-tab');
        event.preventDefault();
    });
});
jQuery(document).ready(function(){
    jQuery('.fast-2').click(function(event){
        jQuery('.active-t').removeClass('active-t');
        jQuery(this).addClass('active-t');
        event.preventDefault();
    });
});

jQuery(document).ready(function(){
  jQuery('.fast-3').click(function(event){
      jQuery('.active-3').removeClass('active-3');
      jQuery(this).addClass('active-3');
      event.preventDefault();
  });
});

jQuery(document).ready(function(){
  jQuery('.fast-4').click(function(event){
      jQuery('.active-4').removeClass('active-4');
      jQuery(this).addClass('active-4');
      event.preventDefault();
  });
});


 $(window).load(function(){
        $(".Text").css("display","none");
     });








//toggleClass("dsplay");
// filter code
        $(document).ready(function(){
            $(".filter-country").click(function(){
                var name = $(this).attr("data-filter");
                if(name == "All"){
                    $(".filter").fadeIn(50);
                }
                else{
                    $(".filter").not("."+name).fadeOut("10");
                    $(".filter").filter("."+name).fadeIn("10");
                }
            })
        })
// querySelectorAll
        $(document).ready(function(){
            $(".bnt").click(function(){
                var name = $(this).attr("data-filter");
                if(name == "All"){
                    $(".filterr").fadeIn(50);
                }
                else{
                    $(".filterr").not("."+name).fadeOut("10");
                    $(".filterr").filter("."+name).fadeIn("10");
                }
            })
        })


var selected_country = $('#selected_country');
var selected_field = $('#selected_field');
var selected_opportunity = $('#selected_opportunity');
var selected_region = $('#selected_career');

function filterToggle(type,cls){
  if(type == 'country'){
    selected_country.val(cls);
  }
  else if(type == 'field'){
    selected_field.val(cls);
  }
  else if(type == 'opportunity'){
    selected_field.val(cls);
  }
  else if(type == 'career'){
    selected_field.val(cls);
  }

  if(selected_country.val() == '' || selected_field.val() == '' || selected_opportunity.val() == '' || selected_career.val() == ''){
    $('.mix').hide().filter('.'+cls).fadeIn("10");
  }
  else{
    $('.mix').hide().filter('.'+selected_country.val()).filter('.'+selected_field.val()).filter('.'+selected_opportunity.val())
    .filter('.'+selected_opportunity.val()).fadeIn("10").filter('.'+selected_career.val()).fadeIn("10");
  }
}

     
// load more button
  var numberOfItems=3;
  $('#myList .col-md-4:lt('+numberOfItems+')').fadeIn();


  $('#loadMore').click(function () {
      numberOfItems = numberOfItems+6;
      $('#myList .col-md-4:lt('+numberOfItems+')').fadeIn();
              $('#loadMore').css("display", "none");
      $('#showLess').css("display", "block");
  });

  $('#showLess').click(function () {
      numberOfItems= numberOfItems-6;
      $('#myList .col-md-4').not(':lt('+numberOfItems+')').fadeOut();
      $('#loadMore').css("display", "block");
      $('#showLess').css("display", "none");
  });



  var Items=8;
  $('#List .cards:lt('+Items+')').fadeIn();

  $('.showmore').click(function () {
      Items = Items+16;
      $('#List .cards:lt('+Items+')').fadeIn();
              $('.showmore').css("display", "none");
      $('.showless').css("display", "block");
  });

  $('.showless').click(function () {
      Items= Items-8;
      $('#List .cards').not(':lt('+Items+')').fadeOut();
      $('.showmore').css("display", "block");
      $('.showless').css("display", "none");
  });

















  // var numberOfItems=8;
  // $('#List .cards:lt('+numberOfItems+')').fadeIn();
  // $('.more').click(function () {
  //     numberOfItems = numberOfItems+6;
  //     $('#List .cards:lt('+numberOfItems+')').fadeIn();
  //             $('.more').css("display", "none");
  //     $('.less').css("display", "block");
  // });

  // $('#showLess').click(function () {
  //     numberOfItems= numberOfItems-6;
  //     $('#List .cards').not(':lt('+numberOfItems+')').fadeOut();
  //     $('.more').css("display", "block");
  //     $('.less').css("display", "none");
  // });

// // load more function on filters
//   $(document).ready(function () {
//     $('#List .cards:lt(8)').fadeIn();
//     $('#showLess').fadeOut();
//     var items = 8;
//     var shown =  4;
//     $('#loadMore').click(function () {
//         $('#showLess').fadeIn();
//         shown = $('#List .cards:visible').length+8;
//         if(shown< items) {
//           $('#List .cards:lt('+shown+')').fadeIn(300);
//         } else {
//           $('#List .cards:lt('+items+')').fadeIn(300);
//           $('#loadMore').fadeIn();
//         }
//     });
//     $('#showLess').click(function () {
//         $('#List .cards').not(':lt(8)').fadeOut(600);
//         $('#loadMore').fadeIn();
//         $('#showLess').fadeOut();
//     });
// });

// var containerEl = document.querySelector('.myCard');
// var mixer = mixitup(containerEl, {
// load: {
//   sort: 'pamba:asc'
// }
// });

// document.multiselect('#testSelect1')
// .setCheckBoxClick("checkboxAll", function(target, args) {
//   console.log("Checkbox 'Select All' was clicked and got value ", args.checked);
// })
// .setCheckBoxClick("1", function(target, args) {
//   console.log("Checkbox for item with value '1' was clicked and got value ", args.checked);
// });

// function enable() {
// document.multiselect('#testSelect1').setIsEnabled(true);
// }

// function disable() {
// document.multiselect('#testSelect1').setIsEnabled(false);
// }