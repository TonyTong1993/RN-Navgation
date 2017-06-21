const REQUEST_TYPE = {
	GET:0,
	POST:1
}
function fetchData (type,url,params) {
	if (type == REQUEST_TYPE.GET) {
		fetchDataWithGETType();
	}else if (type == REQUEST_TYPE.POST) {

	}
}
function fetchDataWithGETType (url,params) {
	fetch(url)
	.then(response=>response.json)
	.then(json=>{
		console.log(json)
	})
	.then(error =>{

	})
}
function fetchDataWithPOSTType (url,params) {
	
}
export default {
	REQUEST_TYPE,
	fetchData
}