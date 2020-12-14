---
title: "Other work"
path: "/other"
date: ""
coverImage: "../images/old_work.jpg"
coverVideo: "../assets/old_work.mp4"
author: "Elliot"
excerpt: 'A collection of older or smaller projects.'
tags: ["rob____ot", "hello friend"]
links: ""
readMoreButton: "See older projects"
order: 11
---

# TartanHacks: Oink Accessibility Chrome extension
<p class="date">Spring 2019</p>

**A collaboration between Megan Ung, Kearnie Lin and Kimberly Lo**

This project won the Google Accessibility Award at TartanHacks. It's a chrome extension that uses computer vision to auto-generate missing alt tags for images, hide sensitive content, etc.

Oink won the Google Accessibility Award at TartanHacks! Oink is a Chrome extension with a suite of web accessibility tools. It uses computer vision to auto-generate missing alt tags for images, hides sensitive content, makes font sizes bigger, and alerts users when sound is
playing on a webpage. All of these functionalities are included, but can be toggled on and off based on user needs.
For this project, I worked in a team of 4, with Kearnie Lin, Megan Ung and Kimberly Lo. I designed and built the UI; I also set up the socket.io backend that's being used to perform the calls to Google Cloud Vision.
<div class="fill-row">
    <div class="flex-item-start"><img src="../images/oink/oink1.png"/></div>
    <div class="flex-item"><img src="../images/oink/oink2.png"/></div>
</div>
<em>left: popup menu in chrome, right: our icon in the toolbar</em>

![image of interface](../images/oink/oink6.png)*image of interface*
## Adding in missing alt tags
Alt tags are important components of images on the internet for those who use screenreaders to browse the web. However, websites sometimes don't include alt tags for these images, leaving the screenreader-reliant user unable to
know what the content of the image is. We realized that we could use modern computer vision techniques to remedy this; our chrome extension looks for images that are missing alt tags, and sends those images
to our backend through socket.io, which then sends the image through Google Cloud's computer vision to be labeled. We then add in these content labels as alt tags. This socket.io backend was being run continuously on my
Digital Ocean server.
Below is a webpage without our extension. It doesn't have alt tags on its images. With our extension turned on, alt tags have been applied to the image!
<div class="fill-row">
    <div class="flex-item-start"><img src="../images/oink/oink8.png"/></div>
    <div class="flex-item"><img src="../images/oink/oink7.png"/></div>
</div>

## Sensitive Content Filter
Using the same techniques as described above, we can determine what the content of an image is. The web can be difficult for those who are especially sensitive to certain content,
so we allow the user to give us a list of tags to watch for. We will then hide images that match those tags.
<div class="fill-row">
    <div class="flex-item-start"><img src="../images/oink/oink6.png"/></div>
    <div class="flex-item"><img src="../images/oink/oink5.png"/></div>
</div>

## More!
Our app can also increase font size, make links more visible, and alert you if there's sound playing on a page.

## Future Goals
![future goals](../images/oink/oink-future.png)*future goals*
## At the Hackathon!
![presenting](../images/oink/tartanhacks-prog.jpg)*Our team presenting our project!*

<div class="br-medium"></div>
<hr/>

# Pixel Art TSNE and DCGAN
<p class="date">Fall 2018</p>

**I datascraped ~5000 pixel icons from Deviantart and then extracted feature vectors from them, which were used to put them into a grid of nearest neighbors. I also used DCGAN to generate new pixel icons.**

## Inspiration
With this project, I wanted to computationally analyze and recreate Deviantart art because I had been a very active member of Deviantart in my middle school days and
thought that it would be a nice tribute to those days. I choose pixel icons specifically because of their uniform style and nostalgic value (for me, at least). Because a lot of the work was a little computationally heavy, I remotely ran most of
my code on a computer hosted in CMU's Studio for Creative Inquiry. I had been reading a good amount of papers about machine learning and wanted to really play around with topics related to what I had been reading about. I created this project during the first third of my independent study class.
## Scraping for Images
I used Node.js to grab roughly 5000 images using the Deviantart API, querying for square pixel images with a certain amount of likes that had been marked by their creator as "downloadable."
![deviantart pixel](../images/pixel/devpix.gif)
## Feature extraction and Tsne
In a Jupyter Notebook, I used Pytorch's pretrained VGG16 model to extract feature vectors from all of my images. This allowed me to get the
"nearest neighbors" of any given pixel icon. Shown below are examples of the nearest neighbor finding. The top/larger image was the origin image and the
five images below are its nearest neighbors.
<div class="fill-row">
    <div class="flex-item-start"><img src="../images/pixel/neighbor1.png"/></div>
    <div class="flex-item"><img src="../images/pixel/neighbor2.png"/></div>
    <div class="flex-item"><img src="../images/pixel/neighbor3.png"/></div>
    <div class="flex-item"><img src="../images/pixel/neighbor4.png"/></div>
    <div class="flex-item"><img src="../images/pixel/neighbor5.png"/></div>
</div>

Then, I could use run tsne on these images to plot them by feature vector. I also used
an updated (Python 3) implementation of Raster Fairy to turn the 2D point cloud into a grid. Below is the result on a smaller (2000 images) subset of pixels.
![tsne](../images/pixel/2000_set_grey.png)

## DCGAN
I used an implementation of DCGAN that I found [here](https://github.com/eriklindernoren/PyTorch-GAN) to generate more.
They turned out looking a little like pixel mush, so I tried messing around with the learning rate / number of epochs. The results still weren't as good as I was hoping,
but I learned a lot about GANs and machine learning during this whole process and am really happy that I did this project.

<div class="fill-row">
    <div class="flex-item-start"><img src="../images/pixel/dcgan1.gif" alt="dcgan res 1"/></div>
    <div class="flex-item"><img src="../images/pixel/dcgan2.gif" alt="dcgan res 2"/></div>
    <div class="flex-item"><img src="../images/pixel/dcgan-big.gif"/></div>
</div>
<div class="fill-row">
    <div class="flex-item-start"><img src="../images/pixel/60800.png" alt="dcgan res 1"/></div>
    <div class="flex-item"><img src="../images/pixel/combined-dcgan.jpg" alt="dcgan res 2"/></div>
</div>

<div class="br-medium"></div>
<hr/>

# HackMIT: ResQ 
<p class="date">Fall 2018</p>

Won HackMIT IBM sponsor award. A all-in-one disaster preparedness + relief tool for both individuals and rescue orgs.

<img src="../images/misc/resq-thumb.jpg" style="max-width:412px"/>

## About
Made at 2018 HackMIT, won the Best Disaster Preparedness & Relief Solutions for IBM Call for Code Challenge award!
An all-in-one disaster preparedness + relief tool.
People can access free information about potential and
ongoing disasters as well as giving rescue teams and aid organizations to assess needs
for each specific event using Google analytics and location data.
It has a working implementation of an IBM Watson natural language processing data pipeline
that analyses real-time Twitter data to predict disaster damage better that the Federal Emergency Management Agency (FEMA).
I made the user registration / login flow, the user dashboard and on the Firebase user information storing and retrieval.
## DEVPOST POST [HERE](https://devpost.com/software/disaster-rescue-github-io)

<div class="br-medium"></div>
<hr/>

# Secret Base AR
<p class="date">Spring 2018</p>

**Using distinctive images (posters, stickers, wall patterns) from real life, users can build “secret bases” that will pop up any time the app detects those images. These bases will be stored and can be sent to the users’ friends through a friend code.** 

<iframe width="640" height="360" src="https://www.youtube.com/embed/Vk_ZJ2VbFUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## About
Using distinctive images (posters, stickers, wall patterns) from real life, users can build “secret bases” that will pop up any time the app detects those images. These bases will be stored and can be sent to the users’ friends through a friend code. These friends also have the ability to see and modify the same structure if they are within proximity of the same image.
I created this project to explore the idea of digital intimacy and friendship; I was interested in internet-based relationship dynamics and wanted to prototype a way to share a personal space digitally.
All the furniture was textured with hand-painted watercolor textures, and the “sharing” aspect uses both Firebase authorization for user sign in and Firebase’s database to remember base information. The AR was made using vuforia’s cloud database and extended tracking.

![image](../images/secretbase/secretbase.jpg)*furniture in Unity environment*

<div class="fill-row">
    <div class="flex-item-start"><img src="../images/secretbase/ar-secret-base.gif"/></div>
    <img class="flex-item" src="../images/secretbase/sb-collab.gif"/>
</div>
<em>left: AR tree and tables, right: treehouse shared with friend's phone, both can view and edit the same structure</em>

<div class="br-medium"></div>

## The Process
I started with concept artwork. With AR secret bases, the bases are located forever where their "image target" exists and are
only accessible to those who have been invited, kind of like a secret treehouse club.
![concept art](../images/secretbase/arbase-concept.jpg)
I began by working on integrating Firebase user auth and database into Unity. 

I then started building the Unity environment, which I wanted to use my own textures for. I had considered using premade assets, but wanted
my final result to have a more distinctive look. I watercolored my textures in my sketchbook, scanned them in, made a bump map using photoshop and then textured the objects.

For the basic grid and block placing implementation, the blocks had to snap to the grid and be able to be stacked upon each other. Furthermore, I wanted to have a square
that would indicate where the next block would be placed down if the user would press "place."

<div class="fill-row">
<div class="flex-item-start"><img src="../images/secretbase/firebase.png"/></div>
<div class="flex-item"><img src="../images/secretbase/brick-demo.gif"/></div>
</div>

I then integrated the block system into the AR part. For each image target I loaded into Vuforia, I gave it a unique id that would later be used to map the image target to them
furniture data stored in Firebase.

Then, I worked on getting the firebase details correct. I was able to send and retrieve data, and authorize users, but I didn’t have a structured way of implementing my idea yet.

Overall, this was a hard and time-consuming project for me, but I learned a lot about Unity, AR and Firebase in the process.

Although it could be cleaned up a lot, I was really happy with how it turned out and was happily surprised by how functional it was.

Thank you to: Nitesh for helping me document, Rain for being the best 15-251 partner, Sophia C. for being a Very Good Buddy, Golan Levin for providing wonderful advice, and Claire for her advice on the watercolor textures!

<div class="br-medium"></div>
<hr/>


# Weekly deliverables
<p class="date">Spring 2018</p>

**For the first half of Golan Levin's Spring 2018 Interactivity and Computation course, we produced weekly deliverables.**

## Aesemic Writing (maze writing)
For this assignment, I imagined an alien civilization that spoke in riddles and wrote in mazes. I created a "maze language" where each letter is mapped to a maze fragment and put together.
The resulting "maze" is then carved using the union find algorithm so that it will be a real maze. My resulting mazes were drawn onto paper using the Axidraw plotter.
<div id="illustrations">
    <img src="../images/60212/aesemic3.jpg"/>
    <img src="../images/60212/aesemic2.gif"/>
    <img src="../images/60212/aesemic3.gif"/>
</div>
<em>Process sketches / pseudocode, including the conversion from letter to maze piece</em>

<div class="fill-row">
    <div class="flex-item-start"><img src="../images/60212/pathcarving.png"/></div>
    <div class="flex-item"><img src="../images/60212/pathcarving-after.png"/></div>
</div>

## Speech (Word sentiment flower)
Using a speech sentiment library and p5.speech, I analyze the sentiment of
the user's speech and the flower will grow or wilt according to the sentiment. For example,
bad dirt" will cause it to wilt while "happy flower" will cause it to grow.
I also used rita.js to give extra impact for rhymes. The flower is drawn using p5.js!
![flower](../images/60212/flower.gif)

## Motion Capture Metaballs
I hooked up mocap data to a three.js metaball demo to create mocap metaball figures!
<div class="fill-row">
    <div class="flex-item-start"><img src="../images/60212/mocap.gif"/></div>
    <div class="flex-item"><img src="../images/60212/mocap2.gif"/></div>
</div>

## Animated Loop
An animated loop made in Processing.
![animated loop](../images/60212/animated_loop.gif)

## Caffeine Bot
Caffeine bot tracks how long you have until you need to recaffinate!
![Caffeine bot](../images/60212/caffine_bot.gif)

<div class="br-medium"></div>
<hr/>

# Bot-a-razzi
<p class="date">Fall 2017</p>

<iframe width="640" height="360" src="https://www.youtube.com/embed/R-ySfk5PLh8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Final concept studio project; worked in a team of 4. Floating robots follow the user around in this VR experience built for the Google Cardboard using Aframe.js. The robot "view" info is sent to a different screen that projects a fake instagram profile with the video stream. I worked on the projections, sending and retrieving the data using Firebase. I also 3d modeled some of the models included and built the fake social media pages and their fake chat streams.

![botarazzi image 1](../images/botarazzi/cityconcept-thumb.jpg)*above: concept art by me for bot-a-razzi.*
![botarazzi image 1](../images/botarazzi/bot-a-razzi-long.png)*above: baby room (there are three rooms) in bot-a-razzi.*
