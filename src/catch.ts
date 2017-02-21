import { addListenError } from './listenError'

addListenError((e) => {
  console.debug(e)
})
const a = 1
console.log(a)
