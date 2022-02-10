// var participants = [];
// var Fights = []; 

// function User(name){
//     this.name=name;
//     this.points = 0;
// }

if(localStorage.getItem('fighters') == null){
    var participants = [];
}else{
    participants =  JSON.parse(localStorage.getItem('fighters'));
   //-----------^parse the item by getting---^--stored item
}
function addnewParticipant(name)
{
    participants.push(document.search.key.value);
    localStorage.setItem('fighters', JSON.stringify(participants));
    console.log(participants.length);
    var item = JSON.parse(localStorage.getItem('fighters'));
    console.log(item);
    console.log(participants);
    //добавляет нового игрока
}

// localStorage.clear();


function removeParticipant() {

}