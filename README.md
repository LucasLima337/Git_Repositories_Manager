# Gerenciador de Repositórios Git

### Tecnologias Utilizadas 💻🛠:
[![javascript](https://img.shields.io/static/v1?label=&message=Javascript&color=8A8100&style=flat&logo=JavaScript)](https://github.com/LucasLima337)
[![node](https://img.shields.io/static/v1?label=&message=NodeJS&color=094B00&style=flat&logo=node.js)](https://github.com/LucasLima337)

[![insomnia](https://img.shields.io/static/v1?label=&message=Insomnia&color=5849BE&style=flat&logo=Insomnia)](https://github.com/LucasLima337)
[![yarn](https://img.shields.io/static/v1?label=&message=Yarn&color=2C8EFF&style=flat&logo=Yarn)](https://github.com/LucasLima337)


### Funcionalidades 🔎💡:
**Função**   | **Método** | **URL**
---------    | ------     | -------
Listar | GET | /repositories
Adicionar | POST | /repositories
Editar | PUT | /repositories/:id
Excluir | DELETE | /repositories/:id
Dar Likes | POST | /repositories/:id/like


### Parâmetros ⚙:
* Listar:
  * Parâmetro Query "title";
  * Permite buscar por repositórios com um determinado título.

* Adicionar:
  * Parâmtro Body "title", "url", "techs";
  * Permite enviar o título, url do repositório e suas tecnologias.

* Editar e Excluir:
  * Parâmetro Route "id";
  * Permite editar um repositório através do ID.

* Dar Likes:
  * Parâmetro Route "id";
  * Permite dar likes em um repositório através do ID.
