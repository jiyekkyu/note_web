<template>
	<div>
		<h1>{{ title }}</h1>
		<p>Last edited {{uptime}} ago.</p>
	</div>
</template>

<script>
export default {
	name: "NoteItems",
	props: {
		title: String,
		content: String,
		uptime: String,
	},
};
</script>
