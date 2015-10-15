var repeat = function(string, number){
    
    if(number == 0){
        return "";
    }
    else{
        var longstring = '';
        for(i = 1; i <= number; i++){
            longstring += string;
        }
        return longstring;
        }
}

var join = function(array, delimiter){
    
    var afterstring = '';
    if(delimiter == undefined){
        if(array.length == 0){
            return afterstring;
        }
        else{
            for(i = 0; i < array.length; i++){
                afterstring += array[i];
            }
            return afterstring;
        }
    }
    else{
        if(array.length == 0){
            return afterstring;
        }
        else{
            for(i = 0; i < array.length; i++){
                if(i != 0){
                    afterstring += delimiter;
                }
                afterstring += array[i];
            }
            return afterstring;
        }
    }
}

var sum = function(array){
    
    var aftersum = 0;
    if(array.length == 0){
        return aftersum;
    }
    else{
        for(i = 0; i < array.length; i++){
            aftersum += array[i];
        }
        return aftersum;
    }
}

var paramify = function(hash){
    var hashbrowns = '';
    var hasheesh = 0;
    for(var key in hash){
        var value = hash[key];
        hashbrowns += key;
        hashbrowns += '=';
        hashbrowns += hash[key];
        hasheesh++;
    if(Object.keys(hash).length != hasheesh){
            hashbrowns += '&';
        }
    }
    return hashbrowns;
}