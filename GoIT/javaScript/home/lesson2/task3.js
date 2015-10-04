/**
 * Created by Elena on 10/4/2015.
 */
var userLogin = prompt('?????????? ??????? ?????');
if( userLogin === 'admin'){
    var userPassword = prompt('?????????? ??????? ??????');
    if(userPassword == 'passw0rd'){
        alert('Welcome home!');
    }else if(userPassword == null){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
}else if( userLogin == null){
    alert('Canceled');
}else{
    alert('Access denied');
}
