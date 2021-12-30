alert("You're attempting to get to your grandmothers house for the holidays, usually you would have your trusty map with you However, you seeem to have misplaced your map this time. Due to this you are more or less left to guess your way throughout the forest.");

let climb_or_swim = prompt("Approaching the forest, you can climb the mountain, or swim around it. Please type 1 for climb, and 2 for swim");

if(climb_or_swim == 1 ) {
    let even_or_rocky = prompt("Once you sucesfully climb up the mountain, you're confronted between the choice of two roads. The road to your left being even and steady, and the path to your right being rocky. Please type 1 for the even path, and 2 for the rocky path.");
    if(even_or_rocky == 1){
        alert("Walking across the path itself is easy enough, however due to becoming too comfortable you stop paying enough attention to your surroundings. As you get to the end of the path, you find that its a dead end. And behind you, as you come to this point a tree falls and you're stuck. Game over.");
    } else {
        let straight_or_right = prompt("As you go down the rocky path, its difficult, however you make it through to a fork in the road. Being at the fork you're presented with two options, you can continue to go on straight, or you can go right. Both area's are densly wooded and you can't remember which one, if either, is the correct path to your grandmothers. Do you go down the right, or do you keep heading straight forward. Please type 1 to go stright forward, and 2 to take the path to the right.");
        if(straight_or_right == 1){
            alert("Continuing straight ahead, you start to see familiar areas again. There are familiar plants, and slowly you start to see your grandmothers house. Congratulations! You've managed to find your grandmothers house, despite not having a map to do so. You win the game.");
        } else {
            alert("You head on the path towards the right. Doing so, everything seems to be going well so far, however, you end up in an area that is totally unrecognizeable to you. You start hearing some footsteps throughout the leaves, and end up being surrounded completley by wolves. Eventually, you're eaten alive by the wolves. Game over.");
        }
    }
} else {
    let rest_or_go = prompt("As you swim down, the river is longer than you anticipated, and you start to get tired, until you find an area that seems like it's safe to stop and nap to get some stamina back up. You can stop and rest, or you can push through it and keep going. Please type 1 to keep going, and please type 2 to stop and rest.");
    if(rest_or_go == 1){
        alert("You decide to keep swimming forward, however as you swim away you realize you cannot turn around, and theres no stop to the river in sight. Over another hour or so of swimming, you still never find a place to stop or rest. Eventually, you end up drowning due to exhaustion. Game over.");
    } else {
        alert("You decide to stop and rest, initially, it's relaxing and you have a deccent nap. However, when you wake up you're in an unfammliar place. The forest fairies captured you while you were asleep, and decided to imprision you to make for their meal for the next several months. Game over.");
    }
}
