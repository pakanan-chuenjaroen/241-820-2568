// ทำการ import http สร้าง sever
const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่าเริ่มต้น sever เปิดใข้งาน เว็บผ่านเบราว์เซอร์ ที่ localhost:8000

const requireListener = function(req, res){
    res.writHead(200);
    res.end('My First Server! ');
}

//run Sever
const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
 