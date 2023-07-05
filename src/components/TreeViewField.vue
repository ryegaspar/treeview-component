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
		},
		isChild: {
			type: Boolean,
			default: false
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

			// set checkbox tri-state
			parent.triState = false
			if (selectedChildrenCount > 0 && selectedChildrenCount !== childrenCount) {
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

function selectChanged() {
	const selectedIds = []

	function setSelected(parent) {
		if (parent.selected) {
			selectedIds.push(parent.department_id)
		}

		if (parent.children.length) {
			parent.children.forEach(item => setSelected(item))
		}
	}

	departments.value.forEach(department => setSelected(department))

	emit('update:modelValue', selectedIds)
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
				   @change.prevent="selectChanged"
				   :indeterminate="department.triState"
			/>
		</div>
		<div v-if="department.children.length && showChildren[department.department_id]"
			 class="ml-6"
		>
			<TreeViewField :departments="department.children"
						   :model-value="selectedIds"
						   @update:model-value="selectChanged"
						   :is-child="true"
			/>
		</div>
	</div>
</template>