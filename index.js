var _array = [];
var _tmp_array=[];
var _select_array=[];
function __isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
function __isObj(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function __isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function __isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
}

function __selectArr(json,keyName,type) {
    if (__isArray(json)) {
        json.map(function(item) {
            __selectArr(item, keyName,type)
        });
    }
    if (__isObj(json)) {
        for (key in json) {
            var obj = json[key];
            console.log(key);
            if (key === keyName) {
                //找到了
                switch (type) {
                case 'self':
                    //取出包含key的本身
                    _tmp_array.push(json);
                    break;
                case 'value':
                    //取出值
                    _tmp_array.push(obj);
                    break;
                default:
                    _tmp_array.push(obj);
                    //取出值
                    break;
                }
            } else {
                __selectArr(obj, keyName,type)
            }
        }
    }
}
module.exports = {
    set: function(arr) {
        if (__isArray(arr)) {
            _array = arr;
        } else {
            _array = [arr];
        }
        return this;
    },
    clear: function() {
        _array = [];
        _select_array=[];
        return this;
    },
    select: function(keyName, type) {
        _tmp_array=[];
        __selectArr(_array,keyName,type);
        _select_array=_tmp_array;
        _array=_select_array;
        return this;
    },
    join:function(arr){
        var _arr=[];
        if (__isArray(arr)) {
            _arr = arr;
        } else {
            _arr = [arr];
        }
        _arr.map(function(item){
            _array.push(item);
        });
        return this;
    },
    toArray: function() {
        return _array;
    }
}