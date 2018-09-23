
const express = require("express");
const fileUpload = require('express-fileupload');

const {writeFileSync, unlinkSync, readFileSync} = require("fs");

const PORT = process.env.PORT || 5000;

const UploadApi = require("./UploadVideo");

require('es6-promise').polyfill()
const fetch = require("isomorphic-fetch");

const ajax = express();

const user = process.env.USER;
const pass = process.env.PASS;

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

ajax.use(fileUpload())
    .use((req, res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

ajax
    .get("/json",({query}, res)=>{
        if (query.artista && query.cancion && query.number && query.access === "data") {
            var file = require("./json/votos.json");
            switch(query.number){
                case "1":
                    file.uno.artista = query.artista;
                    file.uno.cancion = query.cancion;
                    file.uno.voto = `${query.cancion} de ${query.artista}`;
                    file.uno.image = query.image
                    break;
                case "2":
                    file.dos.artista = query.artista;
                    file.dos.cancion = query.cancion;
                    file.dos.voto = `${query.cancion} de ${query.artista}`;
                    file.dos.image = query.image
                    break;
                case "3":
                    file.tres.artista = query.artista;
                    file.tres.cancion = query.cancion;
                    file.tres.voto = `${query.cancion} de ${query.artista}`;
                    file.tres.image = query.image
                    break;
                default:
                    file.uno.artista = query.artista;
                    file.uno.cancion = query.cancion;
                    file.uno.voto = `${query.cancion} de ${query.artista}`;
                    file.uno.image = query.image
                    break;
            }
            let json = JSON.stringify(file);
            writeFileSync(__dirname+"/json/votos.json", json);
            res.status(200).json(json);
        } else if (query.access === "2BuljYzbHPKcNMRIcnDNBGmVj9I02qXqw"){
            res.status(200);
            res.sendFile(__dirname+"/json/votos.json");
        } else {
            res.status(403).send("Acceso No Autorizado");
        }
    })
    .get("/login-admin",(req, res) => {
        let serverUser = req.query.user;
        let serverPass = req.query.pass;

        if (serverUser === user && serverPass === pass) {
            res.send("auth");
        }else if (!serverUser || !serverPass){
            res.status(403).send("<h1 style='text-align:center'>403</h1><hr/><p style='text-align:center'>Acceso no autorizado</p>");
        }else {
            res.send("no-auth");
        }
    })
    .get("/youtube-auth", ({query}, res)=>{
        let code = query.code;
        let dataToSend = `code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=https%3A%2F%2Flavozdeoieniv.herokuapp.com%2Fyoutube-auth&grant_type=authorization_code`;
        console.log(dataToSend);
        fetch("https://accounts.google.com/o/oauth2/token",{
            method:"POST",
            body:dataToSend,
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            access_token = data["access_token"];
            refresh_token = data["refresh_token"];
            setTimeout(()=>{
                access_token = undefined;
                refresh_token = undefined;
            }, data["expires_in"] * 1000);
            res.redirect(301, `https://www.lavozdeoieniv.tk/admin?access_token=${access_token}&refresh_token=${refresh_token}&@cc355_1D=@mn1r1s_@1l3th`)
        }).catch(err=>{
            console.log(`Error = ${JSON.stringify(err)}\n`);
            res.status(err.status).json(err.statusText);
        })
    })
    .post('/upload-video',(req,res) => {
        let EDFile = req.files.file
        var title = req.body.title;
        var description = req.body.description;    
        var access_token = req.body.access_token;
        var refresh_token = req.body.refresh_token;
        let mime;
        switch (EDFile.mimetype) {
            case "video/mp4":
                mime = ".mp4";
                break;
            case "video/3gpp":
                mime = ".3gp";
                break;
            case "video/x-msvideo":
                mime = ".avi";
                break;
            default:
                mime = ".mp4";
                break;
        }
    
        EDFile.mv(__dirname+"/tmp/video"+mime,()=>{
            let API = new UploadApi();
            API.setAccessRefreshToken(access_token, refresh_token);
            return API.uploadVideo(title, description, __dirname+"/tmp/video"+mime); 
        })
    })
    .post("/thumbCreate", (req, res)=>{
        let file = req.files.url;
        var path = __dirname+"/tmp/"+file.name;
        file.mv(path, ()=>{
            let bit = readFileSync(path);
            let data = `data:${file.mimetype};base64,${Buffer.from(bit).toString("base64")}`;

            if (data){
                res.header("Content-Type", "text/plain");
                res.status(200).send(data)
                unlinkSync(path);
            }else {
                res.header("Content-Type", "text/plain")
                res.status(400).send("no-data");
                unlinkSync(path);
            }
        })
    })

ajax.listen(PORT, () => console.log("Escuchando en el puerto " + PORT));
