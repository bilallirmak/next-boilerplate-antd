Promise.prototype.toArray = function() {
  return this.then((data) => {
    return [null, data];
  }).catch((err) => {
    return [err, undefined];
  })
}
