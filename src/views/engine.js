export default {
	render: function(data) {
		var body = document.getElementsByClassName('general')[0];
		data.forEach(function(el){
			body.appendChild(el);
		})
	}
};
