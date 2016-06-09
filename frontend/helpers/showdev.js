module.exports = function (data, showAlert = false, callback) {
    if (NODE_ENV === 'development') {
        console.log(data)
        if (showAlert) {
            alert(data);
        }
        if (callback){
        	callback();
        }
    }
}