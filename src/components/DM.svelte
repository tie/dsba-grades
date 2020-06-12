<script>
	let colloquium2 = 0
	let colloquium3 = 0
	let hwk2 = 0
	let hwk3 = 0
	let finalExam = 0
	let bonusPoints = 0

	$: homework2 = hwk2/158 * 10
	$: homework3 = (hwk2 + hwk3)/240 * 10
	$: intermediateGrade2 = (1./2)*colloquium2 + (1./2)*homework2
	$: cumulativeGrade3 = (3./10)*colloquium2 + (3./10)*colloquium3 + (4./10)*homework3
	$: finalGrade3 = Math.min(10, (7./10)*cumulativeGrade3 + (3./10)*finalExam + (1./10)*bonusPoints)
</script>

<section>
	<h1>Discrete Mathematics</h1>
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

	<dl>
		<dt>colloquium-i</dt>
		<dd>The grade for <em>i</em>-th colloquium on a 10-point scale.</dd>

		<dt>hwk-i</dt>
		<dd>The <em>total score</em> column from <em>i</em>-th homework list in <a href="https://docs.google.com/spreadsheets/d/10DnnnhiiHIu0mG-gLLhKr8dz703pFkaMtWmUzxm2QC0">results spreadsheet</a>.</dd>

		<dt>final exam</dt>
		<dd>Uh, final exam grade.</dd>

		<dt>bonus points</dt>
		<dd>Uh-uh, bonus points, up to 20.</dd>
	</dl>

	<label>
		<p>colloquium-2</p>
		<input type=number bind:value={colloquium2} min=0 max=10 step=any>
		<input type=range bind:value={colloquium2} min=0 max=10 step=any>
	</label>
	<label>
		<p>colloquium-3</p>
		<input type=number bind:value={colloquium3} min=0 max=10 step=any>
		<input type=range bind:value={colloquium3} min=0 max=10 step=any>
	</label>
	<label>
		<p>hwk-2</p>
		<input type=number bind:value={hwk2} min=0 max=158>
		<input type=range bind:value={hwk2} min=0 max=158>
	</label>
	<label>
		<p>hwk-3</p>
		<input type=number bind:value={hwk3} min=0 max=82>
		<input type=range bind:value={hwk3} min=0 max=82>
	</label>
	<label>
		<p>final exam</p>
		<input type=number bind:value={finalExam} min=0 max=10 step=any>
		<input type=range bind:value={finalExam} min=0 max=10 step=any>
	</label>
	<label>
		<p>bonus points</p>
		<input type=number bind:value={bonusPoints} min=0 max=20 step=any>
		<input type=range bind:value={bonusPoints} min=0 max=20 step=any>
	</label>

	<table>
		<tr>
			<td>intermediate grade-2</td>
			<td>=</td>
			<td>{Math.round(intermediateGrade2)} = round({intermediateGrade2})</td>
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
