module.exports.getAlias = function getAlias(dir) {
  return {
    scss: `${dir}/scss`,
    _helpers: `${dir}/helpers`,
    _svg: `${dir}/assets/svg`,
    _utils: `${dir}/utils`,
    _configs: `${dir}/configs`,
    _assets: `${dir}/assets`,
  }
}
