var redirectTo = "";
$(function() {
    $(document).on('click', '.submit', function(e) {
        location.href = redirectTo;
    });
});
