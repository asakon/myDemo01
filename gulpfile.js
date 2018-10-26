const gulp = require('gulp')
const  browserSync = require('browser-sync').create()

const browserSyncOption = {
  server: '.'
}

gulp.task('serve', (done) => {
  browserSync.init(browserSyncOption)
  done()
})

gulp.task('watch', (done) => {
  const browserReload = (done) => {
    browserSync.reload()
    done()
  }
  gulp.watch('./dist/**/*', browserReload)
  gulp.watch('index.html', browserReload)
})

gulp.task('default', gulp.series('serve', 'watch'));