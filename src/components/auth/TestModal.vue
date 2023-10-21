<script setup lang="ts">
import { watch, ref } from "vue"

import Modal from "../commons/Modal.vue"
import Overlay from "../commons/Overlay.vue"

const props = defineProps<{
	modelValue: boolean
	title: string
}>()

const emits = defineEmits<{
	(change: "update:modelValue", value: boolean): void
	(change: "refresh"): void
}>()

watch(
	() => props.modelValue,
	(v) => {
		if (v) {
			console.log("opened")
			loading.value = true
			setTimeout(() => {
				loading.value = false
			}, 1000)
		} else {
			console.log("close")
		}
	}
)

const loading = ref(false)
</script>

<template>
	<Modal
		:title="title"
		:model-value="props.modelValue"
		@update:model-value="
			emits('update:modelValue', $event), emits('refresh')
		"
	>
		<Overlay :show="loading">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id porro
			provident et nulla voluptas nihil inventore unde, nesciunt
			dignissimos eos illo suscipit quasi dolorem laudantium vel magnam?
			Ipsam, nostrum reiciendis!
		</Overlay>
	</Modal>
</template>
