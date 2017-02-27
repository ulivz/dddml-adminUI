jQuery.validator.setDefaults({
    // errorPlacement: function(error, element) {
    //     // element.parents('.form-group').addClass('has-error');
    //     error.insertAfter(element);console.log(1);
    // },
    highlight: function (element) {
        // if($(element).attr('type') == 'radio'){
        //     $(element).parents('checkbox').append()
        // }
        $(element).parents('.form-group').addClass('has-error');
    },
    success: function (label) {
        label.parents('.form-group').removeClass('has-error');
    }
});

var $validate = $(".validate-form").validate();

$('input:radio').on('ifChanged', function(event){
    $validate.element(this);
});

$('input:checkbox').on('switchChange.bootstrapSwitch', function () {
    $validate.element(this);
});

$(".select2").on('change', function () {
    $validate.element(this);
});