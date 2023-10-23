<script setup lang="ts">
import { onMounted, ref, watch } from "vue"

const props = defineProps<{
	modelValue: boolean
	title: string
}>()

const emits = defineEmits<{
	"update:modelValue": [value: boolean]
}>()

const el = ref<HTMLDialogElement>()
onMounted(() => {
	if (el.value == undefined) return
	el.value.addEventListener("close", () => {
		emits("update:modelValue", false)
	})
})

watch(
	() => props.modelValue,
	(v) => {
		if (v) {
			if (el.value == undefined) return
			el.value.showModal()
		}
	}
)
</script>

<template>
	<teleport to="#modals">
		<dialog class="modal" ref="el">
			<div class="modal-box">
				<form method="dialog">
					<button
						class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
					>
						✕
					</button>
				</form>
				<h3 class="font-bold text-lg">{{ props.title }}</h3>
				<div>
					<slot></slot>
				</div>
			</div>
		</dialog>
	</teleport>
</template>
