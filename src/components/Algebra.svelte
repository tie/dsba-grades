<script>
	let [H, T, E] = [0, 0, 0]

	$: C = (6./10)*H + (4./10)*T
	$: F = (5./10)*C + (5./10)*E
</script>

<section>
	<h2>Algebra</h2>
	<table>
		<tr>
			<td>C</td>
			<td>=</td>
			<td>0,6 * H + 0,4 * T</td>
		<tr>
			<td>F</td>
			<td>=</td>
			<td>0,5 * C + 0,5 * E = 0,3 * H + 0,2 T + 0,5 E</td>
	</table>

	<dl>
		<dt>H</dt>
		<dd>Homework. Up to 36 points multiplied by 10/36.</dd>

		<dt>T</dt>
		<dd>Control work</dd>

		<dt>E</dt>
		<dd>Exam</dd>
	</dl>

	<label>
		<p>H</p>
		<input type=number bind:value={H} min=0 max=10 step=any>
		<input type=range bind:value={H} min=0 max=10 step=any>
	</label>
	<label>
		<p>T</p>
		<input type=number bind:value={T} min=0 max=10 step=any>
		<input type=range bind:value={T} min=0 max=10 step=any>
	</label>
	<label>
		<p>E</p>
		<input type=number bind:value={E} min=0 max=10 step=any>
		<input type=range bind:value={E} min=0 max=10 step=any>
	</label>

	<table>
		<tr>
			<td>C</td>
			<td>=</td>
			<td>{C}</td>
		<tr>
			<td>F</td>
			<td>=</td>
			<td>{Math.round(F)} = round({F})</td>
	</table>
</section>
