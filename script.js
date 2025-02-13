// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            const container = document.getElementById("container");
            let index = 0;
            
            json.sort((a,b) => (a.hoursInSpace>b.hoursInSpace) ? 1 : -1)
            for(index = 0;index<json.length;index++){
            container.innerHTML += 
            `<div class="astronaut">
                <div class = "bio">
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                    <u1>
                       <li>Hours in space: ${json[index].hoursInSpace}</li>
                       <li>Active: ${json[index].active}</li>
                       <li>Skils: ${json[index].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[index].picture}></img>
            `
            }
        })

    })
})
    
