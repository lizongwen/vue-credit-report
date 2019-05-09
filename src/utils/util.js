export default function timeFix() {
	const time = new Date()
	const hour = time.getHours()
	return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
}
export function handleScrollHeader(callback) {
	let timer = 0

	let beforeScrollTop = window.pageYOffset
	callback = callback || function () { }
	window.addEventListener(
		'scroll',
		event => {
			clearTimeout(timer)
			timer = setTimeout(() => {
				let direction = 'up'
				const afterScrollTop = window.pageYOffset
				const delta = afterScrollTop - beforeScrollTop
				if (delta === 0) {
					return false
				}
				direction = delta > 0 ? 'down' : 'up'
				callback({ direction, currentTop: afterScrollTop })
				beforeScrollTop = afterScrollTop
			}, 10)
		},
		false
	)
}
export function triggerWindowResizeEvent() {
	const event = document.createEvent('HTMLEvents')
	event.initEvent('resize', true, true)
	event.eventType = 'message'
	window.dispatchEvent(event)
}