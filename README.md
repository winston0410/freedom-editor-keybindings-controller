# Freedom Editor Keybindings Controller

[![License](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/github/license/winston0410/freedom-editor) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/82be88673d684012ad90d83c4ed12c6e)](https://www.codacy.com/manual/winston0410/freedom-editor-keybindings-controller?utm_source=github.com&utm_medium=referral&utm_content=winston0410/freedom-editor-keybindings-controller&utm_campaign=Badge_Grade) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/freedom-editor-keybindings-controller/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/freedom-editor-keybindings-controller?targetFile=package.json) [![Maintainability](https://api.codeclimate.com/v1/badges/d63de116e1d0f9364a53/maintainability)](https://codeclimate.com/github/winston0410/freedom-editor-keybindings-controller/maintainability)

A controller to apply custom keybindings to blocks for controlling their behaviors.

## Installation

```
npm i @freedom-editor/keybindings-controller
```

## Usage

### Step 1: Import the controller

Import this controller to the script where you configurate Freedom Editor.

```
import {
  FreedomEditorKeyBindings
} from '@freedom-editor/keybindings-controller'
```

### Step2: Hook the controller to blocks

Hook this controller to the Freedom Editor instance in `FreedomEditorInstance.init()`. The controller will then apply to all blocks.

```
const editor = new FreedomEditor({
  containerId: 'freedom-editor',
  //Options here...
  }
})

editor.init([
  //Hook controllers here
  new FreedomEditorKeyBindings({

  })
])
```

You can also hook this controller to block instance. The controller will then apply to specific block only.

```
import { Paragraph } from '@freedom-editor/lighterhtml-paragraph-block'

const paragraphBlock = new Paragraph({
  controllers: [
    //Hook controllers here
    new FreedomEditorKeyBindings({

    })
  ]
})
```

## API Reference

TODO

## License

This project is licensed under the MIT License - see the [license](https://github.com/winston0410/freedom-editor/LICENSE.md) for more details.
