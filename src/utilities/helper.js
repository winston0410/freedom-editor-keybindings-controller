const debounce = (callback, wait) => {
  let timeout
  return (...args) => {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(context, args), wait)
  }
}

const isArrayIdentical = (arrayToCheck, arrayToCheckWith) => {
  if (arrayToCheck.length !== arrayToCheckWith.length) {
    return false
  }

  return arrayToCheck.every((currentItem, currentItemIndex) => currentItem === arrayToCheckWith[currentItemIndex])
}

export {
  debounce,
  isArrayIdentical
}
