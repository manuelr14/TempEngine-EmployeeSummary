


function generatinghtml(employeearray){
let templategenerated = `<DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>team</title>
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style type="text/css">
#my-team {
  text-align: center;
  padding: 20px;
  color: white;
  font-size: 35px;
}

#header-myteam {
  border: solid;
  width: auto;
  padding: 0px;
  background: rgb(197,33,33);
}

#inside-info {
  font-size: 20px;
  border: solid;
  border-width: 1px;
  padding: 10px;
}

#employee-card {
  margin-top: 100px;
}
</style>

</head>

<body>
    <div class="container">
        <div class="row" id="header-myteam" style="height: 97px;">
            <div class="col">
                <h1 id="my-team">My Team</h1>
            </div>
        </div>
    </div> <!--part 1/3 employee info below -->`

    employeearray.forEach(element => {
        let infoadd=" ";
        switch(element.tittle){
            case "Manager":
                infoadd = managerCard(element);
                break;
            case "Engineer":
                infoadd= engineerCard(element);
                break;
            case "Intern":
                infoadd = internCard(element);
                break;
                
        }
            templategenerated += infoadd;
    });

templategenerated += `  <!--part 3/3 employee info over-->

</div>
</div>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/bootstrap/js/bootstrap.min.js"></script>
</body>

</html>`

return templategenerated;  

}


   
function managerCard(manager){

return  `
<div class="container">
<div class="row">
    <div class="col-4">
        <div class="card manager" id="employee-card">
            <div class="card-body">
                <h4 class="card-title">Name: ${manager.name}</h4>
                <h6 class="text-muted card-subtitle mb-2">Tittle: ${manager.tittle}</h6>
                <h1 id="inside-info">ID:${manager.id}</h1>
                <h1 id="inside-info">Email:${manager.email}</h1>
                <h1 id="inside-info">Office Number:${manager.office}</h1>
            </div>
        </div>
    </div>`




}

function engineerCard(engineer){
return `
<div class="col-4">
<div class="card engineer" id="employee-card">
    <div class="card-body">
        <h4 class="card-title">Name: ${engineer.name}</h4>
        <h6 class="text-muted card-subtitle mb-2">Tittle: ${engineer.tittle}</h6>
        <h1 id="inside-info">ID: ${engineer.id}</h1>
        <h1 id="inside-info">Email: ${engineer.email}</h1>
        <h1 id="inside-info">Github: ${engineer.github}</h1>
    </div>
</div>
</div>`



}

function internCard(intern){

return `
<div class="col-4">
<div class="card intern" id="employee-card">
    <div class="card-body">
        <h4 class="card-title">Name: ${intern.name}</h4>
        <h6 class="text-muted card-subtitle mb-2">Tittle: ${intern.tittle}</h6>
        <h1 id="inside-info">ID: ${intern.id}</h1>
        <h1 id="inside-info">Email: ${intern.email}</h1>
        <h1 id="inside-info">School: ${intern.school}</h1>
    </div>
</div>
</div>`

}


module.exports = {generatinghtml: generatinghtml};
   
   
            
            
