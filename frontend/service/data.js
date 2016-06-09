let errHandler = err => {
    showdev(err);
};

let token = 'secret';
export default {
    get(url) {
            return new Promise((resolve, reject) => {
                let timeId = setInterval(() => {
                    console.log('Loading..');
                }, 10);
                fetch(url, {
                        headers: {
                            "x-access-token": token
                        }
                    })
                    .then(res => {
                        return res.json();
                    }, errHandler)
                    .then(data => {
                        clearInterval(timeId);
                        showdev(data);
                        resolve(data);
                    });
            });
        },
        post(url, data, method = "POST") {

            return new Promise((resolve, reject) => {
                let timeId = setInterval(() => {
                    console.log('Loading..');
                }, 10);
                fetch(url, {
                        headers: {
                            "x-access-token": token
                        },
                        body: data,
                        method: method
                    })
                    .then(res => {
                        return res.json();
                    }, errHandler)
                    .then(data => {
                        clearInterval(timeId);
                        showdev(data);
                        resolve(data);
                    });
            });
        }
};
