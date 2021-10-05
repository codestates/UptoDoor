#!/bin/bash
cd /home/ubuntu/UptoDoor/server

export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export DATABASE=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE --query Parameters[0].Value | sed 's/"//g')
export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export REFRESH_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names REFRESH_SECRET --query Parameters[0].Value | sed 's/"//g')
export accessKeyId=$(aws ssm get-parameters --region ap-northeast-2 --names accessKeyId --query Parameters[0].Value | sed 's/"//g')
export secretAccessKey=$(aws ssm get-parameters --region ap-northeast-2 --names secretAccessKey --query Parameters[0].Value | sed 's/"//g')
authbind --deep pm2 start index.js