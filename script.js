//Nav list//
navToggle = document.querySelector('.header-button');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

//Advocacy list//

const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

btnCreate.addEventListener('click', () => {												 
  const input = document.querySelector('.input-main');
	const list = document.querySelector('.ul');

	list.insertAdjacentHTML(
		'afterbegin',
		`<li class="a-li">${input.value}</li>`
	);
  input.value = '';
});

btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');

	if (listContainer.style.display === 'none') {
		btnToggle.textContent = 'Hide List';
		listContainer.removeAttribute('style');
	} else {
		btnToggle.textContent = 'Show List';
		listContainer.style.display = 'none'; 	
	}		
});

btnRemove.addEventListener('click', () => {
	const lastItem = document.querySelector('.a-li:first-child');												lastItem.remove(); 
});
