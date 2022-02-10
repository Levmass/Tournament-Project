
var participants = [];
var Fights = []; 

function User(name){
    this.name=name;
    this.points = 0;
}

var userText = document.getElementById('key').addEventListener('click', addnewParticipant);

function addnewParticipant(name)
{
    // var userText = document.getElementById('key');
    var user = Object.create(User.prototype);
    user.name = userText;
    participants.push(user);
    console.log(participants.length);
    //добавляет нового игрока
}
addnewParticipant();

function removeParticipant(name)
{
    //удаление игрока из масива
    for(i=0;i<participants.length;i++)
    {
        var Person = participants[i];
        if(Person.name===name)
        {
            participants.slice(i,1);
            return;
        }

    }
}
