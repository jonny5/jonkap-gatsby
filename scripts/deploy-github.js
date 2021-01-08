const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:jonny5/jonny5.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
