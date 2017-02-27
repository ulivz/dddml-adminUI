function checkedRow($row) {
    $row.addClass('bg-yellow');
    $row.find('.table-row-checkbox').prop("checked", 'true');
}

function uncheckedRow($row) {
    $row.removeClass('bg-yellow');
    $row.find('.table-row-checkbox').removeAttr("checked");
}

function toggleChecked($row) {
    if ($row.hasClass('bg-yellow')) {
        uncheckedRow($row);
    } else {
        checkedRow($row);
    }

    if (isAllChecked()) {
        $('.select-all-checkbox').prop('checked', 'true');
    } else {
        $('.select-all-checkbox').removeAttr("checked");
    }
}

function checkedAll(checked) {
    $('.table-row-checkbox').parents('tr').each(function () {
        if (checked) {
            checkedRow($(this));
        } else {
            uncheckedRow($(this));
        }
    })
}

function isAllChecked() {
    return $('.table-row-checkbox:checked').length == $('.table-row-checkbox').length;
}

function getChecked() {
    var checked = [];
    $('.table-row-checkbox:checked').each(function () {
        checked.push($(this).val());
    });
    return checked;
}

var $checkbox = $('.table-row-checkbox');
var $row = $checkbox.parents('tr');

$row.on('click', function () {
    toggleChecked($(this));
});

$('.select-all-checkbox').on('change', function () {
    checkedAll($(this).prop('checked'));
});