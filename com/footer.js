const yo = require('yo-yo')
const renderHomeIcon = require('../com/icons/home')

// exported api

module.exports = function renderHeader () {
  return yo`
    <footer class="module">
      <nav>
        <a href="https://github.com/beakerbrowser/fritter">What is Fritter?</a>
        <a href="dat://beakerbrowser.com">Learn more about Beaker</a>
        <a href="https://github.com/beakerbrowser/fritter">View Source</a>
      </footer>
    </header>
  `
}