<script setup lang="ts">
import { ref } from "vue"
import { useField } from "vee-validate"
import { object, string } from "yup"

import Overlay from "@/components/commons/Overlay.vue"

const loading = ref(false)

async function login() {
	loading.value = true
	setTimeout(() => {
		loading.value = false
	}, 1000)
}

// Form
const { value: email, ...emailField } = useField(
	"email",
	string().email().required()
)
const { value: password, ...passwordField } = useField<string>(
	"password",
	string().required()
)
</script>

<template>
	<div class="w-full min-h-screen">
		<div class="w-11/12 mx-auto my-12">
			<h1 class="mb-8 text-primary text-4xl font-bold text-center">
				ChocoMatch
			</h1>
			<Overlay :show="loading">
				<form @submit.prevent="login">
					<div class="form-control w-full mb-4">
						<label class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="text"
							placeholder="Type here"
							v-model="email"
						/>
					</div>
					<div class="form-control w-full mb-8">
						<label class="label">
							<span class="label-text">Password</span>
						</label>
						<input
							class="input input-bordered w-full"
							type="password"
							placeholder="Type here"
							v-bind="password"
						/>
					</div>
					<div class="mb-4 text-secondary text-center text-sm">
						You don't have an account?
						<router-link
							class="underline"
							:to="{ name: 'auth-register' }"
						>
							Register
						</router-link>
					</div>
					<input
						class="btn btn-primary btn-block"
						type="submit"
						value="Login"
					/>
				</form>
			</Overlay>
		</div>
	</div>
</template>
