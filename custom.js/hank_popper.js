$( document ).ready(function() {
    var modal_triggered = false
    alert("hi")
    return $( window ).scroll(function() {
        var height = $(window).scrollTop();
        //alert("bla")
        if (height > 30 && !(modal_triggered )) {
            modal_triggered = true;
            return $('#hank').modal();
        }
    })
}); // modal trigger
