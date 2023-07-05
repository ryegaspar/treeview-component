<script setup>
import { onMounted, ref } from "vue"

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
const emit = defineEmits(['update:modelValue'])
const showChildren = ref({})
const departments = ref([])
const selectedIds = ref(props.modelValue)

onMounted(() => {
	departments.value = props.departments

	function initialize(parent) {
		parent.selected = props.modelValue.includes(parent.department_id)

		const childrenCount = parent.children.length

		if (childrenCount) {
			parent.children.forEach(item => initialize(item))

			const selectedChildrenCount = parent.children.filter(item => item.selected).length
			const triStateChildrenCount = parent.children.filter(item => item.triState).length

			// set checkbox tri-state and show children
			parent.triState = false
			if (
				(selectedChildrenCount > 0 && selectedChildrenCount !== childrenCount) ||
				triStateChildrenCount
			) {
				parent.triState = true

				showChildren.value[parent.department_id] = true
			}
		}
	}

	departments.value.forEach(department => initialize(department))
})

function toggleShowChildren(index) {
	showChildren.value[index] = !showChildren.value[index]
}

function checkChanged(department) {

	selectedIds.value = []
	function setSelectedIds(parent) {
		if (parent.selected) {
			selectedIds.value.push(parent.department_id)
		}

		if (parent.children.length) {
			parent.children.forEach(item => setSelectedIds(item))
		}
	}

	function updateSelected(department, status) {
		if (status) {
			department.triState = false
		}

		department.selected = status

		if (department.children.length) {
			department.children.forEach(item => updateSelected(item, status))
		}
	}

	function updateTriState(department) {
		const childrenCount = department.children.length

		if (childrenCount) {
			department.children.forEach(item => updateTriState(item))

			const selectedChildrenCount = department.children.filter(item => item.selected).length
			const triStateChildrenCount = department.children.filter(item => item.triState).length

			department.triState = false

			if (
				(selectedChildrenCount > 0 && selectedChildrenCount !== childrenCount) ||
				triStateChildrenCount
			) {
				department.triState = true
				department.selected = false
			}

			if (!selectedChildrenCount) {
				department.selected = false
			}

			if (selectedChildrenCount === childrenCount) {
				department.selected = true
			}
		}
	}

	// update children selected status
	if (department?.children?.length) {
		department.children.forEach(item => updateSelected(item, department.selected))
	}

	// update tristate and parent status
	departments.value.forEach(department => updateTriState(department))

	// set selectedIds
	departments.value.forEach(department => setSelectedIds(department))

	emit('update:modelValue', selectedIds.value)
}
</script>

<template>
	<div v-for="(department, index) in departments"
		 :key="index"
	>
		<div class="flex justify-between">
			<div class="flex gap-1">
				<div v-if="department.children.length"
					 @click.prevent="toggleShowChildren(department.department_id)"
					 class="hover:cursor-pointer"
				>
					<span>{{ showChildren[department.department_id] ? '-' : '+'}}</span>
				</div>
				<label :for="department.department_id">
					{{ department.department_name }} (<span class="italic">{{ department.department_id }}</span>)
				</label>
			</div>
			<input type="checkbox"
				   :id="department.department_id"
				   v-model="department.selected"
				   @change.prevent="checkChanged(department)"
				   :indeterminate="department.triState"
			/>
		</div>
		<div v-if="department.children.length && showChildren[department.department_id]"
			 class="ml-6"
		>
			<TreeViewField :departments="department.children"
						   :model-value="selectedIds"
						   @update:model-value="checkChanged"
			/>
		</div>
	</div>
</template>