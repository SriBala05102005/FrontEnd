let Travelsname = new Array("GT","soma travel", "rakkshi thattuvadaiset", "srs")
let Adding=()=>{
    let newvalue = document.getElementById('Travels').value;
    Travelsname.push(newvalue);
    alert(newvalue + "this travels is added successfully..!")
    printall()
}
var printall=()=>{
    let temp=" "
    Travelsname.map((getting)=>
    {
        temp += "<tr><td><ul><li>" + getting + "</li></ul></td></tr>";
    })
    document.getElementById('list').innerHTML = "<table><thead bgcolor='red'><tr><th>Travels List</th></tr></thead><tbody bgcolor='pink' align='center'>"+ temp +"</tbody></table>";
}
let updating=()=>{
    let updateindex = document.getElementById('Travels').value;
    let newvalue= prompt("please enter your update Travel name" + Travelsname[updateindex])
    Travelsname[updateindex]=newvalue;
    printall();
}    
var removing=() =>{
    let delete_value = document.getElementById('Travels').value;
    Travelsname=Travelsname.filter((getting)=>
    {
        if(getting!==delete_value)
        {
            return getting;
        }
    })
    Travelsname.map((get)=>{
        console.log(get)
    });
    printall();
}    
function finding(){
    let searchingvalue = document.getElementById('Travels').value;
    for(i=0;i<Travelsname.length;i++){
        if(Travelsname[i]==searchingvalue){
            return i;
        }
    }
}    
function Findfirst(){
    for(i=0;i<Travelsname.length;i++){
        alert("Travels name is :"+ Travelsname[i]);
        break;
    }
}    