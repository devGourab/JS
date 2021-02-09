// Create a event Loop
const process1 = () =>
{
	return "This is process -1"
}

// const process2 = async() =>
// {
// 	setTimeout(() =>
// 	{
// 		return("Big Process In Process -2");
// 	},3000);
// }

const process2 = () =>
{
	return new Promise((resolve,request)=>{
		setTimeout(()=>{
			resolve("Got It process -2");
		},3000);

	})
	
}

const process3 = () =>
{
	return("This is process -3")
}

const callMe =async () =>{
	let valone = process1();
	console.log(valone);

	let valtwo = await process2();
	console.log(valtwo);

	let valthree = process3();
	console.log(valthree);
}

callMe()