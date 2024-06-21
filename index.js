const  NodeMediaServer  = require('node-media-server');



const config = {
  rtmp: {
      port: 1935,
      chunk_size: 60000,
      gop_cache: true,
      ping: 60,
      ping_timeout: 30
  },
  http: {
      port: 8000,
      allow_origin: '*'
  }
};
var nms = new NodeMediaServer(config);
  nms.run();

  

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
      "[NodeEvent on preConnect]"    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postConnect", (id, args) => {
    console.log(
      "[NodeEvent on postConnect]"    );
  });
  
  nms.on("doneConnect", (id, args) => {
    console.log(
      "[NodeEvent on doneConnect]" +id   );
  });
  
  nms.on("prePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePublish]"    );
    // Implement authentication for your streamers...
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPublish]"    );
  });
  
  nms.on("donePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePublish]"    );
  });
  
  nms.on("prePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePlay]   " );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPlay]"    );
  });
  
  nms.on("donePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePlay]",    );
  });






