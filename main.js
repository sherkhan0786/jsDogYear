
function convert (event) {
    event.preventDefault();

    let dogAge = 1;
    let humanAge = 0;
    
    humanAge = document.getElementById('humanAge').value;
        // Logic if human Age is less than 21
        if (humanAge <= 21){
            dogAge = humanAge/10.5;
            dA = parseInt(dogAge);
            dogMonth = parseInt((dogAge - dA) * 12);
            console.log(dA , dogMonth);
            document.getElementById('result').innerHTML = "your " + "<span style='color:red'>" +humanAge + "</span>" + " years(s) old would have " + "<span style='color:red; background:grey'>" +dA + " year "+ dogMonth+ " month(s) " +"</span>" +" year(s) if you were a Dog";
        }
        else
        {
            // Logic for age is greater than 21
            dogAge = (humanAge - 21)/4 + 2;
            console.log(dogAge);
            dA = parseInt(dogAge);
            dogMonth = parseInt((dogAge - dA) * 12);
            console.log(dA , dogMonth);
            document.getElementById('result').innerHTML = "your " + "<span style='color:red'>" +humanAge + "</span>" + " years(s) old would have " + "<span style='color:red; background:grey'>" +dA + " year "+ dogMonth+ " month(s) " +"</span>" + " year(s) if you were a Dog";
        }
    // On submit Background Gif
    document.body.style.backgroundImage = "url('dog1.gif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    
}