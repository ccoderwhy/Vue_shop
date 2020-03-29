// 发布阶段移除所有的console
const prodPlugins = []
if(process.env.NODE_ENV ==='production'){
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
      // 发布阶段时的插件数组
      ...prodPlugins
  ]
}
