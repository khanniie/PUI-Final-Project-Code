---
title: "mldraw Drawing Tool"
path: "/mldraw"
date: "Spring 2019 - Spring 2020"
coverImage: "../images/mldraw_thumb.jpg"
coverVideo: "../assets/mldraw.mp4"
author: "Elliot"
excerpt: 'Mldraw is a new vector drawing tool that lets you play with machine learning! Users can mix cats, anime, Pikachu, handbags, imagined buildings and more.'
tags: ["rob____ot", "hello friend"]
links: ""
readMoreButton: "See documentation"
order: 2
---
# About
Mldraw is a new vector drawing tool that lets you play with machine learning! Users can mix cats, anime, Pikachu, handbags, imagined buildings and more.
Mldraw is a web app that uses a layered vector drawing system where each layer can be given a different machine learning model that translates user input. The user will give us a line drawing of edges, and our app's backend server renders the translation using whatever model is assigned to that layer.
Furthermore, we've also made it easy to import custom ML models for researchers so that they can use our tool to experiment with their models!
Made in collaboration with [Aman Tiwari](http://www.aman.work/)!
I designed and built the UI using HTML/CSS/Typescript, and I also worked on the drawing and layer functionality, such as the
vector drawing, drag and dropping objects, layer building, etc.
Mldraw’s interface is inspired by cute, techy/anti-techy retro aesthetics, such as the work of Sailor Mercury and the Bubblesort Zines.  We wanted it to be fun, novel, exciting and differentiated from the world of arxiv papers.
Mldraw was born out of seeing the potential of the body of research done using pix2pix to turn drawings into other images and the severe lack of a usable, “useful” and accessible tool to utilize this technology.

# Videos

<iframe class="iframe-560h" src="https://player.vimeo.com/video/321893512" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<iframe class="iframe-620h" src="https://player.vimeo.com/video/378759111" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

# Still in progress
We have a great demo, but have plans to bug-test, add more exciting ML models and features, and deploy at mldraw.com. We're also still experimenting and making big changes to the UI / UX! More documentation coming soon.
![edges2pikachu example](../images/mldraw/mldraw_beforeafter.jpg) *Left: User line drawing, Right: rendered version. Combined pikachu model and handbag model*

# Implementation
Mldraw is implemented as a Typescript frontend using choo.js as a UI framework, with a Python registry server and a Python adapter library, along with a number of instantiations of the adapter library for specific models.
The frontend communicates with the registry server using socket.io, which then passes to the frontend a list of models and their URLs. The frontend then communicates directly to the models.  This enables us e.g. to host a registry server for Mldraw without having to pay the cost of hosting every model it supports.
Mldraw also supports models that run locally on the client (in the above video, the cat, Pikachu and bag models run locally, while the other models are hosted on remote servers).
In service of the above desire to make Mldraw extensible, we have made it easy to add a new model – all that is required is some Python interface to the model, and to define a function that takes in an image and returns an image. Our model adapter will handle the rest of it, including registering the model with the server hosting a Mldraw interface.

# Progress Documentation

<video autoplay loop muted poster="../images/mldraw/mldraw_sequence.jpg">
    <source src="../images/mldraw/mldraw_sequence.mp4">
</video>

## CSS animations
![render button interaction gif](../images/mldraw/button-interactions.gif)*Examples of small css animated interactions, Left: tooltip + pop animation on hover + lingering expansion until unhover, Middle: render button disappears when canvas in use, fades back in when done, Right: render button spins while rendering*



![toolbar interaction gif](../images/mldraw/toolbar.gif)*toolbar animations: nod when usable, shake when unusable for that model*
