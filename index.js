const proxy = new Proxy(wx || {}, {
  get: (target, property) => {
    return (options) =>
      new Promise((resolve, reject) => {
        target[property](
          Object.assign({}, options, {
            success: resolve,
            fail: reject,
          })
        )
      })
  },
})

export default proxy
