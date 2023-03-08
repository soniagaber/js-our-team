let membri=[
{
    nome:"Wayne Barnett",
    ruolo:"Founder & CEO",
    foto:"wayne-barnett-founder-ceo.jpg"
},
{
    nome:"Angela Caroll",
    ruolo:"Chief Editor",
    foto:"angela-caroll-chief-editor.jpg"
},
{
    nome:"Walter Gordon",
    ruolo:"Office Manager",
    foto:"walter-gordon-office-manager.jpg"
},
{
    nome:"Angela Lopez",
    ruolo:"Social Media Manager",
    foto:"angela-lopez-social-media-manager.jpg"
},
{
    nome:"Scott Estrada",
    ruolo:"Developer",
    foto:"scott-estrada-developer.jpg"
},
{
    nome:"Barbara Ramos",
    ruolo:"Graphic Designer",
    foto:"barbara-ramos-graphic-designer.jpg"
}
];

for(let i=0; i<membri.length; i++){
    console.log(membri[i].nome);
    console.log(membri[i].ruolo);
    console.log(membri[i].foto);
    console.log("--------------------------------")
}

let containerEl= document.getElementById("container");

for(let l=0; l<membri.length; l++){
    let liEl=document.createElement('li');
    liEl.innerHTML=(`${membri[l].nome}, ${membri[l].ruolo}, ${membri[l].foto}`);
    containerEl.append(liEl);
}