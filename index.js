const proxy = new Proxy(wx || {}, {
  get: (target, property) => {
    if (!Object.prototype.hasOwnProperty.call(target, property)) {
      if (property === '__esModule') return
      throw new ReferenceError(`Property ${property} not exists.`)
    }
    return options =>
      new Promise((resolve, reject) => {
        target[property](
          Object.assign({}, options, {
            success: resolve,
            fail: reject
          })
        )
      })
  }
})

export default proxy
