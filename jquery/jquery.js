 $(document).ready(function () {
            $(window).scroll(function () {
               var uzaklik= $(window).scrollTop();
                
                if(uzaklik>590)
                    {
                        $("nav").removeClass("old-nav").addClass("new-nav");
                    }
                else{
                    $("nav").removeClass("new-nav").addClass("old-nav");
                }

                
            });
     
        });