#Installing Custos Admin portal on VM

a.	Installation and Configuration:
####1.	Install mod_wsgi and httpd on the VM 
```
sudo yum install httpd mod_wsgi
```
####2.	Install and configure python 
####3.	Install python pip
```
sudo yum install python-pip
```
####4.	Install django 
```
sudo yum install django
```
b.	Clone the git repository and follow the installation step mentioned in the Readme.
c.	Configuration of the mod_wsgi and httpd 
Refer -> https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-apache-and-mod_wsgi-on-centos-7
####1.	Create a custos.conf file within /etc/httpd/conf.d. This file contains the configuration required for mod_wsgi
####2.	Try for http which is on port 80. The conf file is mentioned below:
```
<VirtualHost *:80>
    ServerName dev.portal.custos.scigap.org

    Alias /static/ /home/centos/airavata-custos-portal-1/custos_portal/static_files/

    <Directory /home/centos/airavata-custos-portal-1/custos_portal/static_files/>
    Require all granted
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
    </Directory>

    <Directory /home/centos/airavata-custos-portal-1/custos_portal/custos_portal>
         <Files wsgi.py>
            Require all granted
        </Files>
    </Directory>

   DocumentRoot /home/centos/airavata-custos-portal-1/custos_portal/
   ErrorLog /var/log/httpd/error-log
   CustomLog /var/log/httpd/access-log combined

RewriteEngine on
RewriteCond %{SERVER_NAME} =dev.portal.custos.scigap.org
RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
</VirtualHost>
```
####3.	Install the CA certificate using letsencrypt. Follow the tutorial -> https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-centos-7.
####4.	Once the certificate is successfully installed, create the conf file for https on port 443.
####5.	Install selinux by following the tutorial -> https://www.digitalocean.com/community/tutorials/an-introduction-to-selinux-on-centos-7-part-1-basic-concepts


