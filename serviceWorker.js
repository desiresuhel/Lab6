var cacheName = 'hello-world-pwa';
var filesToCache = [
'/',
'/index.html',
'/css/style.css',
'/js/main.js'
];

self.addEventListener('install',function(e){
	e.waitUntil(caches.open(cacheName).then(function(cache){
		return cache.addAll(filesToCache);
	})
	);
	self.skipWaiting();
});

self.addEventListener('fetch',function(e){
	e.respondWith(caches.match(e.request).then(function(response){
		return response || fetch(e.request);
	})
	);
	
});

self.addEventListener('notificationclick',function(event){

	event.notification.close();

	if(event.action === 'go'){

		console.log('YaY');
	}
	else {

		console.log('NaY')
	}

});