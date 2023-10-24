import ky from "ky"

import config from "../config"

const base = ky.extend({
	prefixUrl: config.API_URL,
	credentials: "include",
})

export default base
