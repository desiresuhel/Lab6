window.onload = () => {
	'use strict';

	if('serviceWorker' in navigator) {
		navigator.serviceWorker
		.register('./serviceWorker.js')
	}
}

//This function is called when button on the index page is clicked.
function displayNotification() {
	//log in the console, the status of our permission whether its granted or not.
	Notification.requestPermission(status =>{
		console.log('notification permission status: ',status);
	});

	//check if permission = granted then we will show notification.
	if(Notification.permission === 'granted'){
		navigator.serviceWorker.getRegistration()
		.then(reg =>{
			reg.showNotification('Hello World!', options);
		});
	}
}

const options ={
	body:'This Notification Body',
	icon:'images/hello-icon-512.png',
	vibrate: [100,50,100],
	badge:'http://vanarragon.ca/nimage/icon.png',
	data:{primarykey:1}, //lets us identify the notifications
	actions: [
	{action:'go', title:'Go to the site', icon:'http://vanarragon.ca/nimage/icon.png'},

	{action:'close', title:'No Thanks', icon:'http://vanarragon.ca/nimage/icon.png'},
]
};