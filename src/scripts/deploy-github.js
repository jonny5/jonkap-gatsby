const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/jonny5/jonny5.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
