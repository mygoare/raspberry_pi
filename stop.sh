kill $(ps aux | grep omx | grep -v grep | awk '{print $2}')
