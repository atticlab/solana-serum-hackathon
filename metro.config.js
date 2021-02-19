const {getDefaultConfig} = require('metro-config');
const nodeLibs = require('node-libs-react-native');
nodeLibs.vm = require.resolve('vm-browserify');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    resolver: {
      sourceExts: [...sourceExts, 'cjs', 'svg'],
      extraNodeModules: nodeLibs,
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
  };
})();
