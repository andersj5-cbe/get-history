var ch = require("copy-history");
var rh = require("read-history");
var fh = require("find-history");

/**
* Fetchs history from target computer for specified user profile.
* @params {String} computer - the name of the target device
* @params {String} user - the name of the user account on target device
* @params {callbackFunction} callback - the function to perform after iterations are finished
*/
function getHistory(computer,user,cb){      
    fh (computer,user,function(err,file){
        if(err) cb(err);
        if(file){
            ch(file,function(err,newFile){
                if(err) cb(err);
                rh(newFile,function(err,history){
                    if(err) cb(err);
                    cb(null,history);
            });
        });
    }
    });
}

module.exports = getHistory;
