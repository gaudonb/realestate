var initOptions = {
    // global event notification;
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            //
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};

var pgp = require('pg-promise')(initOptions);

var db =  {
    connection: pgp('postgresql://GaudonB:password@localhost:5432/webd4201_db'),
    getListings: function(){
        return this.connection.task(async(t) =>{
            let a = await t.any('SELECT * from courses');
            return a;
        })
    }

};

db.connection.connect()
    .then(obj => {
        obj.done(); // success, release the connection;
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });

module.exports = db;