#!/bin/bash
# Simple SHELL script for Linux and UNIX system monitoring with
# ping command
# code by robert
for ((a=1;a<=255;a++));do
HOSTS="172.16.1.$a"
COUNT=1
for myhost in $HOSTS
do
  count=$(ping -c $COUNT $myhost | grep 'received' | awk -F',' '{ print $2 }' | awk '{ print $1 }')
if [ $count -eq 0 ]; then # 100% failue
  echo "$myhost is down (ping failed)"
else
  echo "$myhost is up"
fi
done
done