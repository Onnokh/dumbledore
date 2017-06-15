

//FUNCTIONS

function Dumble(settings){

    //alert(settings.series.isArray);

    if(typeof settings.series.isArray !== 'string') {

        var title = settings.series[Math.floor(Math.random() * settings.series.length)];

    } else {

        var title =  settings.series;
    }

    if (settings.target) {
        target = settings.target;
    }

    if (settings.random) {
        random =  settings.random;
    }


    console.log(title);




    var regData = new FormData();
    regData.append('title', title);
    regData.append('target', target);
    regData.append('random', random);



    var ajax = new XMLHttpRequest();;
    ajax.addEventListener("load", getSpoilerE, false);
    ajax.open("POST", "http://dumbledoredies.eu/getSpoiler.php", true);
    ajax.send(regData);

    function getSpoilerE(event){

     //   alert(event.target.responseText);


        var json = JSON.parse(event.target.responseText);


        document.getElementById(target).innerHTML += '<div style="background-image:url(' + json.image + ')" class="image"/>';
        document.getElementById(target).innerHTML += '<h1 class="title">' + json.title + '</h1>';
        document.getElementById(target).innerHTML += '<i class="episode"> In episode: ' + json.episode + '</i>';
        document.getElementById(target).innerHTML += '<p class="description">' + json.description + '</p>';



    }


// SETTINGS IN HTML (MEERDERE SERIES MEEGEVEN)

    // REFRESH BUTTON maken
}