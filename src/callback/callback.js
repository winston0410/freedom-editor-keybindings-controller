const renderNewBlock = (event, currentActiveBlock, editor, createSubBlock) => {
  event.preventDefault()
  if (currentActiveBlock.nextElementSibling) {
    editor.shiftBlockFocus(currentActiveBlock, 'down', currentActiveBlock.nextElementSibling)
    return
  }

  switch (createSubBlock) {
    case true:
      if (!currentActiveBlock.matches('[data-allow-sub-block]')) {
        return
      }

      console.log(editor)
      console.log(currentActiveBlock.dataset.blockType)
      console.log(editor.options.registeredBlocks)
      break

    case false:
      const newBlock = editor.renderBlock(editor.options.defaultBlock)
      editor.shiftBlockFocus(currentActiveBlock, 'down', newBlock)
      break
    default:
  }
}

const removeBlock = (event, currentActiveBlock, editor) => {
  if (event.target.textContent !== '') {
    return
  }

  editor.removeBlock(currentActiveBlock)
  event.preventDefault()
}

const focusAnotherField = (event, currentActiveBlock, editor, focusDirection) => {
  event.preventDefault()
  switch (focusDirection) {
    case 'previous':
      if (currentActiveBlock.previousElementSibling) {
        editor.shiftBlockFocus(currentActiveBlock, 'up', currentActiveBlock.previousElementSibling)
      }
      break

    case 'next':
      if (currentActiveBlock.nextElementSibling) {
        editor.shiftBlockFocus(currentActiveBlock, 'down', currentActiveBlock.nextElementSibling)
      }
      break

    default:
  }
}

const moveFocusedBlock = (event, currentActiveBlock, editor, moveDirection) => {
  event.preventDefault()

  const activeField = document.activeElement

  switch (moveDirection) {
    case 'up':

      if (currentActiveBlock.previousElementSibling) {
        editor.moveBlock(currentActiveBlock, 'up')
        editor.shiftFieldFocus(activeField)
      }
      break

    case 'down':

      if (currentActiveBlock.nextElementSibling) {
        editor.moveBlock(currentActiveBlock, 'down')
        editor.shiftFieldFocus(activeField)
      }
      break

    default:
  }

  // Manually clean userInputCombination, as keyup event is not fired
  // userInputCombination = []
  // console.log(userInputCombination);
}

export {
  renderNewBlock,
  removeBlock,
  focusAnotherField,
  moveFocusedBlock
}
