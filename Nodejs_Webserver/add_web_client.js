var http = require('http');
var fs = require('fs');
var path = require('path');

// Options to be used by request 
var options = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'
};

// Callback function to deal with response
var callback = function(response) {
    var body = '';

    response.on('data', function(data) {
        body += data;
    });

    response.on('end', async function() {
        try {
            // Modify the content by appending additional content
            var additionalContent = '<p>This is additional content added to the file.</p>';
            var modifiedContent = body + additionalContent;

            // Save the modified content to a temporary file
            fs.writeFileSync('temp.html', modifiedContent);

            // Dynamically import the 'open' module
            const { default: open } = await import('open');

            // Automatically open it in the default web browser
            open(path.join(__dirname, 'temp.html'));
        } catch (err) {
            console.error("Error:", err);
        }
    });
};

// Make a request to the server
var req = http.request(options, callback);

// Error handling for the request
req.on('error', function(err) {
    console.error("Request Error:", err);
});

req.end();
