# PROXY-AUTH API

Endpoints

1. Registrarse

> curl --location --request POST 'http://localhost:3000/api/auth/signup' \
> --header 'Content-Type: application/json' \
> --data-raw '{
>     "email": "user@domain.com",
>     "password": "user-password"
> }'

2. Loguearse para obtener el token

> curl --location --request POST 'http://localhost:3000/api/auth/login' \
> --header 'Content-Type: application/json' \
> --data-raw '{
>   "email": "user-registered@domain.com",
>   "password": "user-registered-password"
> }'

3. Copiar el token en *token-from-response* de la response del paso previo para poder obtener los usuarios. 

> curl --location --request GET 'http://localhost:3000/api/user' \
> --header 'Authorization: Bearer token-from-response'

En este caso siempre devuelve la primer pagina. En caso de querer recibir otra pagina en particular agregar el query param ***?page=numer-page*** a la ruta.

> Nota: si se quiere optener un usuario en particular agregar el query param ***?email=user-to-search@domain.com*** a la ruta.