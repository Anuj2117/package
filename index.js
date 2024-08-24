import http from "http";
const students = [
  {
    id: 1,
    name: "anuj",
    course: "Computer Science",
  },
  {
    id: 2,
    name: "annu",
    course: "Mathematics",
  },
  {
    id: 3,
    name: "anujj",
    course: "Physics",
  },
  {
    id: 4,
    name: "anupam",
    course: "Chemistry",
  },
];

const port = 4000;
const server = http.createServer((request, response) => {
  if (request.method === "GET") {
    response.writeHead(200, { "content-Type": "application/json" });
    response.end(JSON.stringify(students));
  }
  else if(request.method==="post"){
    let Data="";
    request.on("data", (chunk)=>{
       Data+=chunk.toString();
    });
    request.on("end", ()=>{
        const newStudent=JSON.parse(Data);
        students.push(newStudent);
        response.writeHead(201 , {"content-Type":"application/json"});
        response.end(JSON.stringify(newStudent));
        console.log(newStudent);
    })
  }
});
server.listen(port, () => {
  console.log("port number is " + port);
});
