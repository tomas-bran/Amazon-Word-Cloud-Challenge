# Amazon Word-Cloud Challenge 

Este proyecto proporciona una API que permite interactuar con productos de Amazon y generar una nube de palabras a partir de los palabras mas frecuentes en todas las descripciones. La API ofrece dos endpoints principales: uno para enviar la URL de un producto de Amazon y otro para solicitar una nube de palabras.

## Endpoints

### 1. /POST

Este endpoint acepta una sola query parameter `productUrl`, que es la URL de un producto específico en Amazon .

#### Ejemplo de uso con CURL

Para probar este endpoint, puedes usar el siguiente comando CURL:

curl -X POST "http://localhost:8080/api/product?productUrl=http%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00SMBFZNG"

#### Alternativa con script simulateRequests.sh

Alternativamente, puedes usar el script simulateRequests.sh proporcionado en la carpeta raíz del proyecto para simular solicitudes:

./simulateRequests.sh localhost 8080 productURL 1

### 2. /GET

Este endpoint acepta una sola query parameter TopWords, que define un valor entero no negativo para el tamaño deseado de la nube de palabras. Devuelve una respuesta con la N cantidad de palabras mas frecuentes.

#### Ejemplo de uso con CURL

Para probar este endpoint, puedes usar el siguiente comando CURL:

curl -X GET "http://localhost:8080/api/product?TopWords=5"
