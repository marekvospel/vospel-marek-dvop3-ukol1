
export default {
  presets: [
    [
      "@babel/env",
      {
        "targets": "> 0.25%, not dead",
        "useBuiltIns": "entry",
        "corejs": "3.6.5"
      }
    ]
  ]
}
