1. Go to working directory (web-programing-project/backend/)
2. docker-compose up
database: http://localhost:8080/            pollakit.n.dev@gmail.com psd: secret
django admin: http://localhost:8000/admin   usr:admin psd:secret
if django admin cannot find account which means database is clean and nothing there go to following steps

3.open a new cmd and go to the working directory
4. docker-compose run web python manage.py createsuperuser
5. docker-compose run web python manage.py makemigrations appliedjobs
5. docker-compose run web python manage.py makemigrations forums
6. docker-compose run web python manage.py makemigrations positions
7. docker-compose run web python manage.py makemigrations posts
8. docker-compose run web python manage.py makemigrations users
9. docker-compose run web python manage.py migrate

pgsql-server
admin
secret

admin/

GET/                    api/login/<str:email>/<str:password>/    

GET/POST                api/user/               

GET/POST                api/employee/           
GET/POST/PUT/DELETE     api/employee/<int:pk>/  
GET/                    api/employee/search/?user__id=<int:user__id>  

GET/POST                api/company/            
GET/POST/PUT/DELETE     api/company/<int:pk>/   
GET/                    api/company/search/?user__id=<int:employee_id>


GET/POST                api/forum/              
GET/POST/PUT/DELETE     api/forum/<int:pk>/     

GET/POST                api/position/           
GET/POST/PUT/DELETE     api/position/<int:pk>/  
GET/                    api/position/company/<int:company_id>/
GET/                    api/position/search/?search=test
GET/                    api/position/search/?company__user__city=&industry=&jobtype=&ordering=-updated_at&senority=&title=

GET/POST                api/post/               
GET/                    api/post/forum/<int:forum_id>   
GET/POST/PUT/DELETE     api/post/<int:pk>/      

GET/POST                api/appliedjob/             
GET/POST/PUT/DELETE     api/appliedjob/<int:pk>/    
GET/                    api/appliedjob/company/<int:company_id>     
GET/                    api/appliedjob/employee/<int:employee_id>   
GET/                    api/appliedjob/search/?position=<int:position_id>   

GET/                    api/city/               
GET/                    api/jobType/            