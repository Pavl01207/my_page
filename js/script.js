const text = document.querySelector('.text__second')
const textLoad = () => {
	setTimeout(()=>{
		text.textContent = 'Developer'
	},0);
	setTimeout(()=>{
		text.textContent = 'Blogger'
	},4000);
	setTimeout(()=>{
		text.textContent = 'Streamer'
	},8000);
}
textLoad()
setInterval(textLoad, 12000)
//
window.addEventListener("load", () => {
	document.documentElement.classList.add('loaded');
})