const  NodeMediaServer  = require('node-media-server');
const port = process.env.PORT || 1935;
const config = {
  rtmp: {
      port: port,
      chunk_size: 60000,
      gop_cache: true,
      ping: 60,
      ping_timeout: 30
  }
  ,
  https: {
      port: 8080,
      allow_origin: '*'
    
  }

};
var nms = new NodeMediaServer(config);
  console.log("open port"+port);
 // nms.stop();
// nms.run();
nms.on('getFilePath', (streamPath, oupath, mp4Filename) => {
  console.log('---------------- get file path ---------------');
  console.log(streamPath);
  console.log(oupath);
  console.log(mp4Filename);
});

nms.on('ready',()=>{
  console.log("ready");
})


nms.on("preConnect", (id, args) => {
    console.log(
      "[NodeEvent on preConnect]2"+  +args  );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postConnect", (id, args) => {
    console.log(
      "[NodeEvent on postConnect]2"    );
  });
  
  nms.on("doneConnect", (id, args) => {
    console.log(
      "[NodeEvent on doneConnect]2" +id   +args);
  });
  
  nms.on("prePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePublish]2"    );
    // Implement authentication for your streamers...
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPublish]2"   +StreamPath );
  });
  
  nms.on("donePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePublish]2"   +StreamPath );
  });
  
  nms.on("prePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePlay]2   " +StreamPath);
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPlay]2"    );
  });
  
  nms.on("donePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePlay]1"   );
  });






  // "name": "rtmp-server",
  // "version": "1.0.0",
  // "description": "",
  // "main": "index.js",
  // "scripts": {
  //   "start": "node index.js",
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },
  // "keywords": [],
  // "author": "",
  // "license": "ISC",
