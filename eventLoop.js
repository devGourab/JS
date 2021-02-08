// Create a event Loop
const process1 = () =>{
	setTimeout(() => {
		console.log("Big Process In Process -1")
	},3500)
	console.log("This is process -1")
}
const process2 = () =>{
	setTimeout(() =>{
		console.log("Big Process In Process -2")
	},3000)
	console.log("This is process -2")
}
const process3 = () =>{
	console.log("This is process -3")
}

process1()
process2()
process3()