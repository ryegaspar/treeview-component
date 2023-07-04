<script setup>
import TreeViewField from "./components/TreeViewField.vue"
import mockData from "./data.js"
import {ref} from "vue"

const selected=ref([2220, 2230])
</script>

<template>
	<div class="border border-gray-800/50 w-80 p-4">
		<h2 class="font-bold">TreeView</h2>
		<TreeViewField :departments="mockData"
					   v-model="selected"
		/>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
