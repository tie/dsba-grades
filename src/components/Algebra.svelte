<script>
	let [S, T, E] = [0, 0, 0]

	$: H = (10./36)*S
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
		<dd>Homework</dd>

		<dt>T</dt>
		<dd>Control work</dd>

		<dt>E</dt>
		<dd>Exam</dd>

		<dt>S</dt>
		<dd>Up to 36 homework points (see <a href="https://docs.google.com/spreadsheets/d/1HUJ-WoTtWmpYSNq2okUr99AKX2MmVlC3pnctCMsSEEI">results</a>)</dd>
	</dl>

	<label>
		<p>S</p>
		<input type=number bind:value={S} min=0 max=36>
		<input type=range bind:value={S} min=0 max=36>
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
