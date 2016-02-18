"use strict";

function isChecked (isCheck) {
    document.getElementById('invoice').style.display = 'none';

    if (isCheck) {
        document.getElementById('invoice').style.display = 'block';
    }
}

isChecked();