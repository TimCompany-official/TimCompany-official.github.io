var e = 0;
function pow2(){
	if (document.getElementById('pass').value == 1234){
		e = confirm("пароль правильний\nввійти на котельню?");
	}else{
		alert("неправильний пароль")
	} 
	if (e){
	alert('вхід виконаний')
	document.location.replace("http://192.168.1.177");

}else{
	alert('щось не так')
}

}

