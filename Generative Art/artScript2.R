library(mathart)
library(ggforce)
library(Rcpp)
library(tidyverse)

x <- sample(1:10000, 500, replace=F)
y <- sample(1:10000, 250, replace=F)

points <- data.frame(x, y)
result <- kdtree(points)

p <- ggplot() +
  geom_segment(aes(x, y, xend = xend, yend = yend), result, linetype=1, size = 1.5, colour ="red") +
  geom_point(data = result, aes (x, y), shape=9, color="darkred", size=3) + 
  coord_equal() + 
  xlim(0, 10000) + ylim(0, 10000) +
  theme_blankcanvas(margin_cm = 0, bg_col ="aquamarine")

ggsave("kdtree2.png", p, width = 20, height = 20, units = "in")

