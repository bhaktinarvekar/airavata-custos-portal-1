# Apache Airavata Custos Portal

Portal interface implemented in Django Framework to use and administer Custos Services.


#### Run instructions

1. Create a python virtual env for custos portal 
```
python -m venv venv
```
2. Install dependencies using 
```
pip install -r requirements.txt
```
3. Install custos client SDK in the virtual env (Follow instructions in "Install Custos Client SDK")  
4. Install all the npm dependencies
```
npm install
```
5. Build the application for production
```
npm run build or yarn build
```
6. Make migrations
```
python manage.py migrate
```
7. Run django server using manage.py file in custos_portal directory. 
```
python manage.py runserver
```


   
   
#### Install Custos Client SDK
1. Create install files for custos client SDK using [README](https://github.com/apache/airavata-custos/tree/develop/custos-client-sdks/custos-python-sdk)     
2. Install the zip files created in the dist folder after activating the virtual environment created for custos portal.
```
pip install custos-python-sdk-1.0.0.tar.gz
```


#### Architecture ####
This Django projects consists of 3 apps
- Admin: Handles all the requests and screens related to admin users in the portal
- Auth: Handles user registeration, login, passwords, login using institutional accounts
- Workspace: Handles all the requests for a regular users like 'create new tenant requests'

We also use vuejs for the screens in Admin and Workspace folders. The components and other javascript files can be found
at ```custos_portal\static\common```

#### Install Custos Admin portal on VM - Installation
Please follow the [installation guide](https://github.com/bhaktinarvekar/airavata-custos-portal-1/blob/standalone/installation_guide.md)
