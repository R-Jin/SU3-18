import cv2 as cv

img = cv.imread('./eye.jpg')
grayScale = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
blurred = cv.GaussianBlur(grayScale, (5, 5), 55)
cv.imwrite('./newImg.jpg', blurred)
