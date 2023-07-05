<script setup>
import TreeViewField from "./components/TreeViewField.vue"
import mockData from "./data.js"
import {ref, watch} from "vue"

const selected = ref([2, 3, 10, 11, 24, 29, 30])

watch(selected, () => {
	console.log('selected changed!', selected.value)
})
</script>

<template>
	<div class="border border-gray-800/50 w-80 p-4">
		<h2 class="font-bold">TreeView</h2>
		<TreeViewField :departments="mockData"
					   v-model="selected"
		/>
	</div>

	SELECTED: {{ selected }}
</template>
