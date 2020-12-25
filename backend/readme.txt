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


api/employee/           GET
api/employee/<int:pk>/  GET/POST/PUT/DELETE

api/company/            GET
api/company/<int:pk>/   GET/POST/PUT/DELETE

api/forum/              GET
api/forum/<int:pk>/     GET/POST/PUT/DELETE

api/position/           GET
api/position/<int:pk>/  GET/POST/PUT/DELETE

api/post/               GET
api/post/forum/<forum>  (integer) 1.Engineer 2.Business 3.Design  GET
api/post/<int:pk>/      GET/POST/PUT/DELETE