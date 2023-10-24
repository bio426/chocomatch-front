<script setup lang="ts">
import { ref } from "vue"
import { useField, useForm } from "vee-validate"
import { toTypedSchema } from "@vee-validate/yup"
import { object, string } from "yup"

import authService from "@/services/auth"
import Overlay from "@/components/commons/Overlay.vue"

const loading = ref(false)

// Form
const { errors, defineInputBinds, handleSubmit } = useForm({
	validationSchema: toTypedSchema(
		object({
			email: string().email().required(),
			password: string().required(),
		})
	),
})
const email = defineInputBinds("email")
const password = defineInputBinds("password")

const login = handleSubmit(async (values) => {
	loading.value = true
	await authService.login({ email: values.email, password: values.password })
	loading.value = false
})
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
							v-bind="email"
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
