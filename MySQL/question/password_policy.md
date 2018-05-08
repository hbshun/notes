 
 SHOW VARIABLES LIKE 'validate_password%';

 set global validate_password.policy=0;

 alter user 'root'@'%' identified by 'xxxx';

 create user 'root'@'%' identified by 'xxxx';

 GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'XXXX';