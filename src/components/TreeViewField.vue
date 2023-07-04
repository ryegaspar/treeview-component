<script setup>
import {computed, onMounted, ref} from "vue"

const props = defineProps(
	{
		departments: {
			type: Array,
			required: true
		},
		modelValue: {
			type: Array,
			default: []
		}
	}
)

const showChildren = ref({})

// onMounted(() => {
// 	// console.log(props.departments)
// })

const departmentComputed = computed(
	() => {
		const computed = props.departments
		computed.forEach(department => {
			department.selected = props.modelValue.includes(department.department_id)
		})

		return computed
	}
)

function toggleShowChildren(index) {
	showChildren.value[index] = !showChildren.value[index]
}

</script>

<template>
	<div v-for="(department, index) in departmentComputed"
		 :key="index"
	>
		<div class="flex justify-between">
			<div class="flex gap-1">
				<div v-if="department.children.length"
					 @click.prevent="toggleShowChildren(index)"
					 class="hover:cursor-pointer"
				>
					<span v-if="!showChildren[index]">+</span>
					<span v-else>-</span>
				</div>
				<label :for="department.department_id">
					{{ department.department_name }}
				</label>
			</div>
			<input type="checkbox"
				   :id="department.department_id"
				   v-model="department.selected"
			/>
		</div>
		<div v-if="department.children.length && showChildren[index]"
			 class="ml-6"
		>
			<TreeViewField :departments="department.children"
						   v-model="props.modelValue"
			/>
		</div>
	</div>
</template>