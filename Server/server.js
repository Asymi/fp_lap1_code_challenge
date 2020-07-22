const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
server.use(cors());
server.use(bodyParser.text());

const port = 3000;

const results = [
    {url: "https://getfutureproof.co.uk/", title: "Futureproof", bodyText: "That's why we're launching futureproof, a free coding and business school designed to empower the next generation of software engineers. After 13 weeks..."},
    {url: "https://github.com/", title: "GitHub", bodyText: "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team ..."},
    {url: "https://www.youtube.com/", title: "YouTube", bodyText: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube."},
    {url: "https://www.bbc.co.uk/sport", title: "BBC Sport", bodyText: "Breaking news & live sports coverage including results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the ..."},
    {url: "https://www.bbc.co.uk/news", title: "BBC News", bodyText: "Visit BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and ..."},
    {url: "https://www.facebook.com/", title: "Facebook", bodyText: "Create an account or log in to Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."},
    {url: "https://www.instagram.com/", title: "Instagram", bodyText: "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."},
    {url: "https://www.office.com/", title: "Office 365", bodyText: "Collaborate for free with online versions of Microsoft Word, PowerPoint, Excel, and OneNote. Save documents, spreadsheets, and presentations online, ..."},
    {url: "https://www.netflix.com/gb/", title: "Netflix", bodyText: "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."},
    {url: "https://www.amazon.co.uk/", title: "Amazon", bodyText: "Sign up to Amazon Prime for unlimited free delivery. Low prices at Amazon on digital cameras, MP3, sports, books, music, DVDs, video games, home & garden ..."}
]

// Home page
server.get('/', (req, res) => res.send("Hello!"));

// Results page (the one with 10)
server.get('/results', (req, res) => res.send(results));

// Random individual page
server.get('/random', (req, res) => res.send(randomFunc()));

function randomFunc() {
    let rand = Math.floor(Math.random() * results.length);
    return results[rand]
}

// Page page (the single one)
server.get('/page', (req, res) => res.send("Hello Again!"));

// Testing our server
server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`))
