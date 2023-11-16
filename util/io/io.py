import os
import cv2

def loadImages(dirPath):
    images = []
    with os.scandir(dirPath) as filenames:
        for filename in filenames:
            img = cv2.imread(os.path.join(dirPath, filename.name))
            if img is not None:
                images.append(img)
    return images

def writeImages(dirPath, imgs):
    for i, img in enumerate(imgs, start=1):
        cv2.imwrite(os.path.join(dirPath, 'out' + str(i) + '.jpg'), img)
