<script setup lang="ts">
import { ref } from "vue"

import TestModal from "@/components/auth/TestModal.vue"

const modalt = ref(false)

function ttest() {
	console.log("should refresh")
}
</script>

<template>
	<div class="w-full min-h-screen">
		dev
		<hr />
		<button class="btn btn-warning" @click="modalt = !modalt">
			show modal
		</button>
		{{ modalt }}
		<TestModal title="gaaa" v-model="modalt" @refresh="ttest" />
	</div>
</template>
