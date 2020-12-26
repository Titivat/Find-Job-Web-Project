1. Go to working directory (web-programing-project/backend/)
2. docker-compose up
database: http://localhost:8080/            pollakit.n.dev@gmail.com psd: secret
django admin: http://localhost:8000/admin   usr:admin psd:secret
if django admin cannot find account which means database is clean and nothing there go to following steps

3.open a new cmd and go to the working directory
4. docker-compose run web python manage.py createsuperuser
5. docker-compose run web python manage.py makemigrations forums
6. docker-compose run web python manage.py makemigrations positions
7. docker-compose run web python manage.py makemigrations posts
8. docker-compose run web python manage.py makemigrations users
9. docker-compose run web python manage.py migrate

admin/

api-auth/
api/v1/dj-rest-auth/
api/v1/dj-rest-auth/registration/

api/login/<str:username>/<str:password>/    GET/

api/user/               GET/POST

api/employee/           GET/POST
api/employee/<int:pk>/  GET/POST/PUT/DELETE

api/company/            GET/POST
api/company/<int:pk>/   GET/POST/PUT/DELETE


api/forum/              GET/POST
api/forum/<int:pk>/     GET/POST/PUT/DELETE

api/position/           GET/POST
api/position/<int:pk>/  GET/POST/PUT/DELETE
api/position/company/<int:company_id>/ GET/
api/position/search/    

api/post/               GET/POST
api/post/forum/<int:forum_id> GET   
api/post/<int:pk>/      GET/POST/PUT/DELETE

api/appliedjob/             GET/POST
api/appliedjob/<int:pk>/    GET/POST/PUT/DELETE
api/appliedjob/company/<int:company_id>     GET/
api/appliedjob/employee/<int:employee_id>   GET/

api/city/               GET/
api/jobType/            GET/