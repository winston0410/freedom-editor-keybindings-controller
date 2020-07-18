const newDefaultBlock = (event, currentActiveBlock, editor) => {
  event.preventDefault()
  if (currentActiveBlock.nextElementSibling) {
    editor.shiftBlockFocus(currentActiveBlock, 'down', currentActiveBlock.nextElementSibling)
  } else {
    const newBlock = editor.renderBlock(editor.options.defaultBlock)
    editor.shiftBlockFocus(currentActiveBlock, 'down', newBlock)
  }
}

const removeBlock = (event, currentActiveBlock, editor) => {
  if (event.target.textContent !== '') {
    return
  }

  editor.removeBlock(currentActiveBlock)
  event.preventDefault()
}

const focusPreviousField = (event, currentActiveBlock, editor) => {
  event.preventDefault()
  if (currentActiveBlock.previousElementSibling) {
    editor.shiftBlockFocus(currentActiveBlock, 'up', currentActiveBlock.previousElementSibling)
  }
}

const focusNextField = (event, currentActiveBlock, editor) => {
  event.preventDefault()
  if (currentActiveBlock.nextElementSibling) {
    editor.shiftBlockFocus(currentActiveBlock, 'down', currentActiveBlock.nextElementSibling)
  }
}

const moveFocusedBlockUp = (event, currentActiveBlock, editor) => {
  event.preventDefault()
  if (currentActiveBlock.previousElementSibling) {
    editor.moveBlock(currentActiveBlock, 'up')
  }
}

const moveFocusedBlockDown = (event, currentActiveBlock, editor) => {
  event.preventDefault()
  if (currentActiveBlock.nextElementSibling) {
    editor.moveBlock(currentActiveBlock, 'down')
  }
}

export {
  newDefaultBlock,
  removeBlock,
  focusPreviousField,
  focusNextField,
  moveFocusedBlockUp,
  moveFocusedBlockDown
}
