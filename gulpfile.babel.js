import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import log from 'fancy-log'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import mjml2html from 'mjml'
import { registerComponent } from 'mjml-core'
import MjLayout from './components/MjLayout'
import MjImageText from './components/MjImageText'
import MjBasicComponent from './components/MjBasicComponent'
import HashiHR from './components/hashi-hr'
registerComponent(MjBasicComponent)
registerComponent(MjImageText)
registerComponent(MjLayout)
registerComponent(HashiHR)

// Import and register your components here

const compile = () => {
  const input = process.env.TARGET
  if (!input)
    throw 'must pass TARGET file. e.g., run `TARGET=src/example.mjml npm run start` '
  const end = input.replace(/^.\/src\//, '').replace(/.mjml$/, '')
  console.log(end)
  gulp
    .src(path.normalize('components/**.js'))
    .pipe(babel())
    .on('error', log)
    .pipe(gulp.dest('lib'))
    .on('end', () => {
      fs.readFile(path.normalize(input), 'utf8', (err, data) => {
        if (err) throw err
        const result = mjml2html(data)
        fs.writeFileSync(path.normalize(`./dist/${end}.html`), result.html)
      })
    })
}

gulp.task('build', compile)

gulp.task('watch', () => {
  compile()
  return watch(
    [path.normalize('components/**.js'), path.normalize('index.mjml')],
    compile
  )
})
