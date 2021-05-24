module.exports = {
  devServer: {
    before: app => {
      // In production this is done by nginx.
      app.all('/api/*', (req, res, next) => {
        // CORS headers
        res.header('Access-Control-Allow-Origin', '*') // restrict it to the required domain
        res.header(
          'Access-Control-Allow-Methods',
          'GET,PUT,POST,DELETE,OPTIONS'
        )
        // Set custom headers for CORS
        res.header(
          'Access-Control-Allow-Headers',
          'Content-type,Accept,X-Access-Token,X-Key'
        )
        if (req.method === 'OPTIONS') {
          res.status(200).end()
        } else {
          next()
        }
      })

      app.get('/api/classrooms/', (req, res) => {
        const fakeClassrooms = [
          {
            id: 1,
            name: 'First grade 1'
          },
          {
            id: 2,
            name: 'First grade 2'
          },
          {
            id: 3,
            name: 'Second grade 1'
          }
        ]
        return res.send(fakeClassrooms)
      })

      app.get('/api/classrooms/:classroomId', (req, res) => {
        const fakeClassroom = {
          id: req.params.classroomId,
          name: 'First grade 1',
          teacher: {
            id: 1,
            name: 'Awesome teacher'
          }
        }
        return res.send(fakeClassroom)
      })
    }
  }
}
