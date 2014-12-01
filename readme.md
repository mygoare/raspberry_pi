#把 树莓派 改装 成 音乐 闹钟

#定时执行

export EDITOR=vim

`crontab -e`

每天早上8点

0 8 * * * /usr/bin/node /home/pi/music/omxdirector.js

#关闭音乐

`sh stop.sh`
