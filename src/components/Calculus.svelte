<script>
	let [RA, E] = [0, 0, 0]
	let Q1 = 5

	$: Q2_grade = Math.min(10, RA + (6./10)*E)
	$: Q2 = Math.round(Q2_grade)
	$: F_grade = (4./10)*Q1 + (6./10)*Q2
	$: F = Math.round(F_grade)
</script>

<main>
	<h2>Calculus</h2>
	<table>
		<tr>
			<td>Q<sub>2</sub></td>
			<td>=</td>
			<td>roundoff(min(0.4*RA + 0.6*E + B, 10))</td>
		<tr>
			<td>F</td>
			<td>=</td>
			<td>0.4*Q<sub>1</sub> + 0.6*Q<sub>2</sub></td>
	</table>

	<dl>
		<dt>RA</dt>
		<dd>Regular activity.</dd>

		<dt>E</dt>
		<dd>Exam.</dd>

		<dt>B</dt>
		<dd>Bonus points.</dd>

		<dt>Q<sub>i</sub></dt>
		<dd>The intermediate course grade for the <em>i</em>-th semester.</dd>
	</dl>

	<label>
		<p>Final Cumulative Mark (see <a href="https://docs.google.com/spreadsheets/d/1lkT9esL5MIFYo4PZWrX_wgpK4baQblfoibfVE6UuHyY">results</a>)</p>
		<input type=number bind:value={RA} min=0 max=5 step=any>
		<input type=range bind:value={RA} min=0 max=5 step=any>
	</label>
	<label>
		<p>Q<sub>1</sub></p>
		<input type=number bind:value={Q1} min=0 max=10>
		<input type=range bind:value={Q1} min=0 max=10>
	</label>

	<table>
		<tr>
			<td>Q<sub>2</sub></td>
			<td>=</td>
			<td>{Q2} = round({Q2_grade})</td>
		<tr>
			<td>F</td>
			<td>=</td>
			<td>{F} = round({F_grade})</td>
	</table>
</main>
