let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let txt = document.getElementById("txtarea");

btn1.onclick = function(){
    let opt1 = ("Once you sucessfully climb up the mountain, you're confronted between the choice of two roads. The road to your lef tis even, steady, and trustworthy looking. While the road to your right is uneven, rocky, and dangeous looking. Do you (1), go down the even and safe looking path, or (2) go down the rocky and dangeous looking path?");
       txtarea.value = opt1
       btn1.onclick = function(){
        let opt1 = ("Walking across the path itself is easy enough, however due to becoming too comfortable you stop paying enough attention to your surroundings. As you get to the end of the path, you find that its a dead end. And behind you, as you come to this point a tree falls and you're stuck. Game over.");
        txtarea.value = opt1
       } 
       btn2.onclick = function(){
           let opt2 = ("As you go down the rocky path, its difficult, however you make it through to a fork in the road. Being at the fork you're presented with two options, you can continue to go on straight, or you can go right. Both area's are densly wooded and you can't remember which one, if either, is the correct path to your grandmothers. Do you (1) go down the right, or do you (2) keep heading straight forward. Please press 1 to go stright forward, and 2 to take the path to the right.");
           txtarea.value = opt2
           btn1.onclick = function(){
               let opt1 = ("Continuing straight ahead, you start to see familiar areas again. There are familiar plants, and slowly you start to see your grandmothers house. Congratulations! You've managed to find your grandmothers house, despite not having a map to do so. You win the game.");
               txtarea.value = opt1
           }
           btn2.onclick = function(){
               let opt2 = ("You head on the path towards the right. Doing so, everything seems to be going well so far, however, you end up in an area that is totally unrecognizeable to you. You start hearing some footsteps throughout the leaves, and end up being surrounded completley by wolves. Eventually, you're eaten alive by the wolves. Game over.");
               txtarea.value = opt2
           }
       } 
}   
btn2.onclick = function(){
    let opt2 = ("As you swim down, the river is longer than you anticipated, and you start to get tired, until you find an area that seems like it's safe to stop and nap to get some stamina back up. You can stop and rest, or you can push through it and keep going. Please press 1 to keep going, and 2 to stop and rest.");
    txtarea.value = opt2
    btn1.onclick = function(){
        let opt1 = ("You decide to keep swimming forward, however as you swim away you realize you cannot turn around, and theres no stop to the river in sight. Over another hour or so of swimming, you still never find a place to stop or rest. Eventually, you end up drowning due to exhaustion. Game over.");
        txtarea.value = opt1
    }
    btn2.onclick = function(){
        let opt2 = ("You decide to stop and rest, initially, it's relaxing and you have a deccent nap. However, when you wake up you're in an unfammliar place. The forest fairies captured you while you were asleep, and decided to imprision you to make for their meal for the next several months. Game over.");
        txtarea.value = opt2
    }
}
