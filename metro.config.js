const { getDefaultConfig } = require('metro-config');
const nodeLibs = require('node-libs-react-native');
nodeLibs.vm = require.resolve('vm-browserify');

module.exports = (async () => {
    const {
        resolver: { sourceExts },
    } = await getDefaultConfig();
    return {
        resolver: {
            sourceExts: [...sourceExts, 'cjs'],
            extraNodeModules: nodeLibs,
        },
        transformer: {
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: false,
                },
            }),
        },
    };
})();
