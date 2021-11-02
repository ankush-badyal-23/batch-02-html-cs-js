onmessage= (e) => {
    console.log('slave is at your service');
    console.log(e.data, e);
    console.log(Math.PI, new Date());
    postMessage(Math.PI * Math.random() * (+new Date()));

    close();
}