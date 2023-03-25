const fs = require("fs");
const File = require("../models/File");
const config = require("config");
const { join, resolve, sep } = require("path");

const filePath = join(resolve(), "files");

class FileService {
  createDir(file) {
    const path = `${filePath}${sep}${sep}${file.user}${sep}${sep}${file.path}`;

    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
          return resolve({ message: "File was created" });
        } else {
          return reject({ message: "File already exists" });
        }
      } catch (e) {
        return reject({ message: "File error" });
      }
    });
  }
}

module.exports = new FileService();
