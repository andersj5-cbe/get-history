var ch = require("copy-history");
var rh = require("read-history");
var fh = require("find-history");

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