const checkboxes = document.getElementsByClassName('checkbox-exclusive');

for (let i=0; i<checkboxes.length; i++) {
    const checkbox = checkboxes.item(i);
    console.log(checkbox);

    checkbox.onchange = () => {
        if (checkbox.checked) {
            for (let j=0; j<checkboxes.length; j++) {
                if (j == i) continue;
                checkboxes.item(j).checked = false;
            }
        }
    }
}