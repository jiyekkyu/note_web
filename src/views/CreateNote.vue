<template>
	<section>
		<button class="back-btn" @click="pageMove">Back</button>
		<input type="text" class="title-input" v-model="title">
		<textarea class="note-input" v-model="content"></textarea>
		<button class="done-btn" @click="setNote">Done</button>
		<button v-if="idx" class="del-btn" @click="delNote">Remove</button>
	</section>
</template>

<script>
export default {
	name: "CreateNote",
	data() {
		return {
			url: 'home',
			title: '',
			content: '',
			items: [],
			idx: null,
		}
	},
	methods: {
		pageMove() {
			this.$router.push('/');
		},
		getNote() {
			const note = JSON.parse(localStorage.getItem("note"));
			const idx = this.idx;

			this.items = note ?? [];
			
			if (idx) {
				this.title = note[idx].title;
				this.content = note[idx].content;
			}
		},
		setNote() {
			const uptime = new Date().getTime();
			const title = this.title;
			const content = this.content;
			const obj = {title, content, uptime};
			const idx = this.idx;

			if (title === '' ) {
				alert('제목을 입력해주세요.');
				return;
			}

			if (content === '' ) {
				alert('내용을 입력해주세요.');
				return;
			}

			if (idx) {
				this.items[idx] = obj;
			} else{
				this.items.push(obj);
			}

			localStorage.note = JSON.stringify(this.items);

			this.pageMove();
		},
		delNote() {
			const title = this.title;
			const content = this.content;
			const idx = this.idx;

			this.items.splice(idx, 1);
			localStorage.note = JSON.stringify(this.items);
			this.pageMove();
		}
	},
	created() {
		this.idx = this.$route.query.idx;
		this.getNote();
	}
};
</script>
