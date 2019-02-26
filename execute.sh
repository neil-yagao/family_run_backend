#! /bin/bash
LOCAL_IP="rm-bp1158p1p9eltip58.mysql.rds.aliyuncs.com"
docker run -it --name team_run -p 3000:3000 \
 -e "MYSQL_URL=$LOCAL_IP" neilhu68/family_run_backend:0.1