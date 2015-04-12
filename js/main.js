jQuery(document).ready(function(){

    $('#cancelButton').on('click', function(){
       $('form').trigger("reset");
       validator.resetForm();
    });

    var validator = $('#form1').validate({
        messages: {
            inputFirstName: 'Please fill in you first name',
            inputLastName: 'Please fill in you first name',
            inputEmail: {
                required: "Please provide a valid email address",
                email: "Please enter a valid email address"
            },
            inputPassword: 'A password is required'
        },
        submitHandler: function(form) {
            $.ajax({
                url: 'thankyoumessage.json',
                type: "get",
                dataType: "json",
                success: submitted
            });
        }

    });


    var submitted = function (data) {
        $('.updateBackground').show();
        var output = '<h2>' + data.success_message + '</h2>';
        $('#updatePopup').append(output);

    };

    $('.close').click(function(){
        $('.updateBackground').hide();
        $('form').trigger("reset");

    });


});