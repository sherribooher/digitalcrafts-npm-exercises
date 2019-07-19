var wallpaper = require('wallpaper');
var axios = require('axios');
var download = require('download-file');

// use axios to get a random dog image from dog.ceo
// use download-file to save the image from the URL
// finally, use wallpaper to set your mac wallpaper to the random image

var options = {
  directory: './img/',
  filename: 'randomDog.jpg'
};

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(data => {
    var img = data.data.message;
    download(img, options, function (err) {
      if (!err) {
        (async () => {
          await wallpaper.set(img);
        })
      } else {
        console.log(err);
      }
    })
  })

