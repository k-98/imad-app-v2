var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one': {
    
    title:'Article One|Kishan Tiwari',
    heading:'Article One',
    date:'jun 25 1995',
    content:` <p> This my Birthday Date               </p>`
},
 'article-two' :{
    title:'Article Two|Tony Tiwari',
    heading:'Article Two',
    date:'Sep 4 1997',
    content:`<p>This my Younger brother BirthDay date</p>`
},
 'article-three' : {
    title:'Article Two|Neha tiwari',
    heading:'Article Three',
    date:'Dec 17 1994',
    content:`<p>This my Elder sister BirthDay date</p>`
}
};


function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading = data.heading;
    var content= data.content;
        var htmlTemplate=
        `<html>
            <head>
                <title>${title}</title>
                <meta name ="viewport" content = "width=device-width,initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
            <div class ="container">
                <div>
                    <a href = "/">Home</a>
                </div>
                    <hr/>
                    <div>
                        <h3>${heading}</h3>
                    </div>
                    <hr/>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleNames', function (req, res) {
    var articleNames = req.params.articleNames;
  res.send(createTemplate(articles[articleNames]));
});

app.get('/ui/madi.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
