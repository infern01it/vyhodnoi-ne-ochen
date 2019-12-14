var browserSync = require('browser-sync');
var gulp = require('gulp');

// Browser Synk
gulp.task('browser-sync', function() {
	browserSync({ server: true, notify: false });
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('**/*.css', browserSync.reload);
	gulp.watch('**/*.js', browserSync.reload);
	gulp.watch('**/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
