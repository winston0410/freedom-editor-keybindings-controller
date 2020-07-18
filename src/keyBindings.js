import {
  debounce,
  isArrayIdentical
} from "./utilities/helper.js"

import {
  newDefaultBlock,
  removeBlock,
  focusPreviousField,
  focusNextField,
  moveFocusedBlockUp,
  moveFocusedBlockDown
} from "./callback/callback.js"

class FreedomEditorKeyBindings {
  constructor (customOptions) {
    const defaultOptions = {
      keybindings: {
        newDefaultBlock: {
          inputCombination: ['Enter'],
          callback: newDefaultBlock
        },
        removeBlock: {
          inputCombination: ['Backspace'],
          callback: removeBlock
        },
        focusPreviousField: {
          inputCombination: ['ArrowUp'],
          callback: focusPreviousField
        },
        focusNextField: {
          inputCombination: ['ArrowDown'],
          callback: focusNextField
        },
        moveFocusedBlockUp: {
          inputCombination: ['Shift', 'ArrowUp'],
          callback: moveFocusedBlockUp
        },
        moveFocusedBlockDown: {
          inputCombination: ['Shift', 'ArrowDown'],
          callback: moveFocusedBlockDown
        }
      },
      debounceLimit: 200 //ms
    }

    this.options = {
      ...defaultOptions,
      ...customOptions
    }

    if (this.options.editor === undefined) {
      throw new Error('You need to pass FreedomEditor instance as the value of property "editor" in "options" object.')
    }
  };

  init = (renderedBlock) => {

    const userInputCombination = []

    renderedBlock.addEventListener('keydown', (event) => {

      const currentActiveBlock = event.target.closest('[data-block-type]')
      const editor = this.options.editor

      if (!event.repeat) {
        userInputCombination.push(event.key)
      }

      for (const keybinding in this.options.keybindings) {

        if (isArrayIdentical(userInputCombination, this.options.keybindings[keybinding].inputCombination)) {
          this.options.keybindings[keybinding].callback(event, currentActiveBlock, editor)
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
