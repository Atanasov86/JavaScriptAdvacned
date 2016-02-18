pop('success', 'Great Success!!', 'Borat smiles at you.');
pop('info', 'Information', 'You are on a rock flying through space.');
pop('error', '404', 'Does not compute.');
function redirect() {
    window.location = 'https://www.softuni.bg';
}

pop('warning','Warning', 'Nuclear launch detected.', redirect);