const DEVELOPMENT = {
  publicPath: '/',
}

const PRODUCTION = {
  publicPath: '/thhmoc67-info-web/',
}

const envConfig = (env) => {
  switch (env) {
    case 'development': return DEVELOPMENT
    case 'production': return PRODUCTION
    default: return DEVELOPMENT
  }
}

export default envConfig
