// globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the 
// PascalCased version of their file name.

import Vue from 'vue'

const requireComponent = require.context(
  '.', // look for all files in the current dir
  false, // do not include subdirectories
  /_base-[\w-]+\.vue$/ // only include "_base-" prefixed .vue files
)

// for each matching file name...
requireComponent.keys().forEach((fileName) => {
  // get the component config
  const componentConfig = requireComponent(fileName)
  // get the PascalCase version of the component name
  const componentName = fileName
    .replace(/^\.\/_/, '') // remove the "./_" from the beginning
    .replace(/\.\w+$/, '') // remove the file extension from the end
    .split('-') // split up kebabs
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1)) // upper case
    .join('') // concatenated

  // globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})