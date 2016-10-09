window.onload = function(){
	var app = {
		fillTheStar: function(){
			var star = document.getElementsByClassName('stars');
			for(var i = 0; i < star.length; i++){
				star[i].onclick = this.onclick;
			}
		},
		onclick: function(e) {
			var clickedStar = e.target;
			var numberOfStar = parseInt(clickedStar.dataset.star)-1;
			var selectedStars = document.getElementsByClassName('stars');
			 for(var p = 0; p < selectedStars.length; p++){
			 	if (p <= numberOfStar){
			 		selectedStars[p].classList.add('active');
			 	}else{
			 		selectedStars[p].classList.remove('active');
			 	}
			 }		
				},
		addClickToListHeader: function(){
			var secondLevelList = document.getElementsByClassName('second-level-menu');
			for(var e = 0; e < secondLevelList.length; e++){
				secondLevelList[e].onclick = this.onclickItem;
			}
		},
		onclickItem: function(event){
			var hasActiveClass = event.currentTarget.classList.contains('list-active');
			if(hasActiveClass){
				event.currentTarget.classList.remove('list-active');
			}else{ 
				event.currentTarget.classList.add('list-active');
			}
		}
	};
	app.fillTheStar();
	app.addClickToListHeader();

}