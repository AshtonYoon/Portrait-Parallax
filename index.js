screenWidth = screen.width
screenHeight = screen.height

centerX = screenWidth / 2
centerY = screenHeight / 2

face1 = document.getElementById('face1')
face2 = document.getElementById('face2')
eye = document.getElementById('eye')
hair = document.getElementById('hair')
hair2 = document.getElementById('hair2')
hair3 = document.getElementById('hair3')
chin = document.getElementById('chin')
cheek = document.getElementById('cheek')

face1X = 0
face1Y = 0

face2X = 0
face2Y = 0

eyeX = 0
eyeY = 0

hairX = 0
hairY = 0

hair2X = 0
hair2Y = 0

hair3X = 0
hair3Y = 0

cheekX = 0
cheekY = 0

moveImages = function () {
    face1.style.transform = `translateZ(0px) translate(${face1X}px, ${face1Y}px)`
    face2.style.transform = `translateZ(0px) translate(${face2X}px, ${face2Y}px)`
    eye.style.transform = `translateZ(0px) translate(${eyeX}px, ${eyeY}px)`
    hair.style.transform = `translateZ(0px) translate(${hairX}px, ${hairY}px)`
    hair2.style.transform = `translateZ(0px) translate(${hair2X}px, ${hair2Y}px)`
    hair3.style.transform = `translateZ(0px) translate(${hair3X}px, ${hair3Y}px)`
    cheek.style.transform = `translateZ(0px) translate(${cheekX}px, ${cheekY}px)`
}

document.onmousemove = function (e) {
    var x = e.clientX
    var y = e.clientY

    var distanceX = x - centerX
    var distanceY = y - centerY

    face1X = distanceX / 60
    face1Y = distanceY / 60

    face2X = distanceX / 180
    face2Y = distanceY / 180

    eyeX = distanceX / 140
    eyeY = distanceY / 140

    hairX = distanceX / 100
    hairY = distanceY / 100

    hair2X = distanceX / 70
    hair2Y = distanceY / 70

    hair3X = distanceX / 100
    hair3Y = distanceY / 100

    cheekX = distanceX / 100
    cheekY = distanceY / 100

    window.requestAnimationFrame(moveImages)
}