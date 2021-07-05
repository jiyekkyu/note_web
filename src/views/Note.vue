<template>
	<section>
		<button class="new-note-item" @click="createNote">+ New Note</button>
		<div class="note-item" @scroll="scrollEvent">
			<noteItem
				v-for="(note, idx) in notes"
				:key="idx"
				:items="items"
				:title="note.title"
				:content="note.content"
				:uptime="getUptime(note.uptime)"
				@click="updateNote(idx)"></noteItem>
		</div>
	</section>
</template>

<script>
import noteItem from '@/components/note_items.vue';
export default {
	name: "Note",
	components: {
		noteItem,
	},
	data() {
		return {
			url: 'home',
			title: '',
			content: '',
			uptime: '',
			notes: [],
			items: 4,
		}
	},
	methods: {
		createNote() {
			this.$router.push('createNote');
		},
		updateNote(idx) {
			const note = this.notes[idx];

			this.$router.push({
				name: 'CreateNote',
				params: {
					title: note.title,
					content: note.content
				},
				query: {idx: idx}
			});
		},
		getUptime(t) {
			let time = new Date().getTime();
			let rtnVal = '';

			if (t) {
				let min = 0;
				let hour = 0;
				let day = 0;

				t = time - t;
				t = Math.floor(t / 1000) / 60;

				min = Math.floor(t % 60);
				hour = Math.floor(t / 60);
				day = Math.floor(hour / 24);

				if (hour > 0) {
					rtnVal =  hour + ' hours ' + min + ' minutes';
					if (day > 0) {
						rtnVal = day + ' days';
					}
				} else {
					if (min > 0) {
						rtnVal = min + ' minutes';
					} else {
						rtnVal = 'a few seconds';
					}
				}
			} else{
				return;
			}
			return rtnVal;
		},
		getNote() {
			const note = JSON.parse(localStorage.getItem("note"));

			this.notes = note ?? [];
		},
	},
	created() {
		this.getNote();
	}
};
</script>
