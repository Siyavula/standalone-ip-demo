jQuery(window).load(function () {
    
    // Run when clicked on dash-toggle
    $('.dash-toggle').on('click', function(){
        var id = $(this).attr('id');
        // get number of div clicked on
        var number = id.charAt(id.length-1);
        var dashes= ['dash-1', 'dash-2', 'dash-2'];

        // hide all the dashes except the one that was clicked on
        dashclicked = 'dash-' + number;
        $('.dash').each(function(){
            $(this).hide();    
        });

        $('#'+dashclicked).show();
    });

    // show all the dashes when window is wider than 991px
    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() >= 991) {
          $('.dash').each(function(){
              $(this).show();    
          });
        }
        
        // if window is narrower than 991, only show the first one
        if (win.width() < 991) {
            // if all the dashes are visble, only make the first one visible
            if ($('.dash:visible').length){
                $('.dash').each(function(){
                    $(this).hide();    
                });
                //only show the first one
                $('#dash-1').show();
            }
        }
    });


});
