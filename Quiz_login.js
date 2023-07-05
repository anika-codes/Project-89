function add_user(){
    user_name1 = document.getElementById("Player_1").value;
    user_name2 = document.getElementById("Player_2").value;

    localStorage.setItem("user1",user_name1);
    localStorage.setItem("user2",user_name2);

    window.location = "game_page.html"

}