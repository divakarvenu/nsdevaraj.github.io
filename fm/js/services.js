// app.factory('radioService',function($cordovaFile){
//    var fac = {};
// 	 fac.url='http://164.132.63.75:9998/',
//    fac.name="Chennai FM Rainbow",
//    fac.index=1;
//   fac.allStations=function(){
// 	return [{
//   "name": "Chellam FM ",
//   "url": "http://5.63.145.172:7124/",
//   "image": "http://www.liveonlineradio.net/wp-content/uploads/2014/11/Chellam-FM.jpg",
//   "category": ""
// }, {
//   "name": "Chennai FM Rainbow ",
//   "url": "http://164.132.63.75:9998/",
//   "image": "http://www.ymirchi.com/wp-content/uploads/2015/04/FM-Rainbow-Chennai-Tamil-Live-300x300.png",
//   "category": "Live"
// }, {
//   "name": "CMR Radio ",
//   "url": "http://108.63.21.20:8020/stream/",
//   "image": "https://pbs.twimg.com/profile_images/1760055407/logo-sq_400x400.jpg",
//   "category": "Popular"
// }, {
//   "name": "CTBC Radio",
//   "url": "http://ctbcfmradio.primcast.com:4086/",
//   "image": "http://ctbc.com/ctbcradio/wp-content/themes/asitemplate/images/logo.png",
//   "category": "Popular"
// }, {
//   "name": "Deccan Radio",
//   "url": "http://deccanradio.listenon.in:8300/",
//   "image": "http://www.deccanradio.com/images/medium-logo.gif",
//   "category": "Recent"
// }, {
//   "name": "DJ Siran Tamil FM ",
//   "url": "http://streaming.radionomy.com/DJSiran-Tamil-FM/",
//   "image": "http://static.radio.net/images/broadcasts/d9/1f/9035/c175.png",
//   "category": "Recent"
// }, {
//   "name": "DSR FM Radio",
//   "url": "http://192.235.87.105:15190/",
//   "image": "https://yt3.ggpht.com/-26wsbCwtv6Q/AAAAAAAAAAI/AAAAAAAAAAA/EUZ0VqPETZ4/s100-c-k-no-rj-c0xffffff/photo.jpg",
//   "category": "SAD"
// }, {
//   "name": "Eelam FM ",
//   "url": "http://majestic.wavestreamer.com:2229/",
//   "image": "http://4.bp.blogspot.com/-TIZrm0znEuE/VALfYwKVS_I/AAAAAAAAA24/-F28XjYmfXY/s1600/logo.gif",
//   "category": "SAD"
// }, {
//   "name": "Elurchi FM ",
//   "url": "http://192.240.97.69:9201/stream",
//   "image": "https://lh3.googleusercontent.com/hU8_ozAK4hq2ZvUaV16f55ooWxpW_jrEvaDcCSF9TM6ILF9-MriK01inHrjv2EebPc7O=w300-rw",
//   "category": "SAD"
// }, {
//   "name": "EM Tamil FM ",
//   "url": "http://eu4.fastcast4u.com:5582/",
//   "image": "http://cdn.instructables.com/FXL/HW6J/HH2VUC7N/FXLHW6JHH2VUC7N.LARGE.jpg",
//   "category": "SAD"
// }, {
//   "name": "ETR Music Channel FM ",
//   "url": "http://91.121.134.23:8232/stream/",
//   "image": "http://www.ymirchi.com/wp-content/uploads/2015/04/ETR-Music-Channel-FM-300x300.png",
//   "category": "English"
// }, {
//   "name": "European  FM",
//   "url": "http://174.36.206.197:8052/",
//   "image": "http://cdn.instructables.com/FXL/HW6J/HH2VUC7N/FXLHW6JHH2VUC7N.LARGE.jpg",
//   "category": "English"
// }, {
//   "name": "Ezhisai FM ",
//   "url": "http://37.187.174.88:8078/stream",
//   "image": "https://i3.radionomy.com/radios/400/ae84b092-75d6-466a-9b1c-d767535987a9.png",
//   "category": "TalkShow"
// }, {
//   "name": "Friends Tamil Chat FM",
//   "url": "http://167.114.131.90:5750/",
//   "image": "http://1.bp.blogspot.com/-BgV325-ueCs/VXesLULp6dI/AAAAAAAAAgc/rDZpnFbxyH0/s200/Friends%2BTamil%2BChat%2BFM.png",
//   "category": "TalkShow"
// }, {
//   "name": "Geetham 80s Songs FM ",
//   "url": "http://www.geethamradio.com:8020/80s_hifi.mp3",
//   "image": "http://1.bp.blogspot.com/-rX6GBUc2Xko/U4SU_0aRqTI/AAAAAAAACEc/Voo_vqmJsdY/s1600/tunetamilfm+-+geetham+radio.png",
//   "category": "Period"
// }, {
//   "name": "Geetham FM ",
//   "url": "http://www.geethamradio.com:8020/new_hifi.mp3",
//   "image": "http://1.bp.blogspot.com/-rX6GBUc2Xko/U4SU_0aRqTI/AAAAAAAACEc/Voo_vqmJsdY/s1600/tunetamilfm+-+geetham+radio.png",
//   "category": "Latest"
// }, {
//   "name": "Geetham Old Songs FM ",
//   "url": "http://www.geethamradio.com:8020/old_hifi.mp3",
//   "image": "http://1.bp.blogspot.com/-rX6GBUc2Xko/U4SU_0aRqTI/AAAAAAAACEc/Voo_vqmJsdY/s1600/tunetamilfm+-+geetham+radio.png",
//   "category": "Period"
// }, {
//   "name": "Geetham Party Songs FM ",
//   "url": "http://www.geethamradio.com:8020/party_hifi.mp3",
//   "image": "http://1.bp.blogspot.com/-rX6GBUc2Xko/U4SU_0aRqTI/AAAAAAAACEc/Voo_vqmJsdY/s1600/tunetamilfm+-+geetham+radio.png",
//   "category": "Latest"
// }, {
//   "name": "Geetham Radio",
//   "url": "http://www.geethamradio.com:8020/hifi.mp3",
//   "image": "http://d1i6vahw24eb07.cloudfront.net/s113467q.png",
//   "category": "TalkShow"
// }, {
//   "name": "Geethavani FM",
//   "url": "http://50.7.70.66:8657/",
//   "image": "https://sites.google.com/site/prabhanjamtv/geethavani.jpg",
//   "category": "TalkShow"
// }, {
//   "name": "Gokulam Tamil Radio",
//   "url": "http://94.23.62.189:5250/",
//   "image": "http://static.mytuner.mobi/media/tvos_radios/uVexrX4AmA.jpg",
//   "category": ""
// }, {
//   "name": "Golden FM ",
//   "url": "http://s21.myradiostream.com:8332/",
//   "image": "http://goldfm.lk/images/goldof.png",
//   "category": ""
// }, {
//   "name": "GTBC FM",
//   "url": "http://38.96.148.18:6150/",
//   "image": "http://cdn-radiotime-logos.tunein.com/s123296q.png",
//   "category": ""
// }, {
//   "name": "Harris Jayaraj Radio",
//   "url": "http://66.55.145.43:7440/",
//   "image": "http://diamondtamil.com/radio/images/harris_jayaraj_radio.jpg",
//   "category": "Fans"
// }, {
//   "name": "Hi2 FM ",
//   "url": "http://media3.lankasri.fm/",
//   "image": "http://www.vanakkamcanada.ca/images/stories/articles/hi2fm.jpg",
//   "category": ""
// }, {
//   "name": "Hungama Tamil Classicsal FM",
//   "url": "http://123.176.41.8:8264/",
//   "image": "http://www.diamondtamil.com/radio/images/hungama_tamil_hits_fm.jpg",
//   "category": "Carnatic"
// }, {
//   "name": "Hungama Tamil Hits FM",
//   "url": "http://123.176.41.8:8632/",
//   "image": "http://www.diamondtamil.com/radio/images/hungama_tamil_hits_fm.jpg",
//   "category": "Latest"
// }, {
//   "name": "IBC Tamil UK FM ",
//   "url": "http://38.96.148.226:6176/",
//   "image": "http://www.liveonlineradio.net/wp-content/uploads/2013/11/ibc-tamil.jpg",
//   "category": ""
// }, {
//   "name": "Idhayam FM",
//   "url": "http://192.184.9.158:8329/",
//   "image": "http://static.radio.net/images/broadcasts/5f/21/19001/1/c175.png",
//   "category": ""
// }, {
//   "name": "Ilamai FM Radio",
//   "url": "http://74.50.122.103:7404/",
//   "image": "http://tamilradios.online/images/2014/08/Ilamai-FM.jpg",
//   "category": ""
// }, {
//   "name": "Ilayaraja FM ",
//   "url": "http://108.166.161.221:7154/",
//   "image": "http://static.radio.net/images/broadcasts/16/88/19859/c175.png",
//   "category": "Fans"
// }, {
//   "name": "Ilayaraja Radio",
//   "url": "http://streaming101.radionomy.com/RadionoMiX",
//   "image": "http://d1i6vahw24eb07.cloudfront.net/s166196q.png",
//   "category": "Fans"
// }, {
//   "name": "ILC Tamil FM ",
//   "url": "http://s6.voscast.com:8484/",
//   "image": "http://www.liveonlineradio.net/wp-content/uploads/2014/11/ILC-Tamil-Radio.jpg",
//   "category": "Live"
// }, {
//   "name": "Inba Tamil Oli Radio",
//   "url": "http://192.99.4.210:3246/",
//   "image": "http://www.inbathamil.com.au/inbathamil.png",
//   "category": "Live"
// }, {
//   "name": "Isaiyaruvi FM",
//   "url": "http://162.252.85.85:7150/",
//   "image": "http://www.ymirchi.com/wp-content/uploads/2015/04/IsaiAruvi-Radio-300x300.png",
//   "category": "Live"
// }, {
//   "name": "Red FM Radio",
//   "url": "http://192.99.35.93:6130/",
//   "image": "http://www.adgully.com/image/60064_red-fm.jpg",
//   "category": "Live"
// }];
// 	};
//
//   var fav={};
//   fav.list=[];
//
// 	fac.favourite=function(){
//
//
//     $cordovaFile.checkFile('file:///storage/emulated/0/', "tamilfmfav.json")
//      .then(function (success) {
//
//          $cordovaFile.readAsText('file:///storage/emulated/0', 'tamilfmfav.json')
//          .then(function (success,data) {
//            fav={};
//         //   fav.list=$scope.inputs.readFile;
//         //   alert($scope.inputs.readFile);
//         alert(success);
//         alert(data);
//       //       fav.list=$scope.inputs.readFile;
//     //       alert($scope.inputs.readFile);
//            }, function (error) {
//              // error
//            });
//
//      }, function (error) {
//            $cordovaFile.createFile('file:///storage/emulated/0/', "tamilfmfav.json", true)
//            .then(function (success) {
//              alert('file created');
//            }, function (error) {
//              // error
//            });
//      });
//
//
//
//
//      return {
//        get:function(){
//              // READ
//        $cordovaFile.readAsText('file:///storage/emulated/0', 'tamilfmfav.json')
//          .then(function (success,data) {
//            fav={};
//         //   fav.list=$scope.inputs.readFile;
//         //   alert($scope.inputs.readFile);
//         alert(success);
//         alert(data);
//          }, function (error) {
//            // error
//          });
//
//          return fav.list;
//        },
//        add:function(obj){
//         fav.list.push(obj);
//         //console.log(fav.list.length);
//         $cordovaFile.writeExistingFile(cordova.file.dataDirectory, JSON.stringify(fav), "text")
//         .then(function (success) {
//           alert('new item added');
//             fac.favourite().get();
//           }, function (error) {
//           // error
//           });
//        },
//        delete:function(id){
//         fav.list.splice(id, 1);
//         $cordovaFile.writeExistingFile(cordova.file.dataDirectory, JSON.stringify(fav), "text")
//         .then(function (success) {
//           alert('a item deletd');
//           fac.favourite().get();
//           }, function (error) {
//           // error
//           });
//        }
//      }
//
// 	};
//
// 		fac.playRadio=function(){
// 		 $("#jquery_jplayer_1").jPlayer("setMedia", {
// 			 mp3: fac.url + ";stream/1"
// 		 }).jPlayer("play");
// 	 }
//
//   return fac;
//
// })
