var wallpaper = require('wallpaper');
var axios = require('axios');
var download = require('download-file');

// use axios to get a random dog image from dog.ceo
// use download-file to save the image from the URL
// finally, use wallpaper to set your mac wallpaper to the random image



axios.get('https://dog.ceo/api/breeds/image/random')
  .then(data => {
    var image = data.data.message;
    var options = {
      directory: './img/',
      filename: 'randomDog.jpg'
    };
    // if successful, download the image to the ./img/ folder
    download(image, options, function (err) {
      if (err) throw err
      console.log('Woof!');
      wallpaper.set(options.filename);
    })
  })
