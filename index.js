// module.exports = () => {
//   // ...
// };

const path = require('path');
const fs = require('fs');


const absoluteRoute = path.isAbsolute('D:\\USER\\Desktop\\LABORATORIA\\BOG002-Md-links\\archivos\\prueba.md');
console.log('la ruta es absoluta?  ' + absoluteRoute)

const extFile = path.extname(absoluteRoute);
console.log("el archivo es de extensión " + extFile)


// funcion que se encarga de leer los archivos recibiendo como parametro la ruta
//function that is responsible of reading the files receiving as a parameter the path

function readTheFile(path) {
  return new Promise((resolve, reject)=>{
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    })
  })
}

readTheFile(pathFile)
.then((response)=>{
  console.log(response)
})
.catch((err)=>{
  console.log(err)
})




// funcion que se encarga de leer el contenido del directorio recibiendo como parametro la ruta 
//function that is responsible of reading the contents of the directory receiving as a parameter the path

function readDirectory(route){
  return new Promise((resolve, reject)=>{
    fs.readdir(route, 'utf-8', function(err,files){
      if (err) {
        return reject(err);
      }
      resolve(files);
    })
  })

}

readDirectory(routeDir)
.then((response)=>{
  console.log(response)   // the responde is an object with the files inside de directory
})
.catch((err)=>{
  console.log(err)
})

// console.log(global)
