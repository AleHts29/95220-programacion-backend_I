// Etapa 4 (Semana 2): server.js ya no usa http nativo. Ahora importamos
// la app de Express (armada en app.js) y la levantamos con app.listen,
// que internamente crea el servidor http por nosotros.
// Recordá: en ESM los imports locales necesitan la extensión ".js".
import { Server } from 'socket.io'
import { app } from './app.js';
import { config } from './config/config.js';
import { connectDB } from './config/database.config.js';


// Usamos config.port, que ya viene validado (fail-fast) y convertido a
// Number desde config.js. Si PORT no estuviera definido en el .env, el
// proceso ya se habría cortado antes de llegar a esta línea.
const httpServer = app.listen(config.port, () => {
  console.log(`Servidor escuchando en http://localhost:${config.port}`);
});



// Etapa 7 (Semana 6): antes de levantar el servidor HTTP, nos conectamos
// a MongoDB. startServer() es async porque connectDB() usa await por
// dentro: si la conexión falla, connectDB() corta el proceso y
// app.listen ni siquiera llega a ejecutarse.
const startServer = async () => {
  await connectDB();
};

startServer();



// Socket.IO: levantamos un servidor de WebSocket sobre el mismo puerto

const io = new Server(httpServer);

const logs = []; // esto se tiene que migrar a message.model (osea a la DB)
// Abrimos el canal de comunicacion
io.on('connection', (socket) => {


  socket.on("message2", data => {
    console.log(`Mensaje recibido: ${data} de ${socket.id}`)
    logs.push({ socketid: socket.id, message: data })
    io.emit("log", { logs })
  })



})