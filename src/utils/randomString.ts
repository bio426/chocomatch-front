export default function randomString(length: number = 5): string {
	return Math.random().toString(20).substring(2, length)
}
