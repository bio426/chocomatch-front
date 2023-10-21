<script setup lang="ts">
import { ref } from "vue"

import Overlay from "@/components/commons/Overlay.vue"

const loading = ref(false)

async function login() {
	loading.value = true
	setTimeout(() => {
		loading.value = false
	}, 1000)
}
</script>

<template>
	<div class="grid place-items-center w-full min-h-screen">
		<div class="w-11/12 max-w-xl">
			<Overlay :show="loading">
				<h1 class="mb-8 text-primary text-4xl font-bold text-center">
					ChocoMatch
				</h1>
				<form @submit.prevent="login">
					<div class="form-control w-full mb-4">
						<label class="label">
							<span class="label-text">Username</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="text"
							placeholder="Type here"
						/>
					</div>
					<div class="form-control w-full mb-4">
						<label class="label">
							<span class="label-text">Phone</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="text"
							placeholder="Type here"
						/>
					</div>
					<div class="form-control w-full mb-4">
						<label class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="text"
							placeholder="Type here"
						/>
					</div>
					<div class="form-control w-full mb-4">
						<label class="label">
							<span class="label-text">Password</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="password"
							placeholder="Type here"
						/>
					</div>
					<div class="form-control w-full mb-8">
						<label class="label">
							<span class="label-text">Confirm Password</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="password"
							placeholder="Type here"
						/>
					</div>
					<input
						class="btn btn-primary btn-wide"
						type="submit"
						value="Login"
					/>
				</form>
			</Overlay>
		</div>
	</div>
</template>
