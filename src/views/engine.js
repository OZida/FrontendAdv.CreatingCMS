export default {
	render: function(data) {
		var body = document.getElementsByTagName[0]

		data.forEach(function(el){
		document.body.appendChild(el);
		})
	}
};
