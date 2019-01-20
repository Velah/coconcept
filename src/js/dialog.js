$dialogs = $(".dialog-section");
$firstDialog = $("[dialog='1']");
$arrows = $(".arrow:not(.disabled)");

$dialogs.hide();
$firstDialog.show();

$arrows.on("click", function() {
    dialogNumber = $(this).parent().parent().attr("dialog");
    thisDialogSelector = "[dialog='" + dialogNumber + "']";

    if ($(this).parent().hasClass("dialog-arrow-back")) {
        dialogNumberToOpen = parseInt(dialogNumber) - 1;
        dialogToOpenSelector = "[dialog='" + dialogNumberToOpen + "']";
        $(thisDialogSelector).hide();
        $(dialogToOpenSelector).show();
    }

    if ($(this).parent().hasClass("dialog-arrow-next")) {
        dialogNumberToOpen = parseInt(dialogNumber) + 1;
        dialogToOpenSelector = "[dialog='" + dialogNumberToOpen + "']";
        $(thisDialogSelector).hide();
        $(dialogToOpenSelector).show();
    }
});