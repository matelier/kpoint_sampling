set size 1,1
set xrange[-pi:pi]
set yrange[-1.6:3.1]
unset key
#unset ytics
set xtics 0,0,0
set ytics 0,0,0
set tics font "Sans, 16"
plot sin(x) lt 1 lc 3 lw 2, sin(2*x) + 1.0 lt 1 lc 3 lw 2, sin(3*x) + 2.0 lt 1 lc 3 lw 2
pause(-1)
replot sin(0.5*x) - 0.5 lt 2 lc 4 lw 2, sin(1.5*x) + 0.5 lt 2 lc 4 lw 2, sin(2.5*x) + 1.5 lt 2 lc 4 lw 2
pause(-1)
