

var gohome = document.getElementById("gohome");
var goabout = document.getElementById("goabout");
var goservice = document.getElementById("goservice");

if (gohome != null) {
    gohome.addEventListener("click", (route)=>{
        console.log("Go home..")
        route.preventDefault();
        elevator.route({
            method: "GET",
            meta_loader: true,
            content_url: "components/index-component.php",
            component: "#root",
            preloader: '',
            error_handler: "error",
            http_url_change: true,
            http_url: "index.php"
         });
    })
}

if (goabout != null) {
    goabout.addEventListener("click", (route)=>{
        console.log("Go about..")
        route.preventDefault();
        elevator.route({
            method: "GET",
            meta_loader: true,
            content_url: "components/about-component.php",
            component: "#root",
            preloader: '',
            error_handler: "error",
            http_url_change: true,
            http_url: "about.php"
         });
    })
}

if (goservice != null) {
    goservice.addEventListener("click", (route)=>{
        console.log("Go service..")
        route.preventDefault();
        elevator.route({
            method: "GET",
            meta_loader: true,
            content_url: "components/service-component.php",
            component: "#root",
            preloader: '',
            error_handler: "error",
            http_url_change: true,
            http_url: "service.php"
         });
    })
}