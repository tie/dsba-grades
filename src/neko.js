export function addNeko() {
	if (document.getElementById('neko')) {
		return
	}
	const s = document.createElement('script')
	s.setAttribute('id', 'neko')
	s.setAttribute('type', 'text/javascript')
	s.setAttribute('src', 'https://b1nary.tk/dummyneko/main.js')
	s.onload = function initNeko() {
		display_state = function(e, name) {
			e.src = 'https://b1nary.tk/ass/webneko.net/socks/' + name + '.gif'
		}
		let e = document.createElement('img')
		e.style.position = 'absolute'
		e.style.width = '32px'
		e.style.top = '0px'
		e.style.left = '0px'
		e.style.imageRendering = 'pixelated'
		e.contentEditable = false
		e.draggable = false
		display_state(e, 'still')
		document.body.appendChild(e)
		state_still({x:0, y:0}, e)
	}
	document.head.appendChild(s)
}
