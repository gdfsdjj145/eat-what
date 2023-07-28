import {
	createSSRApp
} from "vue";
import { store } from '@/pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'
import App from "./App.vue";
import 'animate.css'
export function createApp () {
	const app = createSSRApp(App);
	store.use(createUnistorage())
	app.use(store)
	return {
		app,
	};
}
