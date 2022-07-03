import { exec } from 'child_process'

export function execCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(stderr || error)
      resolve({
        stderr: stderr || '',
        stdout: stdout || '',
      })
    })
  })
}
