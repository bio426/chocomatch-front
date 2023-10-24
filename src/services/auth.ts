import base from "./main"

const prefix = "auth"

async function login(payload: { email: string; password: string }) {
	const res = await base.post(prefix + "/login", {
		json: payload,
	})

	return res.status
}

export default {
	login,
}
