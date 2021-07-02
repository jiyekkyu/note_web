import { createRouter, createWebHistory } from "vue-router";
import Note from "../views/Note.vue";
import CreateNote from "../views/CreateNote.vue";

const routes = [
  {
    path: "/",
    name: "Note",
    component: Note,
  },
  {
    path: "/createNote",
    name: "CreateNote",
    component: CreateNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
