var Cinema = {
    name:"Tbilisi Cinema",
    Adress: "Rustaveli street",
   
    languages: ["Georgian" , "English" , "Italian"],
   Movies: [
    {name:"The Shawshank Redemption", Directedby:"Frank Darabont", IMDb:"IMDb 9.5"},
    {name:"The Godfather", Directedby:" Francis Ford Coppola ", IMDb:"IMDb 9.2"},
    {name:"The Dark Knight", Directedby:"Christopher Nolan ", IMDb:"IMDb 9.0"},
]
};



document.getElementById("Tbilisi").innerHTML=Cinema.name;

for(var i=0; i<Cinema.languages.length; i++)

    document.getElementById("lang").innerHTML+=Cinema.languages[i]+"<br>";

    

document.getElementById("movie").innerHTML="Name:"+Cinema.Movies[0].name+"<br>"+"Directed By:"+Cinema.Movies[0].Directedby+"<br>"+"IMDb ranking :"+Cinema.Movies[0].IMDb;
document.getElementById("movie1").innerHTML="Name:"+Cinema.Movies[1].name+"<br>"+"Directed By:"+Cinema.Movies[1].Directedby+"<br>"+"IMDb ranking :"+Cinema.Movies[1].IMDb;
document.getElementById("movie2").innerHTML="Name:"+Cinema.Movies[2].name+"<br>"+"Directed By:"+Cinema.Movies[2].Directedby+"<br>"+"IMDb ranking :"+Cinema.Movies[2].IMDb;