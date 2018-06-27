module.exports = {
    prompts: {
        name: {
            message: 'What is the name of the micro-service',
            default: ':folderName:',
            filter: val => val.toLowerCase()
        },
        description: {
            message: 'How would you descripe the new micro-service?',
            default: 'my micro-service'
        },
        username: {
            message: 'What is your GitHub username?',
            default: ':gitUser:',
            filter: val => val.toLowerCase(),
            store: true
        },
        email: {
            message: 'What is your GitHub email?',
            default: ':gitEmail:',
            store: true
        },
        website: {
            message: 'The URL of your website?',
            default: 'http://hkube.io',
            store: true
        }
    },
    skipInterpolation: [
        'template/**'
    ],
    move: {
        'gitignore': '.gitignore',
    },
    post(context) {
        context.npmInstall([
            '@hkube/config',
            "@hkube/etcd",
            "@hkube/logger",
            "@hkube/metrics",
            "@hkube/redis-utils",
            "@hkube/rest-server"
        ])
    },
    showTip: true,
    gitInit: true,
    installDependencies: true
}