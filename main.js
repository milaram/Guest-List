names_in_list = [];






submit()
{
var GuestName = document.getElementById("name1").value;
names_in_list.push(GuestName);
names_in_list.sort();
}





	

function  searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)

    {
        if(s==names_of_people.length[j]){
            found=found+1;
        }
    }

    document.getElementById("p2").innerHTML="name found  "+found+" time/s";
    console.log("found name "+found+" time/s");
}