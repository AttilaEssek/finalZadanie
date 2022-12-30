if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered");
        console.log(registration);
    }).catch(error => {
        console.log("failed");
        console.log(error);
    })
}else{
    console.log("service workers not supported");
}