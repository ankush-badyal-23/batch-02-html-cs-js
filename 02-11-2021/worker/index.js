if(Worker) {
    const slave = new Worker('./worker.js');

    slave.postMessage(['Start', 'work']);

    slave.onmessage = (e) => {
        console.log('slave responded with ', e.data);
        slave.terminate();
    }
}