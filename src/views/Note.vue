<template>
	<div class="note">
		<div class="note-card">
			<div class="title">
				<span class="main-title">Notes App</span>
				<br>
				<span>Take notes and never forget.</span>
			</div>
			<section v-if="url === 'home'">
				<div v-if="!isNotes" class="no-data">No Data.</div>
				<div v-else>
					<note-items></note-items>
				</div>
				<div class="btn">
					<button class="create-btn" @click="pageMove('create')">Create Note</button>
				</div>
			</section>
			<section v-if="url === 'create'">
				<button class="back-btn" @click="pageMove('home')">Back</button>
				<input type="text" class="title-input">
				<textarea class="note-input"></textarea>
				<button class="create-btn">Done</button>
			</section>
		</div>
	</div>
</template>

<script>
import noteItem from '@/components/note_items'
export default {
	name: "Note",
	components: {
		'note-items': noteItem,
	},
	data() {
		return {
			url: 'home',
			isNotes: false,
		}
	},
	methods: {
		pageMove(url) {
			this.url = url;
		},
		getItem() {
			const note = localStorage.getItem("note");

			this.isNotes = note === null ? false : true;
		},
	},
	created() {
		this.getItem();
	}
};
</script>
