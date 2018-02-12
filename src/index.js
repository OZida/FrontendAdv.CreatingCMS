// var newDiv = document.createElement('div');
// 	newDiv.id = 'questionary';
// 	newDiv.style.backgroundColor = '#8FBC8F';
// 	newDiv.style.width = '980px';
// 	newDiv.style.height = '500px';
// 	newDiv.style.margin = '0 auto';
// 	newDiv.style.fontSize = '19px';
// 	document.body.appendChild(newDiv);

// var newTitle = document.createElement('h1');
// 	newTitle.innerHTML = 'Questionary';
// 	newTitle.style.margin = '0';
// 	newTitle.style.padding = '40px 0 40px';
// 	newTitle.style.textAlign = 'center';
// 	document.getElementById("questionary").appendChild(newTitle);

// var fotoStudent = document.createElement('img');
// 	fotoStudent.setAttribute('src', 'img/foto.jpg');
// 	fotoStudent.style.width = '160px';
// 	fotoStudent.style.height = '220px';
// 	fotoStudent.style.margin = '0 50px 15px 50px';
// 	fotoStudent.style.float = 'left';
// 	document.getElementById("questionary").appendChild(fotoStudent);

// var nameStudent = document.createElement('p');
// 	nameStudent.innerHTML = '<b> Student: </b> Kozlenko Juliya <br>';
// 	nameStudent.style.textAlign = 'left';
// 	nameStudent.style.margin = '0 15px 30px';
// 	document.getElementById("questionary").appendChild(nameStudent);

// var aboutYourself = document.createElement('ul');
// 	aboutYourself.id = 'aboutYourself';	
// 	aboutYourself.innerHTML = '<b> About Yourself: </b> graduated with honors:';
// 	document.getElementById("questionary").appendChild(aboutYourself);

// var courseFirst = document.createElement('li');	
// 	courseFirst.innerHTML = 'HTML&CSS (base)'; 
// 	courseFirst.style.margin = '15px 0 0 240px';
// 	courseFirst.style.textDecoration = 'underline';
// 	document.getElementById('aboutYourself').appendChild(courseFirst);

// var courseSecond = document.createElement('li');	
// 	courseSecond.innerHTML = 'JavaScript (base)';
// 	courseSecond.style.marginLeft = '240px';
// 	courseSecond.style.textDecoration = 'underline'; 
// 	document.getElementById('aboutYourself').appendChild(courseSecond);

// var courseThird = document.createElement('li');	
// 	courseThird.innerHTML = 'JavaScript (adv)';
// 	courseThird.style.marginLeft = '240px';
// 	courseThird.style.textDecoration = 'underline';
// 	document.getElementById('aboutYourself').appendChild(courseThird);

// var courseFourth = document.createElement('li');	
// 	courseFourth.innerHTML = 'JQuery'; 
// 	courseFourth.style.marginLeft = '240px';
// 	courseFourth.style.textDecoration = 'underline';
// 	document.getElementById('aboutYourself').appendChild(courseFourth);
import './styles/styles.scss';
import ctrl from './controllers/builderCtrl.js';
ctrl.render();