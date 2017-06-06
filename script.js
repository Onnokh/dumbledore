//SETTINGS
var target = 'spoiler'; //targetdiv
var random = true; //random spoiler of maar 1
var series = ["Suits", "Game of Thrones", "Breaking Bad"]; // uit welke series mogen er spoilers getoond worden


//FUNCTIONS
function getSpoiler(title){
    console.log(title);
    if(title = 'undefined') {

        function getRandomSerie() {
            return series[Math.floor(Math.random() * series.length)];
        }

        title = getRandomSerie();
        console.log(title);

    }


    var regData = new FormData();
    regData.append('title', title);
    regData.append('target', target);
    regData.append('random', random);



    var ajax = new XMLHttpRequest();;
    ajax.addEventListener("load", getSpoilerE, false);
    ajax.open("POST", "http://dumbledoredies.eu/getSpoiler.php", true);
    ajax.send(regData);

    function getSpoilerE(event){


        var json = JSON.parse(event.target.responseText);


        document.getElementById(target).innerHTML += '<div style="background-image:url(' + json.image + ')" class="image"/>';
        document.getElementById(target).innerHTML += '<h1 class="title">' + json.title + '</h1>';
        document.getElementById(target).innerHTML += '<i class="episode"> In episode: ' + json.episode + '</i>';
        document.getElementById(target).innerHTML += '<p class="description">' + json.description + '</p>';



    }


// SETTINGS IN HTML (MEERDERE SERIES MEEGEVEN)

    // REFRESH BUTTON maken
}