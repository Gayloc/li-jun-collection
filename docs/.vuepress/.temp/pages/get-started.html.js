import comp from "C:/Users/gu186/git-repositories/li-jun-collection/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"❗观前说明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"❗观前说明\",\"description\":\"观前须知的一些内容\"},\"headers\":[{\"level\":2,\"title\":\"收录内容\",\"slug\":\"收录内容\",\"link\":\"#收录内容\",\"children\":[]},{\"level\":2,\"title\":\"内容更新\",\"slug\":\"内容更新\",\"link\":\"#内容更新\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
