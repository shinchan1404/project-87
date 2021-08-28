
var canvas=new fabric.Canvas('myCanvas')

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
    block_image_object=Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.scaleToHeight({
    top:block_y,
	left:block_x

	});
	canvas.add(block_image_object);

	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x=100;
		// upload red ranger
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		console.log("g");
		// upload green ranger
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image('yr.png');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		console.log("p");
		// upload pink ranger
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		console.log("b");
		new_image('br.png');
	}
	
}

