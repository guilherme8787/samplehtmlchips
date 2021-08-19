document.getElementById('chips-input').onkeyup = function(e){
    if(e.code == 'Space'){
        var str = document.getElementById('chips-input').value;
        backSplit(str);
    }
}

var inputedData = [];
var idsGerados = [];

function backSplit(str){
    str = str.split(' ');
    if(str.length > 0){
        str.forEach(val => {
            if(val.trim().length > 0){
                if (inputedData.indexOf(val) == -1) {
                    geraid = true;
                    id = 'id-unico-' + Math.floor(Math.random() * 10000) + 1;
                    while(geraid){
                        if (idsGerados.indexOf(id) == -1) {
                            geraid = false;
                        } else {
                            geraid = true;
                            id = 'id-unico-' + Math.floor(Math.random() * 10000) + 1;
                        }
                    }
                    var text = `
                        <span id="`+id+`">
                            <span class="badge badge-secondary">` + val + ` <b onclick="removeChip('`+id+`')" style="cursor: pointer;">x</b></span>
                            <input type="hidden" value="` + val + `" />
                        </span>
                        `;
                    document.getElementById('unique-chips').insertAdjacentHTML('beforeend', text);
                }
            }
            idsGerados.push(id);
            inputedData.push(val);
        });
    }
    document.getElementById('chips-input').value = '';
}

function removeChip(id){
    document.getElementById(id).remove();
}