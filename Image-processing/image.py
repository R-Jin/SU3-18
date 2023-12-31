import cv2 as cv
import numpy as np
from scipy.signal import correlate
from util.io.io import loadImages, writeImages

INPUT_IMGS_PATH = './input_imgs'
OUTPUT_IMGS_PATH = './output_imgs'

def inputImage(imagePath):
    img = cv.imread(imagePath)
    img = cv.cvtColor(src=img, code=cv.COLOR_BGR2GRAY)
    return img

def convolve2D(image, kernel, padding=0, strides=1):
    # Cross Correlation
    kernel = np.flipud(np.fliplr(kernel))

    # Gather Shapes of Kernel + Image + Padding
    xKernShape = kernel.shape[0]
    yKernShape = kernel.shape[1]
    xImgShape = image.shape[0]
    yImgShape = image.shape[1]

    # Shape of Output Convolution
    xOutput = int(((xImgShape - xKernShape + 2 * padding) / strides) + 1)
    yOutput = int(((yImgShape - yKernShape + 2 * padding) / strides) + 1)
    output = np.zeros((xOutput, yOutput))

    # Apply Equal Padding to All Sides
    if padding != 0:
        imagePadded = np.zeros((image.shape[0] + padding*2, image.shape[1] + padding*2))
        imagePadded[int(padding):int(-1 * padding), int(padding):int(-1 * padding)] = image
        print(imagePadded)
    else:
        imagePadded = image

    # Iterate through image
    for y in range(image.shape[1]):
        # Exit Convolution
        if y > image.shape[1] - yKernShape:
            break
        # Only Convolve if y has gone down by the specified Strides
        if y % strides == 0:
            for x in range(image.shape[0]):
                # Go to next row once kernel is out of bounds
                if x > image.shape[0] - xKernShape:
                    break
                try:
                    # Only Convolve if x has moved by the specified Strides
                    if x % strides == 0:
                        output[x, y] = (kernel * imagePadded[x: x + xKernShape, y: y + yKernShape]).sum()
                except:
                    break

    return output

kernel = np.array([[1, 1, 1], [1, -6, 1], [1, 1, 1]])
# image = inputImage('eye.jpg')
imgs = loadImages(INPUT_IMGS_PATH)

outImgs = []

for img in imgs:
    grayScaled = cv.cvtColor(img, code=cv.COLOR_BGR2GRAY)
    outImgs.append(grayScaled)

writeImages(OUTPUT_IMGS_PATH, outImgs)
