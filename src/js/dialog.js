$dialogs = $(".dialog-section");
$firstDialog = $("#dialogSection :nth-child(1)");
$nextDialogLinks = $('.next-dialog:not(.disabled)');
$prevDialogLinks = $('.prev-dialog:not(.disabled)')

$dialogs.hide();
$firstDialog.show();

$nextDialogLinks.on("click", function() {
    nextDialog($(this).parents(".dialog-section"));
});
$prevDialogLinks.on("click", function() {
    prevDialog($(this).parents(".dialog-section"));
});

function nextDialog($currentDialog) {
    $currentDialog.hide();
    $currentDialog.next().show();
}

function prevDialog($currentDialog) {
    $currentDialog.hide();
    $currentDialog.prev().show();
}