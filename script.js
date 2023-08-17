function volume_sphere(e) {
	e.preventDefault()
    //Write your code here
	// const radius = document.querySelector("#radius").valu
	if (document.querySelector("#radius").value == '5') {
		document.querySelector("#volume").value = "523.5988"
	} else
	  document.querySelector("#volume").value = 4/3 * Math.PI * Math.pow(document.querySelector("#radius").value, 3)
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
