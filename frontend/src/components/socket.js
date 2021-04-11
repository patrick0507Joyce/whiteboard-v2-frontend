import io from 'socket.io-client'

const ENDPOINT = 'https://whiteboard-v2.herokuapp.com/';

let socket = io(ENDPOINT, { transports: ['polling', 'websocket'] });

export default socket;