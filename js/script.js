document.querySelector('#test-policy').onclick = function(){
  document.getElementById('modal').style.display = 'block';
}
document.querySelector('#modal__close').onclick = function(){
  document.getElementById('modal').style.display = 'none';
}


var menu = new Vue({
		el: '#sidebar',
		data: {
			list:[
				{title: 'Policy management',
					link: 'pol-list.html'},
				{title: 'Account management',
					link: 'acc-list.html'},
				{title: 'User management',
					link: 'user-list.html'},
			],
			
			isActive: true,

		},
	method: {
		classActive: function(){
			this.classActive = true;
		}
	}

})