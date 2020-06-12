<script>
	let [O2, W2, Q2, H2, E2] = [0, 0, 0, 0, 0]
	let I1 = 5
	let [A1, A2] = [0.6, 0.6]

	$: C2 = (8./28)*O2 + (8./28)*W2 + (7./28)*Q2 + (5./28)*H2
	$: I2_grade = (3./10)*E2 + (7./10)*C2
	$: I2 = round(I2_grade, A2)

	$: A_year = (A1 + A2) / 2
	$: F_grade = (1./4)*I1 + (3./4)*I2
	$: F = round(F_grade, A_year)

	function round(grade, att) {
		const dec = grade % 1
		if (dec < 0.2) {
			return Math.floor(grade)
		} else if (dec > 0.6) {
			return Math.ceil(grade)
		}
		if (att >= 0.6) {
			return Math.ceil(grade)
		} else {
			return Math.floor(grade)
		}
	}
</script>

<section>
	<h1>Linear Algebra and Geometry</h1>
	<table>
		<tr>
			<td>C<sub>i</sub></td>
			<td>=</td>
			<td>8/28*O<sub>i</sub> + 8/28*W<sub>i</sub> + 7/28*Q<sub>i</sub> + 5/28*H<sub>i</sub></td>
		<tr>
			<td>I<sub>i</sub></td>
			<td>=</td>
			<td>Round(A<sub>i</sub>, 3/10*E<sub>i</sub> + 7/10*C<sub>i</sub>)</td>
		<tr>
			<td>F</td>
			<td>=</td>
			<td>Round((A<sub>1</sub> + A<sub>2</sub>)/2, 1/4*I<sub>1</sub> + 3/4*I<sub>2</sub>)</td>
	</table>

	<dl>
		<dt>O<sub>1</sub>, O<sub>2</sub></dt>
		<dd>In-class oral tests.</dd>

		<dt>W<sub>1</sub>, W<sub>2</sub></dt>
		<dd>In-class written tests.</dd>

		<dt>Q<sub>1</sub>, Q<sub>2</sub></dt>
		<dd>Quizzes where Q<sub>i</sub> is the average grade of all the quizzes in the <em>i</em>-th semester.</dd>

		<dt>H<sub>1</sub>, H<sub>2</sub></dt>
		<dd>Homework assignments where H<sub>i</sub> is the average grade of all the homework assignments in the <em>i</em>-th semester.</dd>

		<dt>E<sub>1</sub>, E<sub>2</sub></dt>
		<dd>Written exams.</dd>

		<dt>C<sub>1</sub>, C<sub>2</sub></dt>
		<dd>The cumulative course grade for the <em>i</em>-th semester.</dd>

		<dt>I<sub>1</sub>, I<sub>2</sub></dt>
		<dd>The intermediate course grade for the <em>i</em>-th semester.</dd>

		<dt>A<sub>1</sub>, A<sub>2</sub></dt>
		<dd>The seminar attendance (in range [0;1]) during the <em>i</em>-th semester.</dd>

		<dt>F</dt>
		<dd>The final grade for the course.</dd>
	</dl>

	<label>
		<p>I<sub>1</sub></p>
		<input type=number bind:value={I1} min=0 max=10>
		<input type=range bind:value={I1} min=0 max=10>
	</label>

	<label>
		<p>A<sub>1</sub></p>
		<input type=number bind:value={A1} min=0 max=1 step=any>
		<input type=range bind:value={A1} min=0 max=1 step=any>
	</label>

	<label>
		<p>A<sub>2</sub></p>
		<input type=number bind:value={A2} min=0 max=1 step=any>
		<input type=range bind:value={A2} min=0 max=1 step=any>
	</label>

	<label>
		<p>O<sub>2</sub></p>
		<input type=number bind:value={O2} min=0 max=10 step=any>
		<input type=range bind:value={O2} min=0 max=10 step=any>
	</label>

	<label>
		<p>W<sub>2</sub></p>
		<input type=number bind:value={W2} min=0 max=10 step=any>
		<input type=range bind:value={W2} min=0 max=10 step=any>
	</label>

	<label>
		<p>Q<sub>2</sub></p>
		<input type=number bind:value={Q2} min=0 max=10 step=any>
		<input type=range bind:value={Q2} min=0 max=10 step=any>
	</label>

	<label>
		<p>H<sub>2</sub></p>
		<input type=number bind:value={H2} min=0 max=10 step=any>
		<input type=range bind:value={H2} min=0 max=10 step=any>
	</label>

	<label>
		<p>E<sub>2</sub></p>
		<input type=number bind:value={E2} min=0 max=10 step=any>
		<input type=range bind:value={E2} min=0 max=10 step=any>
	</label>

	<table>
		<tr>
			<td>C<sub>2</sub></td>
			<td>=</td>
			<td>{C2}</td>
		<tr>
			<td>I<sub>2</sub></td>
			<td>=</td>
			<td>{I2} = round({I2_grade}, {A1})</td>
		<tr>
			<td>F</td>
			<td>=</td>
			<td>{F} = round({F_grade}, {A_year})</td>
	</table>
</section>
