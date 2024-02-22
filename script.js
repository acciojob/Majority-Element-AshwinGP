//your code here
function maj(n)
var ct=0;
var ctt=0;
var ind=0;
var ii=0;
for(var i=0;i<n.length;i++){
	for(var j=i;j<n.length.j++){
		if(n[i]==n[j]){
			ct++
            ind=i;
		}
		}
		if(ct>ctt){
			ctt=ct;
			 ii=ind;
	}
} 
  
var flor=Math.floor(n.length/2);

	return ctt;
}