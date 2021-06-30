<template>
	<div class="note">
		<div class="note-card">
			<div class="title">
				<span class="main-title">Notes App</span>
				<br>
				<span>Take notes and never forget.</span>
			</div>
			<section v-if="url === 'home'">
				<div>
					<noteItem
						v-for="item in items"
						:key="item.title"
						:title="item.title"
						:content="item.content"></noteItem>
				</div>
				<button class="new-note-item" @click="pageMove" value="create">+ New Note</button>
			</section>
			<section v-if="url === 'create'">
				<button class="back-btn" @click="pageMove" value="home">Back</button>
				<input type="text" class="title-input" v-model="title">
				<textarea class="note-input" v-model="content"></textarea>
				<button class="create-btn" @click="setItem">Done</button>
			</section>
		</div>
	</div>
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
			items: [],
		}
	},
	methods: {
		pageMove(e) {
			const url = e.target.value;

			this.url = url;
			this.title = '';
			this.content = '';
		},
		getItem() {
			const note = JSON.parse(localStorage.getItem("note"));
			this.items = note === null ? [] : note;
		},
		scrollEvt(e) {
			console.log(e)
		},
		setItem() {
			const title = this.title;
			const content = this.content;
			const obj = {title, content};

			if (title === '' ) {
				alert('제목을 입력해주세요.');
				return;
			}

			if (content === '' ) {
				alert('내용을 입력해주세요.');
				return;
			}

			this.items.push(obj);
			localStorage.note = JSON.stringify(this.items);

			this.url = 'home';
			this.getItem();
		}
	},
	created() {
		this.getItem();
	}
};
</script>
