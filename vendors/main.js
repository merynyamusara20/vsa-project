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

        $(document).ready(function(){
            $(".bnt").click(function(){
                var name = $(this).attr("data-filter");
                if(name == "Alll"){
                    $(".filterr").fadeIn(50);
                }
                else{
                    $(".filterr").not("."+name).fadeOut("10");
                    $(".filterr").filter("."+name).fadeIn("10");
                }
            })
        })
  








        
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


//rotate btn
  $(".rotate").click(function () {
    $(this).toggleClass("down");
})


var containerEl = document.querySelector('.myCards');

var mixer = mixitup(containerEl, {
  load: {
      sort: 'pamba:asc'
  }
});