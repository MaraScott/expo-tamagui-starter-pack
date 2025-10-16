const path = require('path')
const { getDefaultConfig } = require('expo/metro-config')

const projectRoot = __dirname

const config = getDefaultConfig(projectRoot)

config.resolver.extraNodeModules = {
  '@app': path.resolve(projectRoot, '.'),
  '@atoms': path.resolve(projectRoot, 'src/atoms'),
  '@molecules': path.resolve(projectRoot, 'src/molecules'),
  '@organisms': path.resolve(projectRoot, 'src/organisms'),
  '@templates': path.resolve(projectRoot, 'src/templates'),
  '@pages': path.resolve(projectRoot, 'src/pages'),
}

module.exports = config
