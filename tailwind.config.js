module.exports = {
    theme: {
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': 'hsl(228, 25%, 23%)',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
      })
    }
  }