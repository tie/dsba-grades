<script>
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs'
	import { DM, Calculus, Algebra, LAaG } from './components.js'
	import { addNeko } from './neko.js'
</script>
	
<main>
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
