var st, OriginTitile = document.title; 
document.addEventListener("visibilitychange", function () { 
    document.hidden ? (document.title = "Waiting for your return", clearTimeout(st)) : (document.title = OriginTitile, st = setTimeout(function () { document.title = OriginTitile }, 4e3)); 
})