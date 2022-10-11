const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(job) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Manager<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p>Office Number: ${job.office}</p>
        </div>
        `
        return managerHtml
    });

    const engineer = teamData.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Engineer<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
        </div>
        `
        return engineerHtml
    })

    const intern = teamData.intern.map(function(job) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
            <h2>${job.name}</h2>
            <h4>Intern<h4>
            <p>ID: ${job.id}</p>
            <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
            <p> School: ${job.school}</p>
        </div>
        `
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>
        <body>
            <div class ="container-fluid">
                <div class = "row">
                    <div class = "col-12 jumbotron mb-3 team-heading bg-danger">
                        <h1 class= "text-center text-white">My Team</h1>
                    </div>
                </div>
            </div> 
            <div class="container">
                <div class="row">
                    <div class= "row team-area col-12 d-flex justify content-center">
                        ${generateCards(templateData)}
                    </div>
                </div>
            </div>
        </body>  
        `
}



