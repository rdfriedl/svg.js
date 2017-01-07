export const callbacks = []
export function loaded(){
	for(let i in callbacks)
		callbacks[i]()
}

// just in case no one calls it, call it the next step
setTimeout(loaded, 0)
