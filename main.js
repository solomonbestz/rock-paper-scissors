
const computer_score = document.getElementById('computer-score')
const player_score = document.getElementById('player-score')
const display_computer_choice = document.getElementById('computer-choice')
const display_user_choice = document.getElementById('user-choice')
const computer_image_src = document.getElementById('computer_img')
const player_image_src = document.getElementById('player_img') 
const result_display = document.getElementById('result')
const possible_choices = document.querySelectorAll(".button")
const computer_play_choice = ['Rock', 'Paper', 'Scissors']
const player_img = ["right_rock.jpg", "right_paper.jpg", "right_scissors.jpg"]
const computer_img = ["left_rock.jpg", "left_paper.jpg", "left_scissors.jpg"]

let player_count = 0
let computer_count = 0
let user_choice
let computer_choice


possible_choices.forEach(possible_choice => possible_choice.addEventListener('click', (e) => {
    user_choice = e.target.id 
    display_user_choice.innerHTML = user_choice
    generate_computer_choice()
    change_img()
    checkwin()
}))


function change_img(){
    if(user_choice == "Scissors"){
        player_image_src.src = player_img[2]
    }
    if(user_choice == "Paper"){
        player_image_src.src = player_img[1]
    }
    if(user_choice == "Rock"){
        player_image_src.src = player_img[0]
    }
}


function generate_computer_choice(){
    const random_num = Math.floor(Math.random() * possible_choices.length)
    computer_choice = computer_play_choice[random_num]
    computer_image_src.src = computer_img[random_num]
    display_computer_choice.innerHTML =  computer_choice
}

function checkwin(){
    if(user_choice === computer_choice){
        result_display.innerHTML = "Tie !!!"
    }
    else if(((user_choice === "Scissors") && (computer_choice === "Paper")) || ((user_choice === "Rock") && (computer_choice === "Scissors")) || ((user_choice === "Paper") && (computer_choice === "Rock"))){
        result_display.innerHTML = "User Win🎉🎉🎉"
        player_count += 1
        player_score.innerHTML = player_count
    }
    else {
        result_display.innerHTML = "Computer Win🎉🎉🎉"
        computer_count += 1
        computer_score.innerHTML = computer_count
    }
}
