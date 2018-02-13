import model from '../models/postModel.js';
import view from '../views/engine.js';
// let controller = {
// 	model,
// 	view,
// 	work: function() {
// 		let result = [],
// 		data = this.model.data;
// 		result = data.map(function(el){
// 			let html = document.createElement(el.tag);
// 			if (el.body) {
// 				html.innerHTML = el.body;
// 			}
// 			if (el.title) {
// 				html.setAttribute('title', el.title);
// 			}
// 			if (el.class) {
// 				html.classList.add(el.class);
// 			}
// 			return html;

// 		} )

// 		this.markUp = result;
// 		return result;
// 	},
// 	render:function() {
// 		this.work();
// 		this.view.render(this.markUp);
// 	},
// 	markUp: []
// };
// export default controller;
let controller = {
    model,
    view,
    work: function() {
        let result = [],
            data = this.model.data;
        result = data.map(trispile);

        this.markUp = result;
        return result;
    },
    render: function() {
        this.work();
        this.view.render(this.markUp);
    },
    markUp: []
};

function trispile(el) {
    let html;
    if (el && el.body && el.tag){
    html = document.createElement(el.tag);

        if (typeof el.body === "object") {

            if (el.body.length) {
                html.innerHTML = el.body.map(trispile);
            } 
            else {
                html.innerHTML = trispile(el.body);
            }
        } 
        else {
            html.innerHTML = el.body;
        }
        if (el.class) {
            html.classList.add(el.class);
        }
    }

   return html ? html : el;
}

export default controller;