const { writeResponse } = require('./utilities')

export default function (req, res, next) {
  writeResponse(200, res, 'OK')
}
