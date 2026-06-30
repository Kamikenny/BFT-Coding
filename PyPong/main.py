import pygame
from CONST import WIDTH, HEIGHT

# Initialization
pygame.init()
screen = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
running: bool = True
dt: float = 0

while running:
    # QUIT handling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill("black")

    #

    # flip() the display to put your work on screen
    pygame.display.flip()

    # limits fps to 60
    # dt is delta time in seconds since last frame, used for framerate-
    # independent physics.
    dt = clock.tick(60) / 1000 

pygame.quit()