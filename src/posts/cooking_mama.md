---
title: "Cooking Mama Inspired Arduino controllers"
path: "/cooking-game"
date: "Fall 2018"
coverImage: "../images/cooking_mama.jpg"
coverVideo: "../assets/cooking_mama.mp4"
author: "Elliot"
excerpt: 'Unity and Arduino version of popular game Cooking Mama. Made felt fabric controllers shaped like food and put sensors in them. Tweet received over half a million views on Twitter.'
tags: ["rob____ot", "hello friend"]
links: "on Twitter,https://twitter.com/crabbage_/status/1072711212016828416"
readMoreButton: "Learn more"
order: 6
---

# About
A Unity and Arduino version of popular game Cooking Mama! I made two felt fabric controllers (one spam, one steak) shaped like food and put sensors in them.
When I first learned how to use an Arduino, one of my first instincts was to connect it with Unity. At first, I had trouble coming up with an idea for a unity + arduino experience
that would leverage the advantages of both. Ultimately, I was inspired by Cooking Mama, a game that I had loved in my childhood. I was excited by
the idea of enhancing the game experience with a physical controller. How will a felt knife and a felt steak compare to a Nintendo stylus? Will it make it more fun? Will it be the same?
I love the idea of making alternative experiences, and this was a way of exploring that.
Thank you to Sidney Church for helping me connect the Arduino to unity and for all of the Arduino help!


![example gif 1](../images/cooking-mama/meat-salad.gif)
![example img](../images/cooking-mama/meat-salad.jpg)


<iframe width="640" height="360" src="https://www.youtube.com/embed/a2O5I6Tr3ms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Documentation pictures & Code
The look of the felt fabric food controllers was inspired by Lucy Sparrow's Sparrow Mart, a supermarket made up of food made from felt.
You can find the code [here](https://github.com/khanniie/unity-arduino-cooking-mama).
The steak controller contains six buttons attached to a breadboard. On top of the buttons, I laid flat acrylic boards that I cut into sections so that the buttons could have a greater
range of influence. The spam contains a photocell that can tell when you remove the meat, and the bowl also contains a photocell to detect when the meat is placed inside.
For the unity part, I am sending the information from the Arduino to serial port, which unity then reads from.
![diagram of work](../images/cooking-mama/meat-salad-diagram.jpg)
![diagram of work](../images/cooking-mama/meat-salad-documentation.jpg)
<em>left: the felt steak and fabric parts, right: developing with arduino</em>
    
