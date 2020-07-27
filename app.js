// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		show: true,
		bossHealth:100,
		playerHealth:100,
		logs: [],
	},
	watch:{
		playerHealth : function (){
			if(this.playerHealth <= 0){
				alert('You have lost');
				this.resetGame();
			}
			else if(this.playerHealth >=100){
				this.playerHealth = 100;
			}
		},
		bossHealth : function (){
			if(this.bossHealth <= 0){
				alert('You have defeated the boss!');
				this.resetGame();
			}
		}
	},
	methods:{
		attack: function(event, special = false){
			let playerDamage;
			let bossDamage;
			if(special){
				playerDamage =  Math.floor(Math.random()*10 + 10);
			} else{
				playerDamage =  Math.floor(Math.random()*10);
			}
			this.bossHealth -= playerDamage;

			bossDamage = 	Math.floor(Math.random()*10);
			this.playerHealth -= bossDamage;

			this.logs.unshift({turnType: 'Player', damage:playerDamage,actionType:'attack'});
			this.logs.unshift({turnType: 'Monster', damage:bossDamage,actionType:'attack'});
		},
		heal: function(){
			let playerHeal;
			let bossDamage;
		
			playerHeal =  Math.floor(Math.random()*10);
					

			bossDamage = 	Math.floor(Math.random()*10);
			this.playerHealth -= bossDamage;
			this.playerHealth += playerHeal;
			this.logs.unshift({turnType: 'Player', damage:playerHeal, actionType:'heal'});
			this.logs.unshift({turnType: 'Monster', damage:bossDamage, actionType:'attack'});
		},
		
		resetGame: function(){
			this.playerHealth = 100;
			this.bossHealth = 100;
			this.logs = [];
		},
		giveUp: function(){
			if(confirm('Do you want to give up and lose the round?')){
				alert("You have lost the game");
				this.resetGame();
			}
		}
	}

})