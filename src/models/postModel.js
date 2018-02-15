// export default {
// 	data: 	[{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'}, 
// 				{tag:'p', body:'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'qui est esse'}, 
// 				{tag:'p', body:'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'}]},	
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'ea molestias quasi exercitationem repellat qui ipsa sit aut'}, 
// 				{tag:'p', body:'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'eum et est occaecati'}, 
// 				{tag:'p', body:'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'nesciunt quas odio'}, 
// 				{tag:'p', body:'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'dolorem eum magni eos aperiam quia'}, 
// 				{tag:'p', body:'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'magnam facilis autem'}, 
// 				{tag:'p', body:'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'dolorem dolore est ipsam'}, 
// 				{tag:'p', body:'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'}]},
// 			{tag:"div", class:'square', body:
// 				[{tag: 'h3', body:'nesciunt iure omnis dolorem tempora et accusantium'}, 
// 				{tag:'p', body:'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'}]},
// 			{tag:"div", class:'rectangle', body:
// 				[{tag: 'h3', body:'optio molestias id quia eum'}, 
// 				{tag:'p', body:'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'}]},
// 			{tag:"div", class:'rectangle', body:
// 				[{tag: 'h3', body:'et ea vero quia laudantium autem'}, 
// 				{tag:'p', body:'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'}]}
// 			]
// }
let store = {
	data: [],
	init: function(url = 'https://jsonplaceholder.typicode.com/posts'){
		return fetch(url)
		.then((r) => r.json())
		.then(json => store.data = json);
	}
}
export default store;