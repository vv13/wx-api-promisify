可能是设计最优雅的微信小程序API的Promise转化方式，支持所有wx对象中以下形式的API接口：
```
| 属性     | 类型     | 默认值 | 是否必填 | 说明                                             |
| -------- | -------- | ------ | -------- | ------------------------------------------------ |
| success  | function |        | 否       | 接口调用成功的回调函数                           |
| fail     | function |        | 否       | 接口调用失败的回调函数                           |
| complete | function |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |
| ...      | ...      |        | 是       | ...                                              |

```

使用Proxy + ES Promise实现，核心代码只有10行，含有 TypeScript 类型定义。

## 安装
```
$ npm i wx-api-promisify
```

## 示例
若您的工程支持，推荐使用async/await。以下为获取用户信息->下载头像->保存到相册的Promise示例：
```
import wxPromise from 'wx-api-promisify'

Page({
  ...
  getUserInfo() {
    const { userInfo: { avatarUrl } } = await wxPromise.getUserInfo()
    const { tempFilePath } = await wxPromise.downloadFile({ url: avatarUrl })
    await wxPromise.saveImageToPhotosAlbum({ filePath: tempFilePath })
  },
})
```
