// this is the function for popping up from the left and right 
// the function named scroll will start excuate when the web page is scroll or move horizontally or vartically because of the onscroll event listener
window.onscroll = function() {scroll()};
// this is the function named scroll
function scroll() {
    //scrollTop property will start counting when you scroll from the top to the bottom. it count the amount of px that you have been scroll from the top of the page
  if (document.documentElement.scrollTop > 1500) {
      myatminbox.style.display  = "flex"
  }
  if (document.documentElement.scrollTop > 2000) {
      arkerbox.style.display = "flex"
  }
  if (document.documentElement.scrollTop > 2500) {
      minthiakbox.style.display = "flex"
  }
  if (document.documentElement.scrollTop > 3000) {
      zayarbox.style.display = "flex"
  }
}
