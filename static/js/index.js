eel.expose(say_hello_js); // Expose this function to Python

function say_hello_js(x) {
  console.log("Hello from " + x);
}
  
say_hello_js("Javascript World!");
eel.say_hello_py("Javascript World!"); // Call a Python function

async function pick_file() {
    let folder = document.getElementById('input-box').value;
    let file_div = document.getElementById('file-name');
    
    // Call into Python so we can access the file system
    let random_filename = await eel.pick_file(folder)();
    file_div.innerHTML = random_filename;
}

function handleFileSelect (e) {
  var files = e.target.files;
  if (files.length < 1) {
      alert('select a file...');
      return;
  }
  var file = files[0];
  var reader = new FileReader();
  reader.onload = onFileLoaded;
  reader.readAsDataURL(file);
}

function onFileLoaded (e) {
  var match = /^data:(.*);base64,(.*)$/.exec(e.target.result);
  if (match == null) {
      throw 'Could not parse result'; // should not happen
  }
  var mimeType = match[1];
  var content = match[2];
  alert(mimeType);
  alert(content);
}

window.onload = function () {
  /*$('#import-button-id').click(function(e) {
      $('#file-input').click();
  });
  */
  document.querySelector('#fromFile').addEventListener('change', handleFileSelect);
  document.querySelector('#toFile').addEventListener('change', handleFileSelect);
};
