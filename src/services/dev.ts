import base from "./main"

const prefix = "auth"

async function getCookie() {
	const res = await base.post(prefix + "/setcookie", {})

	return res.status
}

async function verifyCookie() {
	const res = await base.get(prefix + "/verifycookie", {})

	return res.json<{
		value: string
	}>()
}

export default {
	getCookie,
	verifyCookie,
}
