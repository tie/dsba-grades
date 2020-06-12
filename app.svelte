<script>
	let dm = {
		colloquium2: 0,
		colloquium3: 0,
		homework2: 0,
		homework3: 0,
		finalExam: 0,
		bonusPoints: 0,
	}

	$: intermediateGrade2 = (1./2)*dm.colloquium2 + (1./2)*dm.homework2
	$: cumulativeGrade3 = (3./10)*dm.colloquium2 + (3./10)*dm.colloquium3 + (4./10)*dm.homework3
	$: finalGrade3 = Math.min(10, (7./10)*cumulativeGrade3 + (3./10)*dm.finalExam + (1./10)*dm.bonusPoints)

	function onNekoClick() {
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
</script>

<style>
	#neko { float: right }
</style>

<button id=neko on:click={onNekoClick}>Prikol</button>

<section>
	<h2>Discrete Maths</h2>

	<table>
		<tr>
			<td>intermediate grade-2</td>
			<td>=</td>
			<td>(1/2) colloquium-2 + (1/2) homework-2</td>
		<tr>
			<td>cumulative grade-3</td>
			<td>=</td>
			<td>(3/10) colloquium-2 + (3/10) colloquium-3 + (4/10) homework-3</td>
		<tr>
			<td>final grade-3</td>
			<td>=</td>
			<td>min(10, (7/10) cumulative grade-3 + (3/10) final exam + (1/10) bonus points)</td>
	</table>

	<label>
		<p>colloquium-2</p>
		<input type=number bind:value={dm.colloquium2} min=0 max=10 step=any>
		<input type=range bind:value={dm.colloquium2} min=0 max=10 step=any>
	</label>
	<label>
		<p>colloquium-3</p>
		<input type=number bind:value={dm.colloquium3} min=0 max=10 step=any>
		<input type=range bind:value={dm.colloquium3} min=0 max=10 step=any>
	</label>
	<label>
		<p>homework-2</p>
		<input type=number bind:value={dm.homework2} min=0 max=10 step=any>
		<input type=range bind:value={dm.homework2} min=0 max=10 step=any>
	</label>
	<label>
		<p>homework-3</p>
		<input type=number bind:value={dm.homework3} min=0 max=10 step=any>
		<input type=range bind:value={dm.homework3} min=0 max=10 step=any>
	</label>
	<label>
		<p>final exam</p>
		<input type=number bind:value={dm.finalExam} min=0 max=10 step=any>
		<input type=range bind:value={dm.finalExam} min=0 max=10 step=any>
	</label>
	<label>
		<p>bonus points</p>
		<input type=number bind:value={dm.bonusPoints} min=0 max=10 step=any>
		<input type=range bind:value={dm.bonusPoints} min=0 max=10 step=any>
	</label>

	<table>
		<tr>
			<td>intermediate grade-2</td>
			<td>=</td>
			<td>{intermediateGrade2}</td>
		<tr>
			<td>cumulative grade-3</td>
			<td>=</td>
			<td>{cumulativeGrade3}</td>
		<tr>
			<td>final grade-3</td>
			<td>=</td>
			<td>{Math.round(finalGrade3)} = round({finalGrade3})</td>
	</table>
</section>

