<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs'
	import { DM, Calculus, Algebra, LAaG } from './components.js'
	import { addNeko } from './neko.js'
</script>

<style>
	main {
		font-size: 1.2rem;
		margin: 0 auto;
		max-width: 7in;
	}

	#counter {
		float: right;
	}
</style>

<main>
	<img id=counter src="https://visitor-badge.glitch.me/badge?page_id=4cf62544-7aa3-4469-9465-59e8fb773f99" alt="visitors count badge">
	<h1 on:click={addNeko}>DSBA Grades</h1>
	<Tabs>
		<TabList>
			<Tab>DM</Tab>
			<Tab>Calculus</Tab>
			<Tab>Algebra</Tab>
			<Tab>LAaG</Tab>
		</TabList>
		<TabPanel>
			<DM/>
		</TabPanel>
		<TabPanel>
			<Calculus/>
		</TabPanel>
		<TabPanel>
			<Algebra/>
		</TabPanel>
		<TabPanel>
			<LAaG/>
		</TabPanel>
	</Tabs>
</main>
