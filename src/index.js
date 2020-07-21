import {
  debounce,
  isArrayIdentical
} from './utilities/helper.js'

import {
  renderNewBlock,
  removeBlock,
  focusAnotherField,
  moveFocusedBlock
} from './callback/callback.js'

class FreedomEditorKeyBindings {
  constructor (customOptions) {
    const defaultOptions = {
      keybindings: {
        newDefaultBlock: {
          inputCombination: ['Enter'],
          callback: (event, currentActiveBlock, editor) => renderNewBlock(event, currentActiveBlock, editor, false)
        },
        newSubBlock: {
          inputCombination: ['Shift', 'Enter'],
          callback: (event, currentActiveBlock, editor) => renderNewBlock(event, currentActiveBlock, editor, true)
        },
        removeBlock: {
          inputCombination: ['Backspace'],
          callback: removeBlock
        },
        focusPreviousField: {
          inputCombination: ['ArrowUp'],
          callback: (event, currentActiveBlock, editor) => focusAnotherField(event, currentActiveBlock, editor, 'previous')
        },
        focusNextField: {
          inputCombination: ['ArrowDown'],
          callback: (event, currentActiveBlock, editor) => focusAnotherField(event, currentActiveBlock, editor, 'next')
        },
        moveFocusedBlockUp: {
          inputCombination: ['Shift', 'ArrowUp'],
          callback: (event, currentActiveBlock, editor) => moveFocusedBlock(event, currentActiveBlock, editor, 'up')
        },
        moveFocusedBlockDown: {
          inputCombination: ['Shift', 'ArrowDown'],
          callback: (event, currentActiveBlock, editor) => moveFocusedBlock(event, currentActiveBlock, editor, 'down')
        }
      },
      debounceLimit: 200 // ms
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }
  };

  init (editorInstance, renderedBlock) {
    const userInputCombination = []

    renderedBlock.addEventListener('keydown', (event) => {
      const currentActiveBlock = event.target.closest('[data-block-type]')

      if (!event.repeat) {
        userInputCombination.push(event.key)
      }

      for (const keybinding in this.options.keybindings) {
        if (isArrayIdentical(userInputCombination, this.options.keybindings[keybinding].inputCombination)) {
          this.options.keybindings[keybinding].callback(event, currentActiveBlock, editorInstance)
        }
      }
    })

    renderedBlock.addEventListener('keyup', (event) => {
      const currentKeyIndex = userInputCombination.indexOf(event.key)

      userInputCombination.splice(currentKeyIndex, 1)
    })
  }
}

export {
  FreedomEditorKeyBindings
}
