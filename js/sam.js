function makeUser(name) {
    return {
        name: name,
    };
}

let participants = [];

if(localStorage.getItem('fighters') == null){
    participants = [];
}else{
    participants =  JSON.parse(localStorage.getItem('fighters'));
   //-----------^parse the item by getting---^--stored item
}

$(document).ready(function (name) {
    $('.form-button_add').click(function (event) {
        event.preventDefault();

        let person = makeUser(document.querySelector('.form-input').value);
        participants.push(person);
        localStorage.setItem('fighters', JSON.stringify(participants));

        // let item = JSON.parse(localStorage.getItem('fighters'));
        // console.log(participants[0].name);

        console.log(participants);
        let str = '';
        for (let i = 0; i < participants.length; i++) {
            let charObj = participants[i];
            let num = i + 1;
            console.log(participants[i]);

            for (key in participants[i]) {
                let tbody = '<tr> <td>' + num + '</td> <td>' + charObj[key] + '</td> </tr>';
                str += tbody;
                
                // console.log(charObj[key]);
                document.querySelector(".main-screen__participants").innerHTML = str;
            }
            // str += i + ' - ' + participants[i] + '<br>'; 

            // let caption = '<caption>Бойцы турнира Atira Ruthenia "Batalia de Ruthenia"</caption>';
            // let thead = '<thead> <tr> <th>Номер</th> <th>Имя бойца</th> </tr> </thead>';
        }
    });
});
localStorage.clear();

