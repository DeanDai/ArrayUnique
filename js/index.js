// 1. 复杂度最高, 使用indexOf
Array.prototype.unique1 = function() {
	var n = [];
	for(var i=0; i<this.length; i++){
		var posInArr = n.indexOf(this[i]);
		if(posInArr === -1) { //如果当前值不在新数组里面，push
			n.push(this[i]);
		}
	}
	return n;
}

// 2. 使用indexOf,从第二项开始
Array.prototype.unique2 = function(){
	var n = [this[0]]; // 将数组第一项赋值给新数组
	for(var i=1; i<this.length; i++){
		var posInSelf = this.indexOf(this[i]);
		if(posInSelf === i){ //如果当前值在数组中的位置就是当前的位置，push
			n.push(this[i]);
		}
	}
	return n;
}

// 3. 使用hash
Array.prototype.unique3 = function()  
{  
    var n = {}, r = [], len = this.length, val, type;  
    for (var i = 0; i < len; i++) {  
        val = this[i];  
        type = typeof val;  
        if (!n[val]) {  
            n[val] = [type];  
            r.push(val);  
        } else if (n[val].indexOf(type) < 0) {  
            n[val].push(type);  
            r.push(val);  
        }  
    }  
    return r;  
} 

// 4. 先排序，再比较相邻
Array.prototype.unique4 = function() {
	this.sort();
	var r = [this[0]];
	for(var i=1; i<this.length; i++){
		if(this[i] !== r[r.length-1]){
			r.push(this[i]);
		}
	}
	return r;
}

// 5. 利用sort比较相邻两位, 再切割重复数值
Array.prototype.unique5 = function() {
	var self = this;
	var _a = this.concat().sort();
	_a.sort(function(a, b){
		if(a === b) {
			var n = self.indexOf(a);
			self.splice(n, 1);
		}
	});
	return self;
}

// 6. 利用reduce方法，设置初始值为空数组
Array.prototype.unique6 = function()
{
    return this.reduce(function(p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
    }, []); // 第二个参数一定要加，不然p不是数组
};

