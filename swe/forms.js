function addUser(){
    document.getElementById('test').innerHTML= "Success!";
    console.log("Success!");
}   
function register(){
    <form action="addUser()">
        <input type="text" name="username" placeholder="Username"/>
        <input type="text" name="password" placeholder="Password"/>
        <input type="submit" value="Register"/>
    </form>
}
function login(){
    
}