const CACHE_NAME = "Version-1";
cosnt urlsToCache = ['index.html' ,'offline.html'];

const self = this;

//Install SW
self.addEventListener('install' , (event) => {
    event.waituntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened Cache');

            return cache.addAll(urlsToCache);
        })
    )
}); 


//Listen Request
self.addEventListener('fetch' , (event) => {
    
}); 

//Activated the SW
self.addEventListener('activate ' , (event) => {
    
}); 