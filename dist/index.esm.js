const e=(e,t)=>e.length===t.length&&e.every((e,o)=>e===t[o]),t=(e,t,o,n)=>{if(e.preventDefault(),t.nextElementSibling)o.shiftBlockFocus(t,"down",t.nextElementSibling);else switch(n){case!0:if(!t.matches("[data-allow-sub-block]"))return;break;case!1:const e=o.renderBlock(o.options.defaultBlock);o.shiftBlockFocus(t,"down",e)}},o=(e,t,o)=>{""===e.target.textContent&&(o.removeBlock(t),e.preventDefault())},n=(e,t,o,n)=>{switch(e.preventDefault(),n){case"previous":t.previousElementSibling&&o.shiftBlockFocus(t,"up",t.previousElementSibling);break;case"next":t.nextElementSibling&&o.shiftBlockFocus(t,"down",t.nextElementSibling)}},i=(e,t,o,n)=>{e.preventDefault();const i=document.activeElement;switch(n){case"up":t.previousElementSibling&&(o.moveBlock(t,"up"),o.shiftFieldFocus(i));break;case"down":t.nextElementSibling&&(o.moveBlock(t,"down"),o.shiftFieldFocus(i))}};class s{constructor(e){const s={keybindings:{newDefaultBlock:{inputCombination:["Enter"],callback:(e,o,n)=>t(e,o,n,!1)},newSubBlock:{inputCombination:["Shift","Enter"],callback:(e,o,n)=>t(e,o,n,!0)},removeBlock:{inputCombination:["Backspace"],callback:o},focusPreviousField:{inputCombination:["ArrowUp"],callback:(e,t,o)=>n(e,t,o,"previous")},focusNextField:{inputCombination:["ArrowDown"],callback:(e,t,o)=>n(e,t,o,"next")},moveFocusedBlockUp:{inputCombination:["Shift","ArrowUp"],callback:(e,t,o)=>i(e,t,o,"up")},moveFocusedBlockDown:{inputCombination:["Shift","ArrowDown"],callback:(e,t,o)=>i(e,t,o,"down")}},debounceLimit:200};if(this.options={...s,...e},void 0===this.options.editor)throw new Error('You need to pass FreedomEditor instance as the value of property "editor" in "options" object.')}init=t=>{const o=[];t.addEventListener("keydown",t=>{const n=t.target.closest("[data-block-type]"),i=this.options.editor;t.repeat||o.push(t.key);for(const s in this.options.keybindings)e(o,this.options.keybindings[s].inputCombination)&&this.options.keybindings[s].callback(t,n,i)}),t.addEventListener("keyup",e=>{const t=o.indexOf(e.key);o.splice(t,1)})}}export{s as FreedomEditorKeyBindings};