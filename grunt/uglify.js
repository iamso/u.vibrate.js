module.exports = {
  options: {
    mangle: {
      except: ['u', 'µ']
    },
    compress: {
      //drop_console: true
    },
    preserveComments: false,
    sourceMap: true
  },
  ujs: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/u.vibrate.js'],
    dest: 'dist/u.vibrate.min.js'
  },
  jquery: {
    options: {
      banner: '<%= banner %>'
    },
    src: ['dist/jquery.vibrate.js'],
    dest: 'dist/jquery.vibrate.min.js'
  }
};
