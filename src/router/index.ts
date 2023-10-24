import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/index.vue"),
		},
		{
			path: "/dev",
			name: "dev",
			component: () => import("../views/dev.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../views/auth/login.vue"),
		},
		{
			path: "/register",
			name: "auth-register",
			component: () => import("../views/auth/register.vue"),
		},
	],
})

export default router
