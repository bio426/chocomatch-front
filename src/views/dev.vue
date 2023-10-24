<script setup lang="ts">
import { ref } from "vue"

import devService from "@/services/dev"
import TestModal from "@/components/auth/TestModal.vue"

const modalt = ref(false)

function ttest() {
	console.log("should refresh")
}
async function getCo() {
	await devService.getCookie()
}

async function verifyCo() {
	const value = await devService.verifyCookie()
	console.log(value)
}
</script>

<template>
	<div class="w-full min-h-screen">
		<hr class="my-4" />
		<button class="btn" @click="getCo">Get Cookie</button>
		<button class="btn" @click="verifyCo">Verify Cookie</button>
		<hr class="my-4" />
		<button class="btn btn-warning" @click="modalt = !modalt">
			show modal
		</button>
		{{ modalt }}
		<TestModal title="gaaa" v-model="modalt" @refresh="ttest" />
	</div>
</template>
