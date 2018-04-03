<template>
	<div id="newDrow">
		<p>If you want to win you must grab the treasure and bring it to the door. Use the arrows on the keyboard.</p>
		<canvas ref="renderCanvas"></canvas>
	</div>
	
</template>


<script>
	export default {
		data () {
		    return {
		     newApp: {} 
	    	}
	    },
	 	mounted() {

	 	let Application = PIXI.Application,
	 		Container = PIXI.Container,
		    loader = PIXI.loader,
		    resources = PIXI.loader.resources,
		    Sprite = PIXI.Sprite,
		    Text = PIXI.Text,
		    TextStyle = PIXI.TextStyle;
		const renderCanvas = this.$refs.renderCanvas;

	    let newApp = new Application({
	    width: 512, 
	    height: 512,                       
	    antialias: true, 
	    transparent: false, 
	    resolution: 1,
	    view: renderCanvas,
	    backgroundColor: 0x061639
	    });

	    // console.log(newApp)
	    let cat, state, dungeon, treasure, door, blobs, gameScene, message, gameOverScene;

	    try {
			loader.add(["../static/img/cat.png",
						"../static/img/treasure.png",
						"../static/img/door.png",
						"../static/img/blob.png"]).load(setup);
		}
		catch(e) {
			loader.load(setup);
		}
		function keyboard(keyCode) {
			let key = {};
			key.code = keyCode;
			key.isDown = false;
			key.isUp = true;
			key.press = undefined;
			key.release = undefined;
			  //The `downHandler`
			key.downHandler = event => {
			  	if (event.keyCode === key.code) {
			    	if (key.isUp && key.press) key.press();
				    key.isDown = true;
				    key.isUp = false;
			  	}
			    event.preventDefault();
			};
			  //The `upHandler`
			key.upHandler = event => {
			    if (event.keyCode === key.code) {
			      	if (key.isDown && key.release) key.release();
			     	key.isDown = false;
			     	key.isUp = true;
			    }
			    event.preventDefault();
			};
			  //Attach event listeners
			window.addEventListener(
			  	"keydown", key.downHandler.bind(key), false
			);
			window.addEventListener(
			  	"keyup", key.upHandler.bind(key), false
			);
			return key;
		}

		function setup() {
			gameScene = new Container();
  			newApp.stage.addChild(gameScene);

			cat = new Sprite(resources["../static/img/cat.png"].texture);
			// console.log(cat)
			cat.scale.set(0.5, 0.5);
  			cat.x = 0;
  			cat.y = 230;
  			cat.vx = 0;
			cat.vy = 0;
  			gameScene.addChild(cat);

  			treasure = new Sprite(resources["../static/img/treasure.png"].texture);
  			treasure.x = 450;
  			treasure.y = 235;
  			gameScene.addChild(treasure);

  			door = new Sprite(resources["../static/img/door.png"].texture);
  			door.x = 32;
  			door.y = 32;
  			gameScene.addChild(door);

  			let numberOfBlobs = 6,
			    spacing = 48,
			    xOffset = 150,
			    speed = 2,
			    direction = 1;

			blobs = [];    
  			for (let i = 0; i < numberOfBlobs; i++) {

			    let blob = new Sprite(resources["../static/img/blob.png"].texture);
			    let x = spacing * i + xOffset;
			    let y = randomInt(0, (gameScene.height - blob.height));

			    blob.x = x;
			    blob.y = y;
			    blob.vy = speed * direction;
			    direction *= -1;
			    blobs.push(blob);

			    gameScene.addChild(blob);
			}
			gameOverScene = new Container();
			newApp.stage.addChild(gameOverScene);

			gameOverScene.visible = false;

			let style = new TextStyle({
			    fontFamily: "Futura",
			    fontSize: 64,
			    fill: "white"
			});
			message = new Text("GAME OVER!", style);
			message.x = 50;
			message.y = 230;
			gameOverScene.addChild(message);

  			let left = keyboard(37),
			    up = keyboard (38),
			    right = keyboard (39),
			    down = keyboard (40);
			  //Left arrow key `press` method
			left.press = () => {
			    //Change the cat's velocity when the key is pressed
			    cat.vx = -5;
			    cat.vy = 0;
			};
			  //Left arrow key `release` method
			left.release = () => {
			    //If the left arrow has been released, and the right arrow isn't down,
			    //and the cat isn't moving vertically:
			    //Stop the cat
			    if (!right.isDown && cat.vy === 0) {
			      cat.vx = 0;
			    }
			};
			  //Up
			up.press = () => {
			    cat.vy = -5;
			    cat.vx = 0;
			};
			up.release = () => {
			    if (!down.isDown && cat.vx === 0) {
			      cat.vy = 0;
			    }
			};
			  //Right
			right.press = () => {
			    cat.vx = 5;
			    cat.vy = 0;
			};
			right.release = () => {
			    if (!left.isDown && cat.vy === 0) {
			      cat.vx = 0;
			    }
			};
			  //Down
			down.press = () => {
			    cat.vy = 5;
			    cat.vx = 0;
			};
			down.release = () => {
			    if (!up.isDown && cat.vx === 0) {
			      cat.vy = 0;
			    }
			};
  			state = play;
  			newApp.ticker.add(delta => gameLoop(delta));
			}

		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		function gameLoop(delta){
			// cat.x += 1;
			state(delta);
		}
		
		function play(delta) {
			cat.x += cat.vx;
  			cat.y += cat.vy;

  			contain(cat, {x: 32, y: 32, width: 480, height: 480}); 

  			blobs.forEach(function(blob) {

				blob.y += blob.vy;

				let blobHitsWall = contain(blob, {x: 28, y: 10, width: 488, height: 480});

				if (blobHitsWall === "top" || blobHitsWall === "bottom") {
				    blob.vy *= -1;
				}
				if(hitTestRectangle(cat, blob)) {
					gameScene.visible = false;
				    gameOverScene.visible = true;
				}
			});
			if (hitTestRectangle(cat, treasure)) {
			    //If the treasure is touching the explorer, center it over the explorer
			    treasure.x = cat.x + 8;
			    treasure.y = cat.y + 8;
 			}
 			if (hitTestRectangle(treasure, door)) {
			    state = end;
			    message.text = "You won!";
		  	} 	
		}

		function end() {
			gameScene.visible = false;
			gameOverScene.visible = true;
			}

		function contain(sprite, container) {
			let collision = undefined;
			  //Left
			if (sprite.x < container.x) {
			  sprite.x = container.x;
			  collision = "left";
			}
			  //Top
			if (sprite.y < container.y) {
			  sprite.y = container.y;
			  collision = "top";
			}
			  //Right
			if (sprite.x + sprite.width > container.width) {
			  sprite.x = container.width - sprite.width;
			  collision = "right";
			}
			  //Bottom
			if (sprite.y + sprite.height > container.height) {
			  sprite.y = container.height - sprite.height;
			  collision = "bottom";
			}
			return collision;
		}
		function hitTestRectangle(r1, r2) {

			let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;
			hit = false

			r1.centerX = r1.x + r1.width / 2; 
			r1.centerY = r1.y + r1.height / 2; 
			r2.centerX = r2.x + r2.width / 2; 
			r2.centerY = r2.y + r2.height / 2;

			r1.halfWidth = r1.width / 2;
			r1.halfHeight = r1.height / 2;
			r2.halfWidth = r2.width / 2;
			r2.halfHeight = r2.height / 2;

			vx = r1.centerX - r2.centerX;
			vy = r1.centerY - r2.centerY;

			combinedHalfWidths = r1.halfWidth + r2.halfWidth;
			combinedHalfHeights = r1.halfHeight + r2.halfHeight;

			if (Math.abs(vx) < combinedHalfWidths) {
			  	if (Math.abs(vy) < combinedHalfHeights) {
			   	 	hit = true;
			  	} 
			  	else {
			      	hit = false;
			    }
			} 
			else {
			    hit = false;
			}
			  return hit;
		};	
	}
}
</script>


<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#newDrow {
		@extend .interface_by_Vue;
	}

</style>