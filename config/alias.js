module.exports.getAlias = function getAlias (dir) {
  return {
    scss: `${dir}/scss`,
    _svg: `${dir}/assets/images/svg`,
    _jpeg: `${dir}/assets/images/jpeg`,
    _utils: `${dir}/utils`,
    _container: `${dir}/containers`,
    _assets: `${dir}/assets`,
    _components: dir + '/components'
  }
}
