/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
//const translatte = require('translatte');
const config = require('../config');

//============================== LYRICS =============================================
//const axios = require('axios');
//const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
//const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
//const { exchangeRates } = require('exchange-rates-api');
//const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
//const fs = require('fs');
//const https = require('https');
//const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
//const ytdl = require('ytdl-core');
//const ffmpeg = require('fluent-ffmpeg');
//const yts = require( 'yt-search' )
//const got = require("got");
//const ID3Writer = require('browser-id3-writer');
//const SpotifyWebApi = require('spotify-web-api-node');

//const spotifyApi = new SpotifyWebApi({
//    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
//    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
//});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
//const Glang = Language.getString('github');
//const Slang = Language.getString('lyrics');
const Clang = Language.getString('khatib');

//const wiki = require('wikijs').default;
//var gis = require('g-i-s');


if (config.WORKTYPE == 'private') {


//old Asena.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
    Asena.addCommand({pattern: "khatib ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
//old                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const respo = await got("https://gsx2json.com/api?id=1jRhLk8IcEf8kL46DbROpmd8hlLzJoG9p349IgHWK9qU&q=20210607").then(async ok => {
                    const resp = JSON.parse(ok.body);
//old                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
                    await message.reply(`🌍 *Khutbah As Salaam PUPR*\n🌐 *Hari:* ${resp.columns.hari} ${resp.columns.tanggal} \n\n☠️ *Pembicara:* ${resp.columns.khatib}\n⚕️ *Tema:* ${resp.columns.temakhutbah}`);

 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }

        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));

}
else if (config.WORKTYPE == 'public') {


    Asena.addCommand({pattern: "khatib ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
//old                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const respo = await got("https://gsx2json.com/api?id=1jRhLk8IcEf8kL46DbROpmd8hlLzJoG9p349IgHWK9qU&q=20210607").then(async ok => {
                    const resp = JSON.parse(ok.body);
//old                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
                    await message.reply(`🌍 *Khutbah As Salaam PUPR*\n🌐 *Hari:* ${resp.columns.hari} ${resp.columns.tanggal} \n\n☠️ *Pembicara:* ${resp.columns.khatib}\n⚕️ *Tema:* ${resp.columns.temakhutbah}`);

 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }

        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));



//old Asena.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
    Asena.addCommand({pattern: "khatib ?(.*)", fromMe: true, desc: Clang.COV_DESC, dontAddCommandList: true}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
//old                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                const respo = await got("https://gsx2json.com/api?id=1jRhLk8IcEf8kL46DbROpmd8hlLzJoG9p349IgHWK9qU&q=20210607").then(async ok => {
                    const resp = JSON.parse(ok.body);
//old                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
                    await message.reply(`🌍 *Khutbah As Salaam PUPR*\n🌐 *Hari:* ${resp.columns.hari} ${resp.columns.tanggal} \n\n☠️ *Pembicara:* ${resp.columns.khatib}\n⚕️ *Tema:* ${resp.columns.temakhutbah}`);

 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }

        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
}
