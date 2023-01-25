x=1
function browse() {
	x++;
	if (x==2) {
		browselist.style.display = "flex"
		}
	else{
		browselist.style.display = "none"
	}
	if (x==2) {
		x=0
	}
}
