"use strict"

//! MENU BURGER 

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// let mainHeaderItems = document.querySelectorAll('.main__header__items');
// for (let index = 0; index < mainHeaderItems.length; index++) {
// 	const mainHeaderItem = mainHeaderItems[index];
// 	mainHeaderItem.classList.remove('_active');
// 	mainHeaderItem.addEventListener("click", function (e) {
// 		mainHeaderItem.classList.add('_active');
// 		mainHeaderItem.addEventListener("click" , function(e){
// 			mainHeaderItem.classList.remove('_active');
// 		});
// 	});
// }
const hotelBlock = document.getElementById('hotel');
const blockHotel = document.querySelector('.forms__hotel');
const formFlight = document.querySelector('.forms__flight');
const flightBlock = document.getElementById('flight');
const mainHeaderItems = document.querySelectorAll('.main__header__items');
mainHeaderItems.forEach(item => {
	item.addEventListener('click', (e) => {
		mainHeaderItems.forEach(el => { el.classList.remove('_active'); });
		item.classList.add('_active');
	})
})



